// 'use client';
// // src/app/cart/page.tsx
// import { Header } from '@/components/layout/Header';
// import { Footer } from '@/components/layout/Footer';
// import { useCartStore } from '@/lib/store';
// import { formatPrice } from '@/lib/utils';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
// import { useRouter } from 'next/navigation';
// import { useSession } from 'next-auth/react';
// import toast from 'react-hot-toast';

// export default function CartPage() {
//   const { items, removeItem, updateQuantity, getTotalPrice } = useCartStore();
//   const router = useRouter();
//   const { data: session } = useSession();

//   const subtotal = getTotalPrice();
//   const shippingFee = subtotal >= 2000 ? 0 : 200;
//   const total = subtotal + shippingFee;

//   const handleCheckout = () => {
//     if (!session) {
//       toast.error('Please login to checkout');
//       router.push('/auth/login?callbackUrl=/checkout');
//       return;
//     }
//     router.push('/checkout');
//   };

//   if (items.length === 0) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <Header />
//         <main className="max-w-2xl mx-auto px-4 py-16 text-center">
//           <ShoppingBag size={72} className="mx-auto text-gray-200 mb-4" />
//           <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
//           <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
//           <Link
//             href="/shop"
//             className="inline-flex items-center gap-2 bg-[#F85606] text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
//           >
//             Start Shopping <ArrowRight size={18} />
//           </Link>
//         </main>
//         <Footer />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />
//       <main className="max-w-6xl mx-auto px-4 py-6">
//         <h1 className="text-2xl font-bold text-gray-800 mb-6">Shopping Cart ({items.length} items)</h1>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Cart Items */}
//           <div className="lg:col-span-2 space-y-3">
//             {items.map((item) => (
//               <div key={`${item.productId}-${item.variant}`} className="bg-white rounded-xl border border-gray-100 p-4 flex gap-4">
//                 <Link href={`/shop/${item.productId}`} className="flex-shrink-0">
//                   <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
//                     <Image src={item.image} alt={item.name} fill className="object-cover" />
//                   </div>
//                 </Link>

//                 <div className="flex-1 min-w-0">
//                   <Link href={`/shop/${item.productId}`}>
//                     <p className="text-sm font-semibold text-gray-800 hover:text-[#F85606] line-clamp-2">{item.name}</p>
//                   </Link>
//                   {item.variant && <p className="text-xs text-gray-500 mt-0.5">{item.variant}</p>}

//                   <div className="flex items-center justify-between mt-3">
//                     <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
//                       <button
//                         onClick={() => updateQuantity(item.productId, item.quantity - 1, item.variant)}
//                         className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 transition-colors"
//                       >
//                         <Minus size={13} />
//                       </button>
//                       <span className="w-10 text-center text-sm font-semibold">{item.quantity}</span>
//                       <button
//                         onClick={() => updateQuantity(item.productId, item.quantity + 1, item.variant)}
//                         disabled={item.quantity >= item.stock}
//                         className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 disabled:opacity-40 transition-colors"
//                       >
//                         <Plus size={13} />
//                       </button>
//                     </div>

//                     <div className="text-right">
//                       <p className="text-base font-bold text-[#F85606]">
//                         {formatPrice((item.salePrice ?? item.price) * item.quantity)}
//                       </p>
//                       {item.salePrice && (
//                         <p className="text-xs text-gray-400 line-through">{formatPrice(item.price * item.quantity)}</p>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 <button
//                   onClick={() => removeItem(item.productId, item.variant)}
//                   className="self-start p-1.5 text-gray-400 hover:text-red-500 transition-colors"
//                 >
//                   <Trash2 size={16} />
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* Order Summary */}
//           <div className="space-y-4">
//             <div className="bg-white rounded-xl border border-gray-100 p-5">
//               <h2 className="text-lg font-bold text-gray-800 mb-4">Order Summary</h2>

//               <div className="space-y-3 text-sm">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Subtotal ({items.reduce((s, i) => s + i.quantity, 0)} items)</span>
//                   <span className="font-medium">{formatPrice(subtotal)}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Shipping</span>
//                   <span className={`font-medium ${shippingFee === 0 ? 'text-green-600' : ''}`}>
//                     {shippingFee === 0 ? 'FREE' : formatPrice(shippingFee)}
//                   </span>
//                 </div>
//                 {shippingFee > 0 && (
//                   <p className="text-xs text-gray-400">Add {formatPrice(2000 - subtotal)} more for free shipping</p>
//                 )}
//                 <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-base">
//                   <span>Total</span>
//                   <span className="text-[#F85606]">{formatPrice(total)}</span>
//                 </div>
//               </div>

//               <button
//                 onClick={handleCheckout}
//                 className="w-full mt-5 bg-[#F85606] hover:bg-orange-600 text-white py-3.5 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
//               >
//                 Proceed to Checkout <ArrowRight size={18} />
//               </button>

//               <Link
//                 href="/shop"
//                 className="block text-center mt-3 text-sm text-gray-500 hover:text-[#F85606] transition-colors"
//               >
//                 Continue Shopping
//               </Link>
//             </div>

//             {/* Promo Code */}
//             <div className="bg-white rounded-xl border border-gray-100 p-5">
//               <h3 className="text-sm font-semibold text-gray-800 mb-3">Promo Code</h3>
//               <div className="flex gap-2">
//                 <input
//                   type="text"
//                   placeholder="Enter promo code"
//                   className="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-[#F85606]"
//                 />
//                 <button className="bg-gray-800 text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors font-medium">
//                   Apply
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }
'use client';
// src/app/cart/page.tsx
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useCartStore } from '@/lib/store';
import { formatPrice } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotalPrice } = useCartStore();
  const router = useRouter();
  const { data: session } = useSession();

  const subtotal = getTotalPrice();
  const shippingFee = subtotal >= 2000 ? 0 : 200;
  const total = subtotal + shippingFee;

  const handleCheckout = () => {
    if (!session) {
      toast.error('Please login to checkout');
      router.push('/auth/login?callbackUrl=/checkout');
      return;
    }
    router.push('/checkout');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#FAF9F6]">
        <Header />
        <main className="max-w-2xl mx-auto px-4 py-20 text-center">
          <ShoppingBag size={72} className="mx-auto text-[#B68D40]/20 mb-6" />
          <h2 className="text-3xl font-black text-[#2D1B0F] mb-3 uppercase tracking-tight">Your Cart is Empty</h2>
          <p className="text-stone-500 mb-8 font-medium">Looks like you haven't added anything to your collection yet.</p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-[#2D1B0F] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-[#B68D40] hover:text-[#2D1B0F] transition-all duration-300 shadow-lg"
          >
            Start Shopping <ArrowRight size={18} />
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-black text-[#2D1B0F] mb-8 uppercase tracking-tight">Shopping Cart ({items.length} items)</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={`${item.productId}-${item.variant}`} className="bg-white rounded-2xl border border-stone-200 p-5 flex gap-5 shadow-sm">
                <Link href={`/shop/${item.productId}`} className="flex-shrink-0">
                  <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-stone-100 border border-stone-200">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                </Link>

                <div className="flex-1 min-w-0">
                  <Link href={`/shop/${item.productId}`}>
                    <p className="text-sm font-bold text-[#2D1B0F] hover:text-[#B68D40] line-clamp-2 transition-colors">{item.name}</p>
                  </Link>
                  {item.variant && <p className="text-[10px] text-stone-400 mt-1 uppercase font-bold tracking-widest">{item.variant}</p>}

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-stone-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.productId, item.quantity - 1, item.variant)}
                        className="w-9 h-9 flex items-center justify-center hover:bg-stone-50 transition-colors text-[#2D1B0F]"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-10 text-center text-sm font-bold text-[#2D1B0F]">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.quantity + 1, item.variant)}
                        disabled={item.quantity >= item.stock}
                        className="w-9 h-9 flex items-center justify-center hover:bg-stone-50 disabled:opacity-30 transition-colors text-[#2D1B0F]"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-base font-black text-[#2D1B0F]">
                        {formatPrice((item.salePrice ?? item.price) * item.quantity)}
                      </p>
                      {item.salePrice && (
                        <p className="text-[10px] text-stone-400 line-through font-medium">{formatPrice(item.price * item.quantity)}</p>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => removeItem(item.productId, item.variant)}
                  className="self-start p-2 text-stone-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm sticky top-24">
              <h2 className="text-lg font-black text-[#2D1B0F] mb-6 uppercase tracking-tight">Order Summary</h2>

              <div className="space-y-4 text-sm font-medium">
                <div className="flex justify-between">
                  <span className="text-stone-500 text-xs uppercase tracking-widest font-bold">Subtotal ({items.reduce((s, i) => s + i.quantity, 0)} items)</span>
                  <span className="text-[#2D1B0F] font-bold">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500 text-xs uppercase tracking-widest font-bold">Shipping</span>
                  <span className={`font-bold ${shippingFee === 0 ? 'text-green-600' : 'text-[#2D1B0F]'}`}>
                    {shippingFee === 0 ? 'FREE' : formatPrice(shippingFee)}
                  </span>
                </div>
                <div className="border-t border-stone-100 pt-4 flex justify-between font-black text-lg">
                  <span className="text-[#2D1B0F] uppercase tracking-wider text-sm">Total</span>
                  <span className="text-[#B68D40]">{formatPrice(total)}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full mt-6 bg-[#2D1B0F] hover:bg-[#B68D40] text-white hover:text-[#2D1B0F] py-4 rounded-xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-300 shadow-lg"
              >
                Proceed to Checkout
              </button>

              <Link
                href="/shop"
                className="block text-center mt-4 text-xs font-bold text-stone-400 hover:text-[#B68D40] uppercase tracking-widest transition-colors"
              >
                Continue Shopping
              </Link>
            </div>

            {/* Promo Code */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
              <h3 className="text-xs font-black text-[#2D1B0F] mb-4 uppercase tracking-widest">Promo Code</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="flex-1 text-sm border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-[#B68D40] focus:ring-1 focus:ring-[#B68D40]/20"
                />
                <button className="bg-[#2D1B0F] text-white text-[10px] px-4 py-3 rounded-xl font-bold uppercase tracking-widest hover:bg-[#B68D40] hover:text-[#2D1B0F] transition-colors">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}