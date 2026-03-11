// // src/app/orders/page.tsx
// import { getServerSession } from 'next-auth';
// import { authOptions } from '@/lib/auth';
// import { prisma } from '@/lib/prisma';
// import { Header } from '@/components/layout/Header';
// import { Footer } from '@/components/layout/Footer';
// import { formatPrice } from '@/lib/utils';
// import Link from 'next/link';
// import Image from 'next/image';
// import { redirect } from 'next/navigation';
// import { Package, ChevronRight } from 'lucide-react';

// const statusColors: Record<string, string> = {
//   PENDING: 'bg-yellow-100 text-yellow-700',
//   CONFIRMED: 'bg-blue-100 text-blue-700',
//   PROCESSING: 'bg-purple-100 text-purple-700',
//   SHIPPED: 'bg-indigo-100 text-indigo-700',
//   DELIVERED: 'bg-green-100 text-green-700',
//   CANCELLED: 'bg-red-100 text-red-700',
//   REFUNDED: 'bg-gray-100 text-gray-600',
// };

// export default async function OrdersPage() {
//   const session = await getServerSession(authOptions);
//   if (!session) redirect('/auth/login?callbackUrl=/orders');

//   const orders = await prisma.order.findMany({
//     where: { userId: (session.user as any).id },
//     include: {
//       items: {
//         include: { product: { select: { name: true, images: true, slug: true } } },
//         take: 3,
//       },
//     },
//     orderBy: { createdAt: 'desc' },
//   });

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />
//       <main className="max-w-4xl mx-auto px-4 py-6">
//         <h1 className="text-2xl font-bold text-gray-800 mb-6">My Orders</h1>

//         {orders.length === 0 ? (
//           <div className="text-center py-16 bg-white rounded-xl border border-gray-100">
//             <Package size={64} className="mx-auto text-gray-200 mb-4" />
//             <h3 className="text-lg font-semibold text-gray-800 mb-2">No orders yet</h3>
//             <p className="text-gray-500 text-sm mb-6">Start shopping to see your orders here</p>
//             <Link href="/shop" className="bg-[#F85606] text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-orange-600 transition-colors">
//               Shop Now
//             </Link>
//           </div>
//         ) : (
//           <div className="space-y-4">
//             {orders.map((order) => (
//               <div key={order.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
//                 <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-gray-50">
//                   <div className="flex items-center gap-4 text-sm">
//                     <div>
//                       <p className="text-xs text-gray-500">Order Number</p>
//                       <p className="font-semibold text-gray-800">{order.orderNumber}</p>
//                     </div>
//                     <div>
//                       <p className="text-xs text-gray-500">Date</p>
//                       <p className="font-medium text-gray-700">{new Date(order.createdAt).toLocaleDateString()}</p>
//                     </div>
//                     <div>
//                       <p className="text-xs text-gray-500">Total</p>
//                       <p className="font-semibold text-[#F85606]">{formatPrice(order.total)}</p>
//                     </div>
//                   </div>
//                   <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColors[order.status] || 'bg-gray-100 text-gray-600'}`}>
//                     {order.status}
//                   </span>
//                 </div>

//                 <div className="p-4">
//                   <div className="flex gap-3 flex-wrap">
//                     {order.items.map((item) => (
//                       <Link key={item.id} href={`/shop/${item.product.slug}`} className="flex items-center gap-2 hover:opacity-80">
//                         <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
//                           <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
//                         </div>
//                         <div>
//                           <p className="text-xs text-gray-700 line-clamp-1 max-w-32">{item.product.name}</p>
//                           <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
//                           <p className="text-xs font-semibold text-[#F85606]">{formatPrice(item.price * item.quantity)}</p>
//                         </div>
//                       </Link>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="px-4 py-3 border-t border-gray-100 flex justify-between items-center">
//                   <p className="text-xs text-gray-500">
//                     Payment: <span className="font-medium text-gray-700">{order.paymentMethod.toUpperCase()}</span>
//                   </p>
//                   <Link
//                     href={`/orders/${order.id}`}
//                     className="text-sm text-[#F85606] font-medium hover:underline flex items-center gap-1"
//                   >
//                     View Details <ChevronRight size={14} />
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </main>
//       <Footer />
//     </div>
//   );
// }

import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { Package, ChevronRight, ShoppingBag } from 'lucide-react';

const statusStyles: Record<string, string> = {
  PENDING: 'bg-amber-100 text-amber-800 border-amber-200',
  CONFIRMED: 'bg-blue-50 text-blue-800 border-blue-200',
  PROCESSING: 'bg-purple-50 text-purple-800 border-purple-200',
  SHIPPED: 'bg-indigo-50 text-indigo-800 border-indigo-200',
  DELIVERED: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  CANCELLED: 'bg-stone-100 text-stone-600 border-stone-200',
  REFUNDED: 'bg-stone-100 text-stone-600 border-stone-200',
};

export default async function OrdersPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/auth/login?callbackUrl=/orders');

  const orders = await prisma.order.findMany({
    where: { userId: (session.user as any).id },
    include: {
      items: {
        include: { product: { select: { name: true, images: true, slug: true } } },
        take: 3,
      },
    },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-black text-[#2D1B0F] mb-8 uppercase tracking-widest">My Orders</h1>

        {orders.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-stone-200 shadow-sm">
            <div className="bg-[#B68D40]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag size={32} className="text-[#B68D40]" />
            </div>
            <h3 className="text-lg font-black text-[#2D1B0F] uppercase tracking-widest mb-2">No orders yet</h3>
            <p className="text-stone-500 text-sm mb-8 font-medium">Your order history is empty. Start shopping to begin your journey.</p>
            <Link href="/shop" className="bg-[#2D1B0F] text-[#FAF9F6] px-8 py-3 rounded-xl text-xs font-black uppercase tracking-[0.2em] hover:bg-[#B68D40] transition-colors shadow-lg">
              Explore Collection
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order.id} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100 bg-[#FAF9F6]">
                  <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-widest">
                    <div>
                      <p className="text-stone-400 mb-0.5">Order No</p>
                      <p className="text-[#2D1B0F]">{order.orderNumber}</p>
                    </div>
                    <div>
                      <p className="text-stone-400 mb-0.5">Date</p>
                      <p className="text-[#2D1B0F]">{new Date(order.createdAt).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-stone-400 mb-0.5">Total</p>
                      <p className="text-[#B68D40]">{formatPrice(order.total)}</p>
                    </div>
                  </div>
                  <span className={`text-[10px] font-black px-3 py-1 rounded-full border ${statusStyles[order.status] || 'bg-stone-100'}`}>
                    {order.status}
                  </span>
                </div>

                {/* Items Preview */}
                <div className="p-6">
                  <div className="flex gap-4 overflow-x-auto pb-2">
                    {order.items.map((item) => (
                      <Link key={item.id} href={`/shop/${item.product.slug}`} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-stone-100 border border-stone-100 flex-shrink-0">
                          <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
                        </div>
                        <div className="min-w-[120px]">
                          <p className="text-xs font-bold text-[#2D1B0F] line-clamp-1">{item.product.name}</p>
                          <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">Qty: {item.quantity}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 py-4 border-t border-stone-100 flex justify-between items-center bg-[#FAF9F6]">
                  <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">
                    Payment: {order.paymentMethod.toUpperCase()}
                  </p>
                  <Link
                    href={`/orders/${order.id}`}
                    className="text-xs text-[#B68D40] font-black uppercase tracking-[0.1em] hover:text-[#2D1B0F] flex items-center gap-1 transition-colors"
                  >
                    View Details <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}