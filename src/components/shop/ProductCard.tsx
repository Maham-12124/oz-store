// // // // 'use client';
// // // // // src/components/shop/ProductCard.tsx
// // // // import Image from 'next/image';
// // // // import Link from 'next/link';
// // // // import { ShoppingCart, Star, Heart } from 'lucide-react';
// // // // import { formatPrice, calculateDiscount } from '@/lib/utils';
// // // // import { useCartStore } from '@/lib/store';
// // // // import toast from 'react-hot-toast';
// // // // import { useState } from 'react';

// // // // interface Product {
// // // //   id: string;
// // // //   name: string;
// // // //   slug: string;
// // // //   price: number;
// // // //   salePrice?: number | null;
// // // //   images: string[];
// // // //   rating: number;
// // // //   reviewCount: number;
// // // //   sold: number;
// // // //   stock: number;
// // // //   category?: { name: string };
// // // //   brand?: { name: string } | null;
// // // // }

// // // // export function ProductCard({ product }: { product: Product }) {
// // // //   const { addItem } = useCartStore();
// // // //   const [wishlist, setWishlist] = useState(false);
// // // //   const discount = product.salePrice
// // // //     ? calculateDiscount(product.price, product.salePrice)
// // // //     : 0;

// // // //   const handleAddToCart = (e: React.MouseEvent) => {
// // // //     e.preventDefault();
// // // //     e.stopPropagation();
// // // //     addItem({
// // // //       id: `${product.id}-default`,
// // // //       productId: product.id,
// // // //       name: product.name,
// // // //       price: product.price,
// // // //       salePrice: product.salePrice,
// // // //       image: product.images[0],
// // // //       quantity: 1,
// // // //       stock: product.stock,
// // // //     });
// // // //     toast.success('Added to cart!');
// // // //   };

// // // //   return (
// // // //     <Link href={`/shop/${product.slug}`}>
// // // //       <div className="product-card bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-orange-200 cursor-pointer group">
// // // //         {/* Image */}
// // // //         <div className="relative aspect-square overflow-hidden bg-gray-50">
// // // //           <Image
// // // //             src={product.images[0] || '/placeholder.png'}
// // // //             alt={product.name}
// // // //             fill
// // // //             className="object-cover group-hover:scale-105 transition-transform duration-300"
// // // //             sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
// // // //           />
// // // //           {discount > 0 && (
// // // //             <div className="absolute top-2 left-2 bg-[#F85606] text-white text-xs font-bold px-2 py-0.5 rounded-md">
// // // //               -{discount}%
// // // //             </div>
// // // //           )}
// // // //           {product.stock === 0 && (
// // // //             <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
// // // //               <span className="bg-white text-gray-800 text-sm font-semibold px-3 py-1 rounded-full">Out of Stock</span>
// // // //             </div>
// // // //           )}
// // // //           <button
// // // //             onClick={(e) => { e.preventDefault(); setWishlist(!wishlist); }}
// // // //             className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
// // // //           >
// // // //             <Heart size={14} className={wishlist ? 'fill-red-500 text-red-500' : 'text-gray-400'} />
// // // //           </button>
// // // //         </div>

// // // //         {/* Info */}
// // // //         <div className="p-3">
// // // //           {product.brand && (
// // // //             <p className="text-xs text-[#F85606] font-medium mb-0.5">{product.brand.name}</p>
// // // //           )}
// // // //           <p className="text-sm text-gray-800 font-medium line-clamp-2 leading-snug mb-2">
// // // //             {product.name}
// // // //           </p>

// // // //           {/* Rating */}
// // // //           <div className="flex items-center gap-1 mb-2">
// // // //             <div className="flex">
// // // //               {[1, 2, 3, 4, 5].map((s) => (
// // // //                 <Star
// // // //                   key={s}
// // // //                   size={11}
// // // //                   className={s <= Math.round(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200 fill-gray-200'}
// // // //                 />
// // // //               ))}
// // // //             </div>
// // // //             <span className="text-xs text-gray-500">({product.reviewCount})</span>
// // // //             {product.sold > 0 && (
// // // //               <span className="text-xs text-gray-400 ml-auto">{product.sold}+ sold</span>
// // // //             )}
// // // //           </div>

// // // //           {/* Price */}
// // // //           <div className="flex items-center justify-between">
// // // //             <div>
// // // //               <p className="text-base font-bold text-[#F85606]">
// // // //                 {formatPrice(product.salePrice ?? product.price)}
// // // //               </p>
// // // //               {product.salePrice && (
// // // //                 <p className="text-xs text-gray-400 line-through">
// // // //                   {formatPrice(product.price)}
// // // //                 </p>
// // // //               )}
// // // //             </div>
// // // //             <button
// // // //               onClick={handleAddToCart}
// // // //               disabled={product.stock === 0}
// // // //               className="bg-[#F85606] hover:bg-orange-600 disabled:bg-gray-300 text-white rounded-lg p-2 transition-colors"
// // // //               title="Add to cart"
// // // //             >
// // // //               <ShoppingCart size={15} />
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </Link>
// // // //   );
// // // // }
// // // 'use client';
// // // // src/components/shop/ProductCard.tsx
// // // import Image from 'next/image';
// // // import Link from 'next/link';
// // // import { ShoppingCart, Star, Heart } from 'lucide-react';
// // // import { formatPrice, calculateDiscount } from '@/lib/utils';
// // // import { useCartStore } from '@/lib/store';
// // // import toast from 'react-hot-toast';
// // // import { useState } from 'react';

// // // interface Product {
// // //   id: string;
// // //   name: string;
// // //   slug: string;
// // //   price: number;
// // //   salePrice?: number | null;
// // //   images: string[];
// // //   rating: number;
// // //   reviewCount: number;
// // //   sold: number;
// // //   stock: number;
// // //   category?: { name: string };
// // //   brand?: { name: string } | null;
// // // }

// // // export function ProductCard({ product }: { product: Product }) {
// // //   const { addItem } = useCartStore();
// // //   const [wishlist, setWishlist] = useState(false);
// // //   const discount = product.salePrice
// // //     ? calculateDiscount(product.price, product.salePrice)
// // //     : 0;

// // //   const handleAddToCart = (e: React.MouseEvent) => {
// // //     e.preventDefault();
// // //     e.stopPropagation();
// // //     addItem({
// // //       id: `${product.id}-default`,
// // //       productId: product.id,
// // //       name: product.name,
// // //       price: product.price,
// // //       salePrice: product.salePrice,
// // //       image: product.images[0],
// // //       quantity: 1,
// // //       stock: product.stock,
// // //     });
// // //     toast.success('Added to cart!');
// // //   };

// // //   return (
// // //     <Link href={`/shop/${product.slug}`}>
// // //       {/* Updated bg and border to match theme */}
// // //       <div className="product-card bg-white rounded-xl overflow-hidden border border-stone-100 hover:border-[#B68D40]/50 cursor-pointer group transition-all duration-300 shadow-sm hover:shadow-md">
// // //         {/* Image */}
// // //         <div className="relative aspect-square overflow-hidden bg-stone-50">
// // //           <Image
// // //             src={product.images[0] || '/placeholder.png'}
// // //             alt={product.name}
// // //             fill
// // //             className="object-cover group-hover:scale-105 transition-transform duration-500"
// // //             sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
// // //           />
// // //           {/* Discount Badge - Gold Theme */}
// // //           {discount > 0 && (
// // //             <div className="absolute top-2 left-2 bg-[#B68D40] text-[#2D1B0F] text-[10px] font-bold px-2 py-0.5 rounded-md shadow-sm">
// // //               -{discount}%
// // //             </div>
// // //           )}
// // //           {product.stock === 0 && (
// // //             <div className="absolute inset-0 bg-[#2D1B0F]/60 flex items-center justify-center">
// // //               <span className="bg-white text-[#2D1B0F] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Out of Stock</span>
// // //             </div>
// // //           )}
// // //           <button
// // //             onClick={(e) => { e.preventDefault(); setWishlist(!wishlist); }}
// // //             className="absolute top-2 right-2 w-8 h-8 bg-white/90 rounded-full shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
// // //           >
// // //             <Heart size={14} className={wishlist ? 'fill-red-500 text-red-500' : 'text-stone-400'} />
// // //           </button>
// // //         </div>

// // //         {/* Info */}
// // //         <div className="p-3">
// // //           {product.brand && (
// // //             <p className="text-[10px] text-[#B68D40] font-bold uppercase tracking-wider mb-1">{product.brand.name}</p>
// // //           )}
// // //           <p className="text-sm text-stone-800 font-medium line-clamp-2 leading-snug mb-2 group-hover:text-[#B68D40] transition-colors">
// // //             {product.name}
// // //           </p>

// // //           {/* Rating - Gold Stars */}
// // //           <div className="flex items-center gap-1 mb-3">
// // //             <div className="flex">
// // //               {[1, 2, 3, 4, 5].map((s) => (
// // //                 <Star
// // //                   key={s}
// // //                   size={10}
// // //                   className={s <= Math.round(product.rating) ? 'fill-[#B68D40] text-[#B68D40]' : 'text-stone-200 fill-stone-200'}
// // //                 />
// // //               ))}
// // //             </div>
// // //             <span className="text-[10px] text-stone-400">({product.reviewCount})</span>
// // //             {product.sold > 0 && (
// // //               <span className="text-[10px] text-stone-400 ml-auto font-medium">{product.sold}+ sold</span>
// // //             )}
// // //           </div>

// // //           {/* Price & Action */}
// // //           <div className="flex items-center justify-between mt-auto">
// // //             <div>
// // //               {/* Main Price - Brown/Gold Theme */}
// // //               <p className="text-base font-bold text-[#2D1B0F]">
// // //                 {formatPrice(product.salePrice ?? product.price)}
// // //               </p>
// // //               {product.salePrice && (
// // //                 <p className="text-xs text-stone-400 line-through">
// // //                   {formatPrice(product.price)}
// // //                 </p>
// // //               )}
// // //             </div>
// // //             {/* Cart Button - Themed */}
// // //             <button
// // //               onClick={handleAddToCart}
// // //               disabled={product.stock === 0}
// // //               className="bg-[#2D1B0F] hover:bg-[#B68D40] disabled:bg-stone-200 text-white hover:text-[#2D1B0F] rounded-lg p-2.5 transition-all duration-300 shadow-sm"
// // //               title="Add to cart"
// // //             >
// // //               <ShoppingCart size={15} />
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </Link>
// // //   );
// // // }

// // 'use client';
// // import Image from 'next/image';
// // import Link from 'next/link';
// // import { ShoppingCart, Star, Heart } from 'lucide-react';
// // import { formatPrice, calculateDiscount } from '@/lib/utils';
// // import { useCartStore } from '@/lib/store';
// // import toast from 'react-hot-toast';
// // import { useState } from 'react';

// // // ... (Product interface waisa hi rahega)

// // export function ProductCard({ product }: { product: Product }) {
// //   const { addItem } = useCartStore();
// //   const [wishlist, setWishlist] = useState(false);
  
// //   const discount = product.salePrice ? calculateDiscount(product.price, product.salePrice) : 0;

// //   const handleAddToCart = (e: React.MouseEvent) => {
// //     e.preventDefault();
// //     e.stopPropagation();
// //     addItem({
// //       id: `${product.id}-default`,
// //       productId: product.id,
// //       name: product.name,
// //       price: product.price,
// //       salePrice: product.salePrice,
// //       image: product.images[0],
// //       quantity: 1,
// //       stock: product.stock,
// //     });
// //     toast.success('Added to cart!');
// //   };

// //   return (
// //     <div className="product-card bg-white rounded-xl overflow-hidden border border-stone-100 hover:border-[#B68D40]/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col h-full group">
      
// //       {/* Link ko sirf Image aur Title tak limit karein */}
// //       <Link href={`/shop/${product.slug}`} className="block flex-1">
// //         <div className="relative aspect-square overflow-hidden bg-stone-50">
// //           {/* Image handle karne ka sahi tareeqa */}
// //           <Image
// //             src={product.images[0] || '/placeholder.png'}
// //             alt={product.name}
// //             fill
// //             className="object-cover group-hover:scale-105 transition-transform duration-500"
// //             sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
// //           />
// //           {discount > 0 && (
// //             <div className="absolute top-2 left-2 bg-[#B68D40] text-[#2D1B0F] text-[10px] font-bold px-2 py-0.5 rounded-md">
// //               -{discount}%
// //             </div>
// //           )}
// //         </div>

// //         <div className="p-3">
// //           {product.brand && <p className="text-[10px] text-[#B68D40] font-bold uppercase">{product.brand.name}</p>}
// //           <p className="text-sm text-stone-800 font-medium line-clamp-2 leading-snug mb-2">{product.name}</p>
// //         </div>
// //       </Link>

// //       {/* Button Link ke BAHAR hai - Hydration issue fixed */}
// //       <div className="p-3 pt-0 mt-auto flex items-center justify-between border-t border-stone-50 pt-3">
// //         <div>
// //           <p className="text-base font-bold text-[#2D1B0F]">
// //             {formatPrice(product.salePrice ?? product.price)}
// //           </p>
// //         </div>
// //         <button
// //           onClick={handleAddToCart}
// //           disabled={product.stock === 0}
// //           className="bg-[#2D1B0F] hover:bg-[#B68D40] text-white rounded-lg p-2.5 transition-all"
// //         >
// //           <ShoppingCart size={15} />
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }
// 'use client';
// import Image from 'next/image';
// import Link from 'next/link';
// import { ShoppingCart } from 'lucide-react';
// import { formatPrice, calculateDiscount } from '@/lib/utils';
// import { useCartStore } from '@/lib/store';
// import toast from 'react-hot-toast';

// // 1. Interface add kiya taaki TypeScript error na de
// interface Product {
//   id: string;
//   name: string;
//   slug: string;
//   price: number;
//   salePrice?: number | null;
//   images: string[];
//   stock: number;
//   brand?: { name: string } | null;
// }

// export function ProductCard({ product }: { product: Product }) {
//   const { addItem } = useCartStore();
//   const discount = product.salePrice ? calculateDiscount(product.price, product.salePrice) : 0;

//   const handleAddToCart = (e: React.MouseEvent) => {
//     e.preventDefault();
//     e.stopPropagation();
//     addItem({
//       id: product.id,
//       productId: product.id,
//       name: product.name,
//       price: product.price,
//       salePrice: product.salePrice,
//       image: product.images[0],
//       quantity: 1,
//       stock: product.stock,
//     });
//     toast.success('Added to cart!');
//   };

//   return (
//     <div className="bg-white rounded-xl overflow-hidden border border-stone-100 hover:border-[#B68D40]/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col h-full group">
      
//       {/* Link sirf top section par hai */}
//       <Link href={`/shop/${product.slug}`} className="block flex-1">
//         <div className="relative aspect-square overflow-hidden bg-stone-50">
//           <Image
//             src={product.images[0] || '/placeholder.png'}
//             alt={product.name}
//             fill
//             className="object-cover group-hover:scale-105 transition-transform duration-500"
//             sizes="(max-width: 640px) 50vw, 25vw"
//           />
//           {discount > 0 && (
//             <div className="absolute top-2 left-2 bg-[#B68D40] text-[#2D1B0F] text-[10px] font-bold px-2 py-0.5 rounded-md">
//               -{discount}%
//             </div>
//           )}
//         </div>

//         <div className="p-3">
//           {product.brand && <p className="text-[10px] text-[#B68D40] font-bold uppercase">{product.brand.name}</p>}
//           <p className="text-sm text-stone-800 font-medium line-clamp-2 leading-snug mb-2">{product.name}</p>
//         </div>
//       </Link>

//       {/* Button Link ke BAHAR hai - Hydration issue fixed */}
//       <div className="p-3 pt-0 mt-auto flex items-center justify-between border-t border-stone-50 pt-3">
//         <p className="text-base font-bold text-[#2D1B0F]">
//           {formatPrice(product.salePrice ?? product.price)}
//         </p>
//         <button
//           onClick={handleAddToCart}
//           disabled={product.stock === 0}
//           className="bg-[#2D1B0F] hover:bg-[#B68D40] disabled:bg-stone-200 text-white rounded-lg p-2.5 transition-all"
//         >
//           <ShoppingCart size={15} />
//         </button>
//       </div>
//     </div>
//   );
// }
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { formatPrice, calculateDiscount } from '@/lib/utils';
import { useCartStore } from '@/lib/store';
import toast from 'react-hot-toast';
import { useState } from 'react'; // useState import karein

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  salePrice?: number | null;
  images: string[];
  stock: number;
  brand?: { name: string } | null;
}

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCartStore();
  const [imageSrc, setImageSrc] = useState(product.images[0] || '/placeholder.png');
  const discount = product.salePrice ? calculateDiscount(product.price, product.salePrice) : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      productId: product.id,
      name: product.name,
      price: product.price,
      salePrice: product.salePrice,
      image: imageSrc,
      quantity: 1,
      stock: product.stock,
    });
    toast.success('Added to cart!');
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-stone-100 hover:border-[#B68D40]/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col h-full group">
      
      <Link href={`/shop/${product.slug}`} className="block flex-1">
        <div className="relative aspect-square overflow-hidden bg-stone-50">
          <Image
            src={imageSrc}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 50vw, 25vw"
            // Yeh part error handle karega:
            onError={() => setImageSrc('/placeholder.png')}
          />
          {discount > 0 && (
            <div className="absolute top-2 left-2 bg-[#B68D40] text-[#2D1B0F] text-[10px] font-bold px-2 py-0.5 rounded-md">
              -{discount}%
            </div>
          )}
        </div>

        <div className="p-3">
          {product.brand && <p className="text-[10px] text-[#B68D40] font-bold uppercase">{product.brand.name}</p>}
          <p className="text-sm text-stone-800 font-medium line-clamp-2 leading-snug mb-2">{product.name}</p>
        </div>
      </Link>

      <div className="p-3 pt-0 mt-auto flex items-center justify-between border-t border-stone-50 pt-3">
        <p className="text-base font-bold text-[#2D1B0F]">
          {formatPrice(product.salePrice ?? product.price)}
        </p>
        <button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className="bg-[#2D1B0F] hover:bg-[#B68D40] disabled:bg-stone-200 text-white rounded-lg p-2.5 transition-all"
        >
          <ShoppingCart size={15} />
        </button>
      </div>
    </div>
  );
}