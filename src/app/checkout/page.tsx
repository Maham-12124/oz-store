// // 'use client';
// // // src/app/checkout/page.tsx
// // import { useState } from 'react';
// // import { Header } from '@/components/layout/Header';
// // import { Footer } from '@/components/layout/Footer';
// // import { useCartStore } from '@/lib/store';
// // import { formatPrice } from '@/lib/utils';
// // import Image from 'next/image';
// // import { useRouter } from 'next/navigation';
// // import { useSession } from 'next-auth/react';
// // import toast from 'react-hot-toast';
// // import { MapPin, CreditCard, Truck, CheckCircle } from 'lucide-react';

// // export default function CheckoutPage() {
// //   const { items, getTotalPrice, clearCart } = useCartStore();
// //   const { data: session } = useSession();
// //   const router = useRouter();
// //   const [loading, setLoading] = useState(false);
// //   const [step, setStep] = useState(1); // 1: address, 2: payment

// //   const [address, setAddress] = useState({
// //     name: session?.user?.name || '',
// //     phone: '',
// //     street: '',
// //     city: '',
// //     province: '',
// //     postalCode: '',
// //   });
// //   const [paymentMethod, setPaymentMethod] = useState('cod');

// //   const subtotal = getTotalPrice();
// //   const shippingFee = subtotal >= 2000 ? 0 : 200;
// //   const total = subtotal + shippingFee;

// //   const handlePlaceOrder = async () => {
// //     if (!address.name || !address.phone || !address.street || !address.city) {
// //       toast.error('Please fill in all required fields');
// //       return;
// //     }

// //     setLoading(true);
// //     try {
// //       const res = await fetch('/api/orders', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({
// //           address,
// //           paymentMethod,
// //           items: items.map((i) => ({
// //             productId: i.productId,
// //             quantity: i.quantity,
// //             price: i.salePrice ?? i.price,
// //             variant: i.variant,
// //           })),
// //           subtotal,
// //           shippingFee,
// //           total,
// //         }),
// //       });

// //       if (!res.ok) throw new Error('Order failed');
// //       const order = await res.json();
// //       clearCart();
// //       toast.success('Order placed successfully!');
// //       router.push(`/orders/${order.id}`);
// //     } catch {
// //       toast.error('Failed to place order. Please try again.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   if (!session) {
// //     router.push('/auth/login?callbackUrl=/checkout');
// //     return null;
// //   }

// //   if (items.length === 0) {
// //     router.push('/cart');
// //     return null;
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       <Header />
// //       <main className="max-w-5xl mx-auto px-4 py-6">
// //         <h1 className="text-2xl font-bold text-gray-800 mb-6">Checkout</h1>

// //         {/* Steps */}
// //         <div className="flex items-center gap-4 mb-8">
// //           {[
// //             { n: 1, label: 'Delivery Address', icon: MapPin },
// //             { n: 2, label: 'Payment', icon: CreditCard },
// //           ].map(({ n, label, icon: Icon }) => (
// //             <div key={n} className="flex items-center gap-2">
// //               <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
// //                 ${step >= n ? 'bg-[#F85606] text-white' : 'bg-gray-200 text-gray-500'}`}>
// //                 {step > n ? <CheckCircle size={16} /> : n}
// //               </div>
// //               <span className={`text-sm font-medium hidden sm:block ${step >= n ? 'text-gray-800' : 'text-gray-400'}`}>
// //                 {label}
// //               </span>
// //               {n < 2 && <div className={`w-12 h-0.5 ${step > n ? 'bg-[#F85606]' : 'bg-gray-200'}`} />}
// //             </div>
// //           ))}
// //         </div>

// //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// //           <div className="lg:col-span-2 space-y-4">
// //             {/* Delivery Address */}
// //             <div className="bg-white rounded-xl border border-gray-100 p-5">
// //               <div className="flex items-center gap-2 mb-4">
// //                 <MapPin size={18} className="text-[#F85606]" />
// //                 <h2 className="font-semibold text-gray-800">Delivery Address</h2>
// //               </div>
// //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
// //                 {[
// //                   { key: 'name', label: 'Full Name', placeholder: 'Enter full name', required: true },
// //                   { key: 'phone', label: 'Phone Number', placeholder: '03XX-XXXXXXX', required: true },
// //                   { key: 'street', label: 'Street Address', placeholder: 'House/flat number, street name', required: true, full: true },
// //                   { key: 'city', label: 'City', placeholder: 'e.g. Lahore', required: true },
// //                   { key: 'province', label: 'Province', placeholder: 'e.g. Punjab' },
// //                   { key: 'postalCode', label: 'Postal Code', placeholder: 'e.g. 54000' },
// //                 ].map(({ key, label, placeholder, required, full }) => (
// //                   <div key={key} className={full ? 'sm:col-span-2' : ''}>
// //                     <label className="text-xs font-medium text-gray-700 mb-1 block">
// //                       {label} {required && <span className="text-red-500">*</span>}
// //                     </label>
// //                     <input
// //                       type="text"
// //                       placeholder={placeholder}
// //                       value={(address as any)[key]}
// //                       onChange={(e) => setAddress({ ...address, [key]: e.target.value })}
// //                       className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 outline-none focus:border-[#F85606] transition-colors"
// //                     />
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Payment Method */}
// //             <div className="bg-white rounded-xl border border-gray-100 p-5">
// //               <div className="flex items-center gap-2 mb-4">
// //                 <CreditCard size={18} className="text-[#F85606]" />
// //                 <h2 className="font-semibold text-gray-800">Payment Method</h2>
// //               </div>
// //               <div className="space-y-2">
// //                 {[
// //                   { value: 'cod', label: 'Cash on Delivery', desc: 'Pay when your order arrives', icon: '💵' },
// //                   { value: 'easypaisa', label: 'EasyPaisa', desc: 'Pay via EasyPaisa mobile wallet', icon: '📱' },
// //                   { value: 'jazzcash', label: 'JazzCash', desc: 'Pay via JazzCash mobile wallet', icon: '💳' },
// //                   { value: 'card', label: 'Credit/Debit Card', desc: 'Visa, Mastercard accepted', icon: '💰' },
// //                 ].map((method) => (
// //                   <label key={method.value} className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-colors
// //                     ${paymentMethod === method.value ? 'border-[#F85606] bg-orange-50' : 'border-gray-100 hover:border-gray-200'}`}>
// //                     <input
// //                       type="radio"
// //                       name="payment"
// //                       value={method.value}
// //                       checked={paymentMethod === method.value}
// //                       onChange={(e) => setPaymentMethod(e.target.value)}
// //                       className="accent-[#F85606]"
// //                     />
// //                     <span className="text-xl">{method.icon}</span>
// //                     <div>
// //                       <p className="text-sm font-semibold text-gray-800">{method.label}</p>
// //                       <p className="text-xs text-gray-500">{method.desc}</p>
// //                     </div>
// //                   </label>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>

// //           {/* Order Summary */}
// //           <div>
// //             <div className="bg-white rounded-xl border border-gray-100 p-5 sticky top-24">
// //               <h2 className="font-bold text-gray-800 mb-4">Order Summary</h2>
// //               <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
// //                 {items.map((item) => (
// //                   <div key={`${item.productId}-${item.variant}`} className="flex gap-3">
// //                     <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
// //                       <Image src={item.image} alt={item.name} fill className="object-cover" />
// //                     </div>
// //                     <div className="flex-1 min-w-0">
// //                       <p className="text-xs text-gray-700 line-clamp-2">{item.name}</p>
// //                       <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
// //                     </div>
// //                     <p className="text-xs font-semibold text-gray-800 flex-shrink-0">
// //                       {formatPrice((item.salePrice ?? item.price) * item.quantity)}
// //                     </p>
// //                   </div>
// //                 ))}
// //               </div>

// //               <div className="border-t border-gray-100 pt-3 space-y-2 text-sm">
// //                 <div className="flex justify-between">
// //                   <span className="text-gray-600">Subtotal</span>
// //                   <span>{formatPrice(subtotal)}</span>
// //                 </div>
// //                 <div className="flex justify-between">
// //                   <span className="text-gray-600">Shipping</span>
// //                   <span className={shippingFee === 0 ? 'text-green-600' : ''}>{shippingFee === 0 ? 'FREE' : formatPrice(shippingFee)}</span>
// //                 </div>
// //                 <div className="border-t border-gray-100 pt-2 flex justify-between font-bold">
// //                   <span>Total</span>
// //                   <span className="text-[#F85606] text-lg">{formatPrice(total)}</span>
// //                 </div>
// //               </div>

// //               <button
// //                 onClick={handlePlaceOrder}
// //                 disabled={loading}
// //                 className="w-full mt-4 bg-[#F85606] hover:bg-orange-600 disabled:bg-gray-300 text-white py-3.5 rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
// //               >
// //                 {loading ? (
// //                   <><span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" /> Placing Order...</>
// //                 ) : (
// //                   <><Truck size={18} /> Place Order</>
// //                 )}
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </main>
// //       <Footer />
// //     </div>
// //   );
// // }
// 'use client';
// // src/app/checkout/page.tsx
// import { useState } from 'react';
// import { Header } from '@/components/layout/Header';
// import { Footer } from '@/components/layout/Footer';
// import { useCartStore } from '@/lib/store';
// import { formatPrice } from '@/lib/utils';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';
// import { useSession } from 'next-auth/react';
// import toast from 'react-hot-toast';
// import { MapPin, CreditCard, Truck, CheckCircle } from 'lucide-react';

// export default function CheckoutPage() {
//   const { items, getTotalPrice, clearCart } = useCartStore();
//   const { data: session } = useSession();
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [step, setStep] = useState(1); // 1: address, 2: payment

//   const [address, setAddress] = useState({
//     name: session?.user?.name || '',
//     phone: '',
//     street: '',
//     city: '',
//     province: '',
//     postalCode: '',
//   });
//   const [paymentMethod, setPaymentMethod] = useState('cod');

//   const subtotal = getTotalPrice();
//   const shippingFee = subtotal >= 2000 ? 0 : 200;
//   const total = subtotal + shippingFee;

//   const handlePlaceOrder = async () => {
//     if (!address.name || !address.phone || !address.street || !address.city) {
//       toast.error('Please fill in all required fields');
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch('/api/orders', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           address,
//           paymentMethod,
//           items: items.map((i) => ({
//             productId: i.productId,
//             quantity: i.quantity,
//             price: i.salePrice ?? i.price,
//             variant: i.variant,
//           })),
//           subtotal,
//           shippingFee,
//           total,
//         }),
//       });

//       if (!res.ok) throw new Error('Order failed');
//       const order = await res.json();
//       clearCart();
//       toast.success('Order placed successfully!');
//       router.push(`/orders/${order.id}`);
//     } catch {
//       toast.error('Failed to place order. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!session) {
//     router.push('/auth/login?callbackUrl=/checkout');
//     return null;
//   }

//   if (items.length === 0) {
//     router.push('/cart');
//     return null;
//   }

//   return (
//     <div className="min-h-screen bg-[#FAF9F6]">
//       <Header />
//       <main className="max-w-5xl mx-auto px-4 py-8">
//         <h1 className="text-2xl font-black text-[#2D1B0F] mb-8 uppercase tracking-tight">Checkout</h1>

//         {/* Steps - Themed Gold/Brown */}
//         <div className="flex items-center gap-4 mb-10">
//           {[
//             { n: 1, label: 'Delivery Address', icon: MapPin },
//             { n: 2, label: 'Payment', icon: CreditCard },
//           ].map(({ n, label, icon: Icon }) => (
//             <div key={n} className="flex items-center gap-3">
//               <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors
//                 ${step >= n ? 'bg-[#B68D40] text-[#2D1B0F]' : 'bg-stone-200 text-stone-500'}`}>
//                 {step > n ? <CheckCircle size={18} /> : n}
//               </div>
//               <span className={`text-sm font-bold uppercase tracking-wider hidden sm:block ${step >= n ? 'text-[#2D1B0F]' : 'text-stone-400'}`}>
//                 {label}
//               </span>
//               {n < 2 && <div className={`w-16 h-0.5 ${step > n ? 'bg-[#B68D40]' : 'bg-stone-200'}`} />}
//             </div>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2 space-y-6">
//             {/* Delivery Address */}
//             <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
//               <div className="flex items-center gap-2 mb-6">
//                 <MapPin size={20} className="text-[#B68D40]" />
//                 <h2 className="font-bold text-[#2D1B0F] uppercase tracking-wide">Delivery Address</h2>
//               </div>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {[
//                   { key: 'name', label: 'Full Name', placeholder: 'Enter full name', required: true },
//                   { key: 'phone', label: 'Phone Number', placeholder: '03XX-XXXXXXX', required: true },
//                   { key: 'street', label: 'Street Address', placeholder: 'House/flat number, street name', required: true, full: true },
//                   { key: 'city', label: 'City', placeholder: 'e.g. Lahore', required: true },
//                   { key: 'province', label: 'Province', placeholder: 'e.g. Punjab' },
//                   { key: 'postalCode', label: 'Postal Code', placeholder: 'e.g. 54000' },
//                 ].map(({ key, label, placeholder, required, full }) => (
//                   <div key={key} className={full ? 'sm:col-span-2' : ''}>
//                     <label className="text-[10px] font-bold text-[#B68D40] uppercase mb-1.5 block tracking-widest">
//                       {label} {required && <span className="text-red-500">*</span>}
//                     </label>
//                     <input
//                       type="text"
//                       placeholder={placeholder}
//                       value={(address as any)[key]}
//                       onChange={(e) => setAddress({ ...address, [key]: e.target.value })}
//                       className="w-full text-sm border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-[#B68D40] focus:ring-1 focus:ring-[#B68D40]/20 transition-all placeholder:text-stone-300"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Payment Method */}
//             <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
//               <div className="flex items-center gap-2 mb-6">
//                 <CreditCard size={20} className="text-[#B68D40]" />
//                 <h2 className="font-bold text-[#2D1B0F] uppercase tracking-wide">Payment Method</h2>
//               </div>
//               <div className="grid grid-cols-1 gap-3">
//                 {[
//                   { value: 'cod', label: 'Cash on Delivery', desc: 'Pay when your order arrives', icon: '💵' },
//                   { value: 'easypaisa', label: 'EasyPaisa', desc: 'Pay via EasyPaisa mobile wallet', icon: '📱' },
//                   { value: 'jazzcash', label: 'JazzCash', desc: 'Pay via JazzCash mobile wallet', icon: '💳' },
//                   { value: 'card', label: 'Credit/Debit Card', desc: 'Visa, Mastercard accepted', icon: '💰' },
//                 ].map((method) => (
//                   <label key={method.value} className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all
//                     ${paymentMethod === method.value ? 'border-[#B68D40] bg-[#B68D40]/5' : 'border-stone-100 hover:border-stone-200'}`}>
//                     <input
//                       type="radio"
//                       name="payment"
//                       value={method.value}
//                       checked={paymentMethod === method.value}
//                       onChange={(e) => setPaymentMethod(e.target.value)}
//                       className="accent-[#B68D40] w-4 h-4"
//                     />
//                     <span className="text-2xl">{method.icon}</span>
//                     <div>
//                       <p className="text-sm font-bold text-[#2D1B0F]">{method.label}</p>
//                       <p className="text-xs text-stone-500 font-medium">{method.desc}</p>
//                     </div>
//                   </label>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Order Summary */}
//           <div>
//             <div className="bg-white rounded-2xl border border-stone-200 p-6 sticky top-24 shadow-sm">
//               <h2 className="font-bold text-[#2D1B0F] uppercase tracking-wide mb-6">Order Summary</h2>
//               <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
//                 {items.map((item) => (
//                   <div key={`${item.productId}-${item.variant}`} className="flex gap-4">
//                     <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-stone-100 flex-shrink-0 border border-stone-100">
//                       <Image src={item.image} alt={item.name} fill className="object-cover" />
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <p className="text-xs font-bold text-[#2D1B0F] line-clamp-2 leading-snug">{item.name}</p>
//                       <p className="text-[10px] text-[#B68D40] font-bold mt-1 uppercase tracking-wider">Qty: {item.quantity}</p>
//                     </div>
//                     <p className="text-xs font-black text-[#2D1B0F] flex-shrink-0">
//                       {formatPrice((item.salePrice ?? item.price) * item.quantity)}
//                     </p>
//                   </div>
//                 ))}
//               </div>

//               <div className="border-t border-stone-100 pt-4 space-y-3 text-sm">
//                 <div className="flex justify-between font-medium">
//                   <span className="text-stone-500 uppercase text-[10px] tracking-widest font-bold">Subtotal</span>
//                   <span className="text-[#2D1B0F]">{formatPrice(subtotal)}</span>
//                 </div>
//                 <div className="flex justify-between font-medium">
//                   <span className="text-stone-500 uppercase text-[10px] tracking-widest font-bold">Shipping</span>
//                   <span className={shippingFee === 0 ? 'text-green-600 font-bold' : 'text-[#2D1B0F]'}>
//                     {shippingFee === 0 ? 'FREE' : formatPrice(shippingFee)}
//                   </span>
//                 </div>
//                 <div className="border-t border-stone-100 pt-4 flex justify-between items-baseline font-black">
//                   <span className="text-[#2D1B0F] uppercase text-xs tracking-widest">Total Amount</span>
//                   <span className="text-[#B68D40] text-xl tracking-tight">{formatPrice(total)}</span>
//                 </div>
//               </div>

//               <button
//                 onClick={handlePlaceOrder}
//                 disabled={loading}
//                 className="w-full mt-6 bg-[#2D1B0F] hover:bg-[#B68D40] disabled:bg-stone-200 text-[#FAF9F6] hover:text-[#2D1B0F] py-4 rounded-xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#2D1B0F]/10 hover:shadow-[#B68D40]/20"
//               >
//                 {loading ? (
//                   <><span className="animate-spin rounded-full h-4 w-4 border-b-2 border-current" /> Processing...</>
//                 ) : (
//                   <><Truck size={16} /> Place Order</>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }

'use client';
// src/app/checkout/page.tsx
import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useCartStore } from '@/lib/store';
import { formatPrice } from '@/lib/utils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';
import { MapPin, CreditCard, Truck, CheckCircle } from 'lucide-react';

export default function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCartStore();
  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  const [address, setAddress] = useState({
    name: session?.user?.name || '',
    phone: '',
    street: '',
    city: '',
    province: '',
    postalCode: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('cod');

  const subtotal = getTotalPrice();
  const shippingFee = subtotal >= 2000 ? 0 : 200;
  const total = subtotal + shippingFee;

  const handlePlaceOrder = async () => {
    if (!address.name || !address.phone || !address.street || !address.city) {
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          address,
          paymentMethod,
          items: items.map((i) => ({
            productId: i.productId,
            quantity: i.quantity,
            price: i.salePrice ?? i.price,
            variant: i.variant,
          })),
          subtotal,
          shippingFee,
          total,
        }),
      });

      if (!res.ok) throw new Error('Order failed');
      const order = await res.json();
      clearCart();
      toast.success('Order placed successfully!');
      router.push(`/orders/${order.id}`);
    } catch {
      toast.error('Failed to place order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!session) {
    router.push('/auth/login?callbackUrl=/checkout');
    return null;
  }

  if (items.length === 0) {
    router.push('/cart');
    return null;
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-black text-[#2D1B0F] mb-8 uppercase tracking-tight">Checkout</h1>

        {/* Steps - Premium Gold/Brown Theme */}
        <div className="flex items-center gap-4 mb-10">
          {[
            { n: 1, label: 'Delivery Address', icon: MapPin },
            { n: 2, label: 'Payment', icon: CreditCard },
          ].map(({ n, label }) => (
            <div key={n} className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors
                ${step >= n ? 'bg-[#B68D40] text-[#2D1B0F]' : 'bg-stone-200 text-stone-500'}`}>
                {step > n ? <CheckCircle size={18} /> : n}
              </div>
              <span className={`text-sm font-bold uppercase tracking-wider hidden sm:block ${step >= n ? 'text-[#2D1B0F]' : 'text-stone-400'}`}>
                {label}
              </span>
              {n < 2 && <div className={`w-16 h-0.5 ${step > n ? 'bg-[#B68D40]' : 'bg-stone-200'}`} />}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            
            {/* Delivery Address */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <MapPin size={20} className="text-[#B68D40]" />
                <h2 className="font-bold text-[#2D1B0F] uppercase tracking-wide">Delivery Address</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { key: 'name', label: 'Full Name', placeholder: 'Enter full name', required: true },
                  { key: 'phone', label: 'Phone Number', placeholder: '03XX-XXXXXXX', required: true },
                  { key: 'street', label: 'Street Address', placeholder: 'House/flat number, street name', required: true, full: true },
                  { key: 'city', label: 'City', placeholder: 'e.g. Lahore', required: true },
                  { key: 'province', label: 'Province', placeholder: 'e.g. Punjab' },
                  { key: 'postalCode', label: 'Postal Code', placeholder: 'e.g. 54000' },
                ].map(({ key, label, placeholder, required, full }) => (
                  <div key={key} className={full ? 'sm:col-span-2' : ''}>
                    <label className="text-[10px] font-bold text-[#B68D40] uppercase mb-1.5 block tracking-widest">
                      {label} {required && <span className="text-red-500">*</span>}
                    </label>
                    <input
                      type="text"
                      placeholder={placeholder}
                      value={(address as any)[key]}
                      onChange={(e) => setAddress({ ...address, [key]: e.target.value })}
                      className="w-full text-sm border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-[#B68D40] focus:ring-1 focus:ring-[#B68D40]/20 transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <CreditCard size={20} className="text-[#B68D40]" />
                <h2 className="font-bold text-[#2D1B0F] uppercase tracking-wide">Payment Method</h2>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { value: 'cod', label: 'Cash on Delivery', desc: 'Pay when your order arrives', icon: '💵' },
                  { value: 'easypaisa', label: 'EasyPaisa', desc: 'Pay via EasyPaisa mobile wallet', icon: '📱' },
                  { value: 'jazzcash', label: 'JazzCash', desc: 'Pay via JazzCash mobile wallet', icon: '💳' },
                  { value: 'card', label: 'Credit/Debit Card', desc: 'Visa, Mastercard accepted', icon: '💰' },
                ].map((method) => (
                  <label key={method.value} className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all
                    ${paymentMethod === method.value ? 'border-[#B68D40] bg-[#B68D40]/5' : 'border-stone-100 hover:border-stone-200'}`}>
                    <input
                      type="radio"
                      name="payment"
                      value={method.value}
                      checked={paymentMethod === method.value}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="accent-[#B68D40] w-4 h-4"
                    />
                    <span className="text-2xl">{method.icon}</span>
                    <div>
                      <p className="text-sm font-bold text-[#2D1B0F]">{method.label}</p>
                      <p className="text-xs text-stone-500 font-medium">{method.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div>
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sticky top-24 shadow-sm">
              <h2 className="font-bold text-[#2D1B0F] uppercase tracking-wide mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6 max-h-60 overflow-y-auto">
                {items.map((item) => (
                  <div key={`${item.productId}-${item.variant}`} className="flex gap-4">
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-stone-100 border border-stone-100">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-[#2D1B0F] line-clamp-2">{item.name}</p>
                      <p className="text-[10px] text-[#B68D40] font-bold mt-1 uppercase tracking-wider">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-xs font-black text-[#2D1B0F]">{formatPrice((item.salePrice ?? item.price) * item.quantity)}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-stone-100 pt-4 space-y-3 text-sm">
                <div className="flex justify-between font-medium">
                  <span className="text-stone-500 uppercase text-[10px] tracking-widest font-bold">Subtotal</span>
                  <span className="text-[#2D1B0F] font-bold">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span className="text-stone-500 uppercase text-[10px] tracking-widest font-bold">Shipping</span>
                  <span className={shippingFee === 0 ? 'text-green-600 font-bold' : 'text-[#2D1B0F]'}>
                    {shippingFee === 0 ? 'FREE' : formatPrice(shippingFee)}
                  </span>
                </div>
                <div className="border-t border-stone-100 pt-4 flex justify-between items-baseline font-black">
                  <span className="text-[#2D1B0F] uppercase text-xs tracking-widest">Total</span>
                  <span className="text-[#B68D40] text-xl tracking-tight">{formatPrice(total)}</span>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                disabled={loading}
                className="w-full mt-6 bg-[#2D1B0F] hover:bg-[#B68D40] text-white hover:text-[#2D1B0F] py-4 rounded-xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-300 shadow-lg"
              >
                {loading ? 'Processing...' : 'Place Order'}
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}