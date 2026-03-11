// 'use client';
// // src/components/shop/BannerCarousel.tsx
// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// interface Banner {
//   id: string;
//   title: string;
//   subtitle?: string | null;
//   image: string;
//   link?: string | null;
// }

// export function BannerCarousel({ banners }: { banners: Banner[] }) {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     if (banners.length <= 1) return;
//     const interval = setInterval(() => {
//       setCurrent((c) => (c + 1) % banners.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [banners.length]);

//   if (banners.length === 0) return null;

//   const prev = () => setCurrent((c) => (c - 1 + banners.length) % banners.length);
//   const next = () => setCurrent((c) => (c + 1) % banners.length);

//   return (
//     <div className="relative overflow-hidden rounded-xl bg-gray-100 aspect-[16/6] md:aspect-[16/5]">
//       {banners.map((banner, i) => (
//         <div
//           key={banner.id}
//           className={`absolute inset-0 transition-opacity duration-500 ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
//         >
//           <Link href={banner.link || '#'}>
//             <div className="relative w-full h-full">
//               <Image
//                 src={banner.image}
//                 alt={banner.title}
//                 fill
//                 className="object-cover"
//                 priority={i === 0}
//               />
//               <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
//                 <div className="px-8 md:px-14 text-white max-w-md">
//                   <h2 className="text-2xl md:text-4xl font-black leading-tight mb-2">
//                     {banner.title}
//                   </h2>
//                   {banner.subtitle && (
//                     <p className="text-sm md:text-base text-white/80 mb-4">{banner.subtitle}</p>
//                   )}
//                   <span className="inline-block bg-[#F85606] hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors">
//                     Shop Now
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         </div>
//       ))}

//       {/* Controls */}
//       {banners.length > 1 && (
//         <>
//           <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors">
//             <ChevronLeft size={18} className="text-gray-700" />
//           </button>
//           <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors">
//             <ChevronRight size={18} className="text-gray-700" />
//           </button>
//           <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
//             {banners.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setCurrent(i)}
//                 className={`rounded-full transition-all ${i === current ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/50'}`}
//               />
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }
'use client';
// src/components/shop/BannerCarousel.tsx
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Banner {
  id: string;
  title: string;
  subtitle?: string | null;
  image: string;
  link?: string | null;
}

export function BannerCarousel({ banners }: { banners: Banner[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (banners.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [banners.length]);

  if (banners.length === 0) return null;

  const prev = () => setCurrent((c) => (c - 1 + banners.length) % banners.length);
  const next = () => setCurrent((c) => (c + 1) % banners.length);

  return (
    <div className="relative overflow-hidden rounded-xl bg-[#2D1B0F] aspect-[16/6] md:aspect-[16/5] border border-[#3D2B1F]">
      {banners.map((banner, i) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-500 ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <Link href={banner.link || '#'}>
            <div className="relative w-full h-full">
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                className="object-cover opacity-80"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#2D1B0F]/80 to-transparent flex items-center">
                <div className="px-8 md:px-14 text-white max-w-md">
                  <h2 className="text-2xl md:text-4xl font-black leading-tight mb-2 text-[#FAF9F6]">
                    {banner.title}
                  </h2>
                  {banner.subtitle && (
                    <p className="text-sm md:text-base text-stone-300 mb-4">{banner.subtitle}</p>
                  )}
                  {/* Shop Now Button - Themed Gold */}
                  <span className="inline-block bg-[#B68D40] hover:bg-[#967332] text-[#2D1B0F] text-sm font-bold px-5 py-2 rounded-lg transition-colors shadow-lg">
                    Shop Now
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}

      {/* Controls - Themed Brown/Gold */}
      {banners.length > 1 && (
        <>
          <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-[#3D2B1F]/80 hover:bg-[#B68D40] text-[#B68D40] hover:text-[#2D1B0F] rounded-full flex items-center justify-center shadow-md transition-all duration-300">
            <ChevronLeft size={18} />
          </button>
          <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-[#3D2B1F]/80 hover:bg-[#B68D40] text-[#B68D40] hover:text-[#2D1B0F] rounded-full flex items-center justify-center shadow-md transition-all duration-300">
            <ChevronRight size={18} />
          </button>
          
          {/* Progress Indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
            {banners.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${i === current ? 'w-6 h-2 bg-[#B68D40]' : 'w-2 h-2 bg-stone-500/50'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}