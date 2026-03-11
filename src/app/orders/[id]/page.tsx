// // src/app/orders/[id]/page.tsx
// import { getServerSession } from 'next-auth';
// import { authOptions } from '@/lib/auth';
// import { prisma } from '@/lib/prisma';
// import { Header } from '@/components/layout/Header';
// import { Footer } from '@/components/layout/Footer';
// import { formatPrice } from '@/lib/utils';
// import Link from 'next/link';
// import Image from 'next/image';
// import { notFound, redirect } from 'next/navigation';
// import { CheckCircle, Package, Truck, MapPin } from 'lucide-react';

// const statusSteps = ['PENDING', 'CONFIRMED', 'PROCESSING', 'SHIPPED', 'DELIVERED'];

// export default async function OrderDetailPage({ params }: { params: { id: string } }) {
//   const session = await getServerSession(authOptions);
//   if (!session) redirect('/auth/login');

//   const order = await prisma.order.findFirst({
//     where: { id: params.id, userId: (session.user as any).id },
//     include: {
//       items: {
//         include: { product: { select: { name: true, images: true, slug: true } } },
//       },
//       address: true,
//     },
//   });

//   if (!order) notFound();

//   const currentStep = statusSteps.indexOf(order.status);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />
//       <main className="max-w-4xl mx-auto px-4 py-6">
//         {/* Success Banner */}
//         <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-6 flex items-center gap-3">
//           <CheckCircle className="text-green-500 flex-shrink-0" size={28} />
//           <div>
//             <h1 className="text-lg font-bold text-green-800">Order Placed Successfully!</h1>
//             <p className="text-sm text-green-600">Order #{order.orderNumber} • {new Date(order.createdAt).toLocaleString()}</p>
//           </div>
//         </div>

//         {/* Order Status */}
//         <div className="bg-white rounded-xl border border-gray-100 p-5 mb-4">
//           <h2 className="font-semibold text-gray-800 mb-5 flex items-center gap-2">
//             <Package size={16} className="text-[#F85606]" /> Order Status
//           </h2>
//           <div className="flex items-center justify-between">
//             {statusSteps.map((status, i) => (
//               <div key={status} className="flex flex-col items-center flex-1">
//                 <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-1
//                   ${i <= currentStep ? 'bg-[#F85606] text-white' : 'bg-gray-200 text-gray-400'}`}>
//                   {i < currentStep ? '✓' : i + 1}
//                 </div>
//                 <p className={`text-xs text-center font-medium ${i <= currentStep ? 'text-[#F85606]' : 'text-gray-400'}`}>
//                   {status.charAt(0) + status.slice(1).toLowerCase()}
//                 </p>
//                 {i < statusSteps.length - 1 && (
//                   <div className={`absolute h-0.5 w-full ${i < currentStep ? 'bg-[#F85606]' : 'bg-gray-200'}`} />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {/* Items */}
//           <div className="md:col-span-2 bg-white rounded-xl border border-gray-100 p-5">
//             <h2 className="font-semibold text-gray-800 mb-4">Order Items</h2>
//             <div className="space-y-4">
//               {order.items.map((item) => (
//                 <div key={item.id} className="flex gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
//                   <Link href={`/shop/${item.product.slug}`}>
//                     <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
//                       <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
//                     </div>
//                   </Link>
//                   <div className="flex-1">
//                     <Link href={`/shop/${item.product.slug}`} className="text-sm font-medium text-gray-800 hover:text-[#F85606]">
//                       {item.product.name}
//                     </Link>
//                     {item.variant && <p className="text-xs text-gray-500">{item.variant}</p>}
//                     <p className="text-xs text-gray-500 mt-0.5">Qty: {item.quantity}</p>
//                   </div>
//                   <p className="text-sm font-semibold text-gray-800">{formatPrice(item.price * item.quantity)}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Price Summary */}
//             <div className="border-t border-gray-100 mt-4 pt-4 space-y-2 text-sm">
//               <div className="flex justify-between text-gray-600">
//                 <span>Subtotal</span><span>{formatPrice(order.subtotal)}</span>
//               </div>
//               <div className="flex justify-between text-gray-600">
//                 <span>Shipping</span>
//                 <span className={order.shippingFee === 0 ? 'text-green-600' : ''}>
//                   {order.shippingFee === 0 ? 'FREE' : formatPrice(order.shippingFee)}
//                 </span>
//               </div>
//               <div className="flex justify-between font-bold text-base border-t border-gray-100 pt-2">
//                 <span>Total</span>
//                 <span className="text-[#F85606]">{formatPrice(order.total)}</span>
//               </div>
//             </div>
//           </div>

//           {/* Delivery & Payment */}
//           <div className="space-y-4">
//             <div className="bg-white rounded-xl border border-gray-100 p-4">
//               <h3 className="font-semibold text-sm text-gray-800 mb-3 flex items-center gap-1.5">
//                 <MapPin size={14} className="text-[#F85606]" /> Delivery Address
//               </h3>
//               <div className="text-sm text-gray-600 space-y-0.5">
//                 <p className="font-medium text-gray-800">{order.address.name}</p>
//                 <p>{order.address.phone}</p>
//                 <p>{order.address.street}</p>
//                 <p>{order.address.city}{order.address.province ? `, ${order.address.province}` : ''}</p>
//               </div>
//             </div>

//             <div className="bg-white rounded-xl border border-gray-100 p-4">
//               <h3 className="font-semibold text-sm text-gray-800 mb-3 flex items-center gap-1.5">
//                 <Truck size={14} className="text-[#F85606]" /> Payment Info
//               </h3>
//               <div className="text-sm text-gray-600 space-y-1">
//                 <div className="flex justify-between">
//                   <span>Method</span>
//                   <span className="font-medium text-gray-800">{order.paymentMethod.toUpperCase()}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Status</span>
//                   <span className={`font-medium ${order.paymentStatus === 'PAID' ? 'text-green-600' : 'text-orange-600'}`}>
//                     {order.paymentStatus}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <Link href="/orders" className="block text-center text-sm text-[#F85606] hover:underline">
//               ← Back to Orders
//             </Link>
//           </div>
//         </div>
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
import { notFound, redirect } from 'next/navigation';
import { CheckCircle, Package, Truck, MapPin, ReceiptText } from 'lucide-react';

const statusSteps = ['PENDING', 'CONFIRMED', 'PROCESSING', 'SHIPPED', 'DELIVERED'];

export default async function OrderDetailPage({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/auth/login');

  const order = await prisma.order.findFirst({
    where: { id: params.id, userId: (session.user as any).id },
    include: {
      items: {
        include: { product: { select: { name: true, images: true, slug: true } } },
      },
      address: true,
    },
  });

  if (!order) notFound();

  const currentStep = statusSteps.indexOf(order.status);

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-10">
        
        {/* Success Banner */}
        <div className="bg-[#2D1B0F] border border-[#B68D40] rounded-2xl p-6 mb-8 flex items-center gap-4 shadow-xl">
          <div className="bg-[#B68D40]/20 p-3 rounded-full">
            <CheckCircle className="text-[#B68D40]" size={32} />
          </div>
          <div>
            <h1 className="text-xl font-black text-white uppercase tracking-widest">Order Confirmed</h1>
            <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mt-1">
              Order #{order.orderNumber} • {new Date(order.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Order Status Progress */}
        <div className="bg-white rounded-2xl border border-stone-200 p-8 mb-8 shadow-sm">
          <h2 className="font-black text-[#2D1B0F] mb-8 flex items-center gap-2 uppercase tracking-widest text-sm">
            <Package size={18} className="text-[#B68D40]" /> Tracking Status
          </h2>
          <div className="flex items-center justify-between relative">
            {statusSteps.map((status, i) => (
              <div key={status} className="flex flex-col items-center flex-1 relative z-10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-black mb-3 transition-colors duration-500
                  ${i <= currentStep ? 'bg-[#B68D40] text-[#2D1B0F]' : 'bg-stone-100 text-stone-400'}`}>
                  {i < currentStep ? '✓' : i + 1}
                </div>
                <p className={`text-[10px] text-center font-bold uppercase tracking-widest ${i <= currentStep ? 'text-[#2D1B0F]' : 'text-stone-400'}`}>
                  {status}
                </p>
              </div>
            ))}
            {/* Progress Line */}
            <div className="absolute top-5 left-10 right-10 h-0.5 bg-stone-100 -z-0">
               <div className="h-full bg-[#B68D40] transition-all duration-1000" style={{ width: `${(currentStep / (statusSteps.length - 1)) * 100}%` }} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Items List */}
          <div className="md:col-span-2 bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
            <h2 className="font-black text-[#2D1B0F] mb-6 uppercase tracking-widest text-sm">Purchased Items</h2>
            <div className="space-y-6">
              {order.items.map((item) => (
                <div key={item.id} className="flex gap-4 items-center">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-stone-100 border border-stone-100">
                    <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <Link href={`/shop/${item.product.slug}`} className="text-sm font-bold text-[#2D1B0F] hover:text-[#B68D40] uppercase tracking-wide">
                      {item.product.name}
                    </Link>
                    {item.variant && <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">{item.variant}</p>}
                    <p className="text-[10px] text-stone-500 font-bold mt-1">QTY: {item.quantity}</p>
                  </div>
                  <p className="text-sm font-black text-[#2D1B0F]">{formatPrice(item.price * item.quantity)}</p>
                </div>
              ))}
            </div>

            {/* Price Summary */}
            <div className="border-t border-stone-100 mt-6 pt-6 space-y-3">
              <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-stone-500">
                <span>Subtotal</span><span>{formatPrice(order.subtotal)}</span>
              </div>
              <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-stone-500">
                <span>Shipping</span>
                <span className={order.shippingFee === 0 ? 'text-green-600' : 'text-[#2D1B0F]'}>
                  {order.shippingFee === 0 ? 'FREE' : formatPrice(order.shippingFee)}
                </span>
              </div>
              <div className="flex justify-between font-black text-[#2D1B0F] text-lg border-t border-stone-100 pt-4">
                <span>Total Amount</span>
                <span className="text-[#B68D40]">{formatPrice(order.total)}</span>
              </div>
            </div>
          </div>

          {/* Customer Details Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
              <h3 className="font-black text-[#2D1B0F] mb-5 flex items-center gap-2 uppercase tracking-widest text-xs">
                <MapPin size={16} className="text-[#B68D40]" /> Delivery Address
              </h3>
              <div className="text-xs text-stone-600 space-y-1 font-medium">
                <p className="font-bold text-[#2D1B0F]">{order.address.name}</p>
                <p>{order.address.phone}</p>
                <p>{order.address.street}</p>
                <p>{order.address.city}{order.address.province ? `, ${order.address.province}` : ''}</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
              <h3 className="font-black text-[#2D1B0F] mb-5 flex items-center gap-2 uppercase tracking-widest text-xs">
                <ReceiptText size={16} className="text-[#B68D40]" /> Payment Details
              </h3>
              <div className="text-xs space-y-2">
                <div className="flex justify-between font-bold text-stone-500 uppercase tracking-widest">
                  <span>Method</span>
                  <span className="text-[#2D1B0F]">{order.paymentMethod.toUpperCase()}</span>
                </div>
                <div className="flex justify-between font-bold text-stone-500 uppercase tracking-widest">
                  <span>Status</span>
                  <span className={`px-2 py-0.5 rounded-full ${order.paymentStatus === 'PAID' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                    {order.paymentStatus}
                  </span>
                </div>
              </div>
            </div>

            <Link href="/orders" className="block text-center text-xs font-black text-[#B68D40] hover:text-[#2D1B0F] uppercase tracking-widest transition-colors">
              ← Back to Order History
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}