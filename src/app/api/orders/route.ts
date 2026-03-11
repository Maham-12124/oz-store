// src/app/api/orders/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { generateOrderNumber } from '@/lib/utils';

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { address, paymentMethod, items, subtotal, shippingFee, total } = await req.json();

    // Create address
    const savedAddress = await prisma.address.create({
      data: {
        userId: (session.user as any).id,
        name: address.name,
        phone: address.phone,
        street: address.street,
        city: address.city,
        province: address.province || '',
        postalCode: address.postalCode || '',
      },
    });

    // Create order
    const order = await prisma.order.create({
      data: {
        orderNumber: generateOrderNumber(),
        userId: (session.user as any).id,
        addressId: savedAddress.id,
        paymentMethod,
        subtotal,
        shippingFee,
        total,
        items: {
          create: items.map((item: any) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price,
            variant: item.variant,
          })),
        },
      },
      include: { items: true, address: true },
    });

    // Update stock
    for (const item of items) {
      await prisma.product.update({
        where: { id: item.productId },
        data: {
          stock: { decrement: item.quantity },
          sold: { increment: item.quantity },
        },
      });
    }

    return NextResponse.json(order, { status: 201 });
  } catch (error) {
    console.error('Order error:', error);
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const orders = await prisma.order.findMany({
    where: { userId: (session.user as any).id },
    include: {
      items: { include: { product: { select: { name: true, images: true, slug: true } } } },
      address: true,
    },
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json(orders);
}
