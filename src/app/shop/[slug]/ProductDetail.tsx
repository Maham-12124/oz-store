// // 'use client';
// // // src/app/shop/[slug]/ProductDetail.tsx
// // import { useState } from 'react';
// // import Image from 'next/image';
// // import Link from 'next/link';
// // import { ShoppingCart, Zap, Star, Shield, Truck, ChevronRight, Plus, Minus } from 'lucide-react';
// // import { formatPrice, calculateDiscount } from '@/lib/utils';
// // import { useCartStore } from '@/lib/store';
// // import toast from 'react-hot-toast';
// // import { useRouter } from 'next/navigation';

// // interface Product {
// //   id: string;
// //   name: string;
// //   slug: string;
// //   description: string;
// //   price: number;
// //   salePrice?: number | null;
// //   images: string[];
// //   rating: number;
// //   reviewCount: number;
// //   sold: number;
// //   stock: number;
// //   brand?: { name: string; slug: string } | null;
// //   category: { name: string; slug: string };
// //   variants: Array<{ id: string; name: string; value: string; price?: number | null; stock: number }>;
// //   reviews: Array<{ id: string; rating: number; comment?: string | null; user: { name: string }; createdAt: Date }>;
// //   specifications?: any;
// // }

// // export function ProductDetail({ product }: { product: Product }) {
// //   const [selectedImage, setSelectedImage] = useState(0);
// //   const [quantity, setQuantity] = useState(1);
// //   const [activeTab, setActiveTab] = useState<'description' | 'specs' | 'reviews'>('description');
// //   const { addItem } = useCartStore();
// //   const router = useRouter();

// //   const discount = product.salePrice ? calculateDiscount(product.price, product.salePrice) : 0;
// //   const effectivePrice = product.salePrice ?? product.price;

// //   const handleAddToCart = () => {
// //     addItem({
// //       id: `${product.id}-default`,
// //       productId: product.id,
// //       name: product.name,
// //       price: product.price,
// //       salePrice: product.salePrice,
// //       image: product.images[0],
// //       quantity,
// //       stock: product.stock,
// //     });
// //     toast.success(`${product.name} added to cart!`);
// //   };

// //   const handleBuyNow = () => {
// //     handleAddToCart();
// //     router.push('/cart');
// //   };

// //   return (
// //     <div>
// //       {/* Breadcrumb */}
// //       <nav className="text-sm text-gray-500 mb-4 flex items-center gap-1">
// //         <Link href="/" className="hover:text-[#F85606]">Home</Link>
// //         <ChevronRight size={13} />
// //         <Link href="/shop" className="hover:text-[#F85606]">Shop</Link>
// //         <ChevronRight size={13} />
// //         <Link href={`/shop?category=${product.category.slug}`} className="hover:text-[#F85606]">
// //           {product.category.name}
// //         </Link>
// //         <ChevronRight size={13} />
// //         <span className="text-gray-800 truncate max-w-xs">{product.name}</span>
// //       </nav>

// //       <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
// //           {/* Images */}
// //           <div>
// //             <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-50 mb-3">
// //               <Image
// //                 src={product.images[selectedImage] || '/placeholder.png'}
// //                 alt={product.name}
// //                 fill
// //                 className="object-cover"
// //                 priority
// //               />
// //               {discount > 0 && (
// //                 <div className="absolute top-3 left-3 bg-[#F85606] text-white text-sm font-bold px-2.5 py-1 rounded-lg">
// //                   -{discount}% OFF
// //                 </div>
// //               )}
// //             </div>
// //             {product.images.length > 1 && (
// //               <div className="flex gap-2 overflow-x-auto">
// //                 {product.images.map((img, i) => (
// //                   <button
// //                     key={i}
// //                     onClick={() => setSelectedImage(i)}
// //                     className={`relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-colors ${selectedImage === i ? 'border-[#F85606]' : 'border-gray-200'}`}
// //                   >
// //                     <Image src={img} alt="" fill className="object-cover" />
// //                   </button>
// //                 ))}
// //               </div>
// //             )}
// //           </div>

// //           {/* Info */}
// //           <div className="space-y-4">
// //             {product.brand && (
// //               <Link href={`/shop?brand=${product.brand.slug}`} className="text-sm text-[#F85606] font-semibold hover:underline">
// //                 {product.brand.name}
// //               </Link>
// //             )}
// //             <h1 className="text-2xl font-bold text-gray-900 leading-tight">{product.name}</h1>

// //             {/* Rating */}
// //             <div className="flex items-center gap-3">
// //               <div className="flex">
// //                 {[1, 2, 3, 4, 5].map((s) => (
// //                   <Star key={s} size={16} className={s <= Math.round(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200 fill-gray-200'} />
// //                 ))}
// //               </div>
// //               <span className="text-sm text-gray-600">{product.rating} ({product.reviewCount} reviews)</span>
// //               <span className="text-sm text-gray-400">|</span>
// //               <span className="text-sm text-gray-600">{product.sold}+ sold</span>
// //             </div>

// //             {/* Price */}
// //             <div className="bg-gray-50 rounded-xl p-4">
// //               <div className="flex items-baseline gap-3">
// //                 <span className="text-3xl font-black text-[#F85606]">{formatPrice(effectivePrice)}</span>
// //                 {product.salePrice && (
// //                   <>
// //                     <span className="text-lg text-gray-400 line-through">{formatPrice(product.price)}</span>
// //                     <span className="bg-[#F85606] text-white text-sm font-bold px-2 py-0.5 rounded">
// //                       Save {formatPrice(product.price - product.salePrice)}
// //                     </span>
// //                   </>
// //                 )}
// //               </div>
// //               <p className="text-xs text-gray-500 mt-1">Inclusive of all taxes</p>
// //             </div>

// //             {/* Stock */}
// //             <div className="flex items-center gap-2">
// //               <div className={`w-2 h-2 rounded-full ${product.stock > 0 ? 'bg-green-500' : 'bg-red-500'}`} />
// //               <span className="text-sm font-medium">
// //                 {product.stock > 0 ? (
// //                   product.stock < 10 ? (
// //                     <span className="text-orange-600">Only {product.stock} left!</span>
// //                   ) : (
// //                     <span className="text-green-600">In Stock ({product.stock} available)</span>
// //                   )
// //                 ) : (
// //                   <span className="text-red-600">Out of Stock</span>
// //                 )}
// //               </span>
// //             </div>

// //             {/* Quantity */}
// //             {product.stock > 0 && (
// //               <div className="flex items-center gap-3">
// //                 <span className="text-sm font-medium text-gray-700">Quantity:</span>
// //                 <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
// //                   <button
// //                     onClick={() => setQuantity(Math.max(1, quantity - 1))}
// //                     className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 transition-colors"
// //                   >
// //                     <Minus size={14} />
// //                   </button>
// //                   <span className="w-12 text-center text-sm font-semibold">{quantity}</span>
// //                   <button
// //                     onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
// //                     className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 transition-colors"
// //                   >
// //                     <Plus size={14} />
// //                   </button>
// //                 </div>
// //               </div>
// //             )}

// //             {/* Actions */}
// //             <div className="flex gap-3">
// //               <button
// //                 onClick={handleAddToCart}
// //                 disabled={product.stock === 0}
// //                 className="flex-1 flex items-center justify-center gap-2 border-2 border-[#F85606] text-[#F85606] rounded-xl py-3 font-semibold hover:bg-orange-50 transition-colors disabled:border-gray-300 disabled:text-gray-400"
// //               >
// //                 <ShoppingCart size={18} /> Add to Cart
// //               </button>
// //               <button
// //                 onClick={handleBuyNow}
// //                 disabled={product.stock === 0}
// //                 className="flex-1 flex items-center justify-center gap-2 bg-[#F85606] text-white rounded-xl py-3 font-semibold hover:bg-orange-600 transition-colors disabled:bg-gray-300"
// //               >
// //                 <Zap size={18} /> Buy Now
// //               </button>
// //             </div>

// //             {/* Badges */}
// //             <div className="grid grid-cols-3 gap-2">
// //               {[
// //                 { icon: Truck, text: 'Free Delivery', sub: 'On orders 2K+' },
// //                 { icon: Shield, text: '1 Year Warranty', sub: 'Official warranty' },
// //                 { icon: Star, text: 'Genuine Product', sub: '100% authentic' },
// //               ].map(({ icon: Icon, text, sub }) => (
// //                 <div key={text} className="flex flex-col items-center text-center gap-1 bg-gray-50 rounded-lg p-3">
// //                   <Icon size={18} className="text-[#F85606]" />
// //                   <p className="text-xs font-semibold text-gray-800">{text}</p>
// //                   <p className="text-xs text-gray-500">{sub}</p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Tabs */}
// //         <div className="border-t border-gray-100">
// //           <div className="flex border-b border-gray-100">
// //             {(['description', 'specs', 'reviews'] as const).map((tab) => (
// //               <button
// //                 key={tab}
// //                 onClick={() => setActiveTab(tab)}
// //                 className={`px-6 py-3 text-sm font-medium capitalize transition-colors border-b-2
// //                   ${activeTab === tab ? 'text-[#F85606] border-[#F85606]' : 'text-gray-500 border-transparent hover:text-gray-800'}`}
// //               >
// //                 {tab === 'reviews' ? `Reviews (${product.reviewCount})` : tab}
// //               </button>
// //             ))}
// //           </div>

// //           <div className="p-6">
// //             {activeTab === 'description' && (
// //               <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
// //                 {product.description}
// //               </div>
// //             )}

// //             {activeTab === 'specs' && product.specifications && (
// //               <div className="overflow-x-auto">
// //                 <table className="w-full text-sm">
// //                   <tbody>
// //                     {Object.entries(product.specifications as Record<string, string>).map(([key, value], i) => (
// //                       <tr key={key} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
// //                         <td className="px-4 py-3 font-medium text-gray-700 w-40 capitalize">{key}</td>
// //                         <td className="px-4 py-3 text-gray-600">{value}</td>
// //                       </tr>
// //                     ))}
// //                   </tbody>
// //                 </table>
// //               </div>
// //             )}

// //             {activeTab === 'reviews' && (
// //               <div className="space-y-4">
// //                 {product.reviews.length === 0 ? (
// //                   <p className="text-gray-500 text-sm text-center py-8">No reviews yet. Be the first to review!</p>
// //                 ) : (
// //                   product.reviews.map((review) => (
// //                     <div key={review.id} className="border-b border-gray-100 pb-4 last:border-0">
// //                       <div className="flex items-center justify-between mb-2">
// //                         <div>
// //                           <p className="font-medium text-sm text-gray-800">{review.user.name}</p>
// //                           <div className="flex mt-0.5">
// //                             {[1, 2, 3, 4, 5].map((s) => (
// //                               <Star key={s} size={12} className={s <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200 fill-gray-200'} />
// //                             ))}
// //                           </div>
// //                         </div>
// //                         <span className="text-xs text-gray-400">
// //                           {new Date(review.createdAt).toLocaleDateString()}
// //                         </span>
// //                       </div>
// //                       {review.comment && <p className="text-sm text-gray-600">{review.comment}</p>}
// //                     </div>
// //                   ))
// //                 )}
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// 'use client';
// import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { ShoppingCart, Zap, Star, Shield, Truck, ChevronRight, Plus, Minus } from 'lucide-react';
// import { formatPrice, calculateDiscount } from '@/lib/utils';
// import { useCartStore } from '@/lib/store';
// import toast from 'react-hot-toast';
// import { useRouter } from 'next/navigation';

// // ... (Interface remains same)

// export function ProductDetail({ product }: { product: Product }) {
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [quantity, setQuantity] = useState(1);
//   const [activeTab, setActiveTab] = useState<'description' | 'specs' | 'reviews'>('description');
//   const { addItem } = useCartStore();
//   const router = useRouter();

//   const discount = product.salePrice ? calculateDiscount(product.price, product.salePrice) : 0;
//   const effectivePrice = product.salePrice ?? product.price;

//   const handleAddToCart = () => {
//     addItem({
//       id: `${product.id}-default`,
//       productId: product.id,
//       name: product.name,
//       price: product.price,
//       salePrice: product.salePrice,
//       image: product.images[0],
//       quantity,
//       stock: product.stock,
//     });
//     toast.success(`${product.name} added to cart!`);
//   };

//   return (
//     <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden p-8">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//         {/* Left: Images */}
//         <div className="space-y-4">
//           <div className="relative aspect-square rounded-2xl overflow-hidden bg-stone-100">
//             <Image src={product.images[selectedImage]} alt={product.name} fill className="object-cover" priority />
//             {discount > 0 && (
//               <div className="absolute top-4 left-4 bg-[#B68D40] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
//                 -{discount}% OFF
//               </div>
//             )}
//           </div>
//           <div className="flex gap-3">
//             {product.images.map((img, i) => (
//               <button key={i} onClick={() => setSelectedImage(i)} className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${selectedImage === i ? 'border-[#B68D40]' : 'border-stone-200'}`}>
//                 <Image src={img} alt="" fill className="object-cover" />
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Right: Info */}
//         <div className="space-y-6">
//           <div>
//             {product.brand && <p className="text-[#B68D40] font-black text-xs uppercase tracking-[0.2em] mb-2">{product.brand.name}</p>}
//             <h1 className="text-3xl font-black text-[#2D1B0F] uppercase tracking-wide leading-tight">{product.name}</h1>
//           </div>

//           <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-stone-500">
//             <div className="flex text-[#B68D40]">
//               {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={i < Math.round(product.rating) ? "currentColor" : "none"} />)}
//             </div>
//             <span>{product.rating} Rating</span>
//             <span>{product.sold}+ Sold</span>
//           </div>

//           <div className="space-y-1">
//             <p className="text-4xl font-black text-[#2D1B0F]">{formatPrice(effectivePrice)}</p>
//             {product.salePrice && <p className="text-sm text-stone-400 font-bold line-through">{formatPrice(product.price)}</p>}
//           </div>

//           {/* Quantity & Actions */}
//           <div className="flex items-center gap-4">
//             <div className="flex items-center border border-stone-200 rounded-xl p-1">
//               <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:text-[#B68D40]"><Minus size={16} /></button>
//               <span className="w-12 text-center font-black">{quantity}</span>
//               <button onClick={() => setQuantity(Math.min(product.stock, quantity + 1))} className="p-3 hover:text-[#B68D40]"><Plus size={16} /></button>
//             </div>
//             <button onClick={handleAddToCart} className="flex-1 bg-[#2D1B0F] text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-[#B68D40] transition-colors">
//               Add to Cart
//             </button>
//           </div>

//           {/* Trust Badges */}
//           <div className="grid grid-cols-3 gap-4 border-t border-stone-100 pt-6">
//             {[ { icon: Truck, text: 'Free Shipping' }, { icon: Shield, text: '1 Yr Warranty' }, { icon: Star, text: 'Authentic' } ].map((item, i) => (
//               <div key={i} className="flex flex-col items-center gap-2">
//                 <item.icon size={20} className="text-[#B68D40]" />
//                 <span className="text-[10px] font-black uppercase text-stone-600">{item.text}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="mt-12 border-t border-stone-200">
//         <div className="flex gap-8 py-4 border-b border-stone-200">
//           {['description', 'specs', 'reviews'].map((tab) => (
//             <button key={tab} onClick={() => setActiveTab(tab as any)} className={`text-xs font-black uppercase tracking-widest ${activeTab === tab ? 'text-[#B68D40]' : 'text-stone-400'}`}>
//               {tab}
//             </button>
//           ))}
//         </div>
//         <div className="py-6 text-sm text-stone-600 leading-relaxed">
//           {activeTab === 'description' && product.description}
//           {/* ... (Specs & Reviews tabs render logic) */}
//         </div>
//       </div>
//     </div>
//   );
// }
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ShoppingCart, Star, Shield, Truck, Plus, Minus } from 'lucide-react';
import { formatPrice, calculateDiscount } from '@/lib/utils';
import { useCartStore } from '@/lib/store';
import toast from 'react-hot-toast';

// 1. Interface ko component ke bahar rakhein ya props type define karein
interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  salePrice?: number | null;
  images: string[];
  rating: number;
  reviewCount: number;
  sold: number;
  stock: number;
  brand?: { name: string; slug: string } | null;
  category: { name: string; slug: string };
  specifications?: any;
  reviews: any[];
}

export function ProductDetail({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'specs' | 'reviews'>('description');
  const { addItem } = useCartStore();

  const discount = product.salePrice ? calculateDiscount(product.price, product.salePrice) : 0;
  const effectivePrice = product.salePrice ?? product.price;

  const handleAddToCart = () => {
    addItem({
      id: `${product.id}-default`,
      productId: product.id,
      name: product.name,
      price: product.price,
      salePrice: product.salePrice,
      image: product.images[0],
      quantity,
      stock: product.stock,
    });
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Images */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-stone-100">
            <Image src={product.images[selectedImage]} alt={product.name} fill className="object-cover" priority />
            {discount > 0 && (
              <div className="absolute top-4 left-4 bg-[#B68D40] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                -{discount}% OFF
              </div>
            )}
          </div>
          <div className="flex gap-3">
            {product.images.map((img, i) => (
              <button key={i} onClick={() => setSelectedImage(i)} className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${selectedImage === i ? 'border-[#B68D40]' : 'border-stone-200'}`}>
                <Image src={img} alt="Product thumb" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="space-y-6">
          <div>
            {product.brand && <p className="text-[#B68D40] font-black text-xs uppercase tracking-[0.2em] mb-2">{product.brand.name}</p>}
            <h1 className="text-3xl font-black text-[#2D1B0F] uppercase tracking-wide leading-tight">{product.name}</h1>
          </div>

          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-stone-500">
            <div className="flex text-[#B68D40]">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={i < Math.round(product.rating) ? "currentColor" : "none"} />)}
            </div>
            <span>{product.rating} Rating</span>
            <span>{product.sold}+ Sold</span>
          </div>

          <div className="space-y-1">
            <p className="text-4xl font-black text-[#2D1B0F]">{formatPrice(effectivePrice)}</p>
            {product.salePrice && <p className="text-sm text-stone-400 font-bold line-through">{formatPrice(product.price)}</p>}
          </div>

          {/* Quantity & Actions */}
          <div className="flex items-center gap-4">
            <div className="flex items-center border border-stone-200 rounded-xl p-1">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:text-[#B68D40]"><Minus size={16} /></button>
              <span className="w-12 text-center font-black">{quantity}</span>
              <button onClick={() => setQuantity(Math.min(product.stock, quantity + 1))} className="p-3 hover:text-[#B68D40]"><Plus size={16} /></button>
            </div>
            <button onClick={handleAddToCart} className="flex-1 bg-[#2D1B0F] text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-[#B68D40] transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-12 border-t border-stone-200">
        <div className="flex gap-8 py-4 border-b border-stone-200">
          {(['description', 'specs', 'reviews'] as const).map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`text-xs font-black uppercase tracking-widest ${activeTab === tab ? 'text-[#B68D40]' : 'text-stone-400'}`}>
              {tab}
            </button>
          ))}
        </div>
        <div className="py-6 text-sm text-stone-600 leading-relaxed">
          {activeTab === 'description' && product.description}
          {activeTab === 'specs' && <pre>{JSON.stringify(product.specifications, null, 2)}</pre>}
          {activeTab === 'reviews' && <p>Reviews count: {product.reviews.length}</p>}
        </div>
      </div>
    </div>
  );
}