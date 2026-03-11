// // 'use client';
// // // src/app/shop/[slug]/page.tsx - Server component wrapper
// // // We need a client component for cart functionality

// // import { notFound } from 'next/navigation';
// // import { prisma } from '@/lib/prisma';
// // import { Header } from '@/components/layout/Header';
// // import { Footer } from '@/components/layout/Footer';
// // import { ProductDetail } from './ProductDetail';
// // import { ProductCard } from '@/components/shop/ProductCard';

// // export async function generateMetadata({ params }: { params: { slug: string } }) {
// //   const product = await prisma.product.findUnique({
// //     where: { slug: params.slug },
// //     select: { name: true, description: true },
// //   });
// //   if (!product) return { title: 'Product Not Found' };
// //   return {
// //     title: `${product.name} | MobileShop`,
// //     description: product.description.substring(0, 160),
// //   };
// // }

// // async function getProduct(slug: string) {
// //   const product = await prisma.product.findUnique({
// //     where: { slug, isActive: true },
// //     include: {
// //       brand: true,
// //       category: true,
// //       variants: true,
// //       reviews: {
// //         include: { user: { select: { name: true } } },
// //         orderBy: { createdAt: 'desc' },
// //         take: 10,
// //       },
// //     },
// //   });
// //   return product;
// // }

// // export default async function ProductPage({ params }: { params: { slug: string } }) {
// //   const product = await getProduct(params.slug);
// //   if (!product) notFound();

// //   const relatedProducts = await prisma.product.findMany({
// //     where: {
// //       categoryId: product.categoryId,
// //       id: { not: product.id },
// //       isActive: true,
// //     },
// //     include: { brand: true, category: true },
// //     take: 4,
// //     orderBy: { sold: 'desc' },
// //   });

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       <Header />
// //       <main className="max-w-7xl mx-auto px-4 py-6">
// //         <ProductDetail product={product as any} />

// //         {/* Related Products */}
// //         {relatedProducts.length > 0 && (
// //           <section className="mt-10">
// //             <div className="flex items-center gap-2 mb-4">
// //               <div className="w-1 h-6 bg-[#F85606] rounded-full" />
// //               <h2 className="text-xl font-bold text-gray-800">Related Products</h2>
// //             </div>
// //             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
// //               {relatedProducts.map((p) => (
// //                 <ProductCard key={p.id} product={p as any} />
// //               ))}
// //             </div>
// //           </section>
// //         )}
// //       </main>
// //       <Footer />
// //     </div>
// //   );
// // }

// // src/app/shop/[slug]/page.tsx
// // 'use client' ko yahan se hata diya gaya hai taake metadata aur database calls kaam karein

// import { notFound } from 'next/navigation';
// import { prisma } from '@/lib/prisma';
// import { Header } from '@/components/layout/Header';
// import { Footer } from '@/components/layout/Footer';
// import { ProductDetail } from './ProductDetail';
// import { ProductCard } from '@/components/shop/ProductCard';

// export async function generateMetadata({ params }: { params: { slug: string } }) {
//   const product = await prisma.product.findUnique({
//     where: { slug: params.slug },
//     select: { name: true, description: true },
//   });

//   if (!product) return { title: 'Product Not Found' };

//   return {
//     title: `${product.name} | MobileShop`,
//     description: product.description.substring(0, 160),
//   };
// }

// async function getProduct(slug: string) {
//   const product = await prisma.product.findUnique({
//     where: { slug, isActive: true },
//     include: {
//       brand: true,
//       category: true,
//       variants: true,
//       reviews: {
//         include: { user: { select: { name: true } } },
//         orderBy: { createdAt: 'desc' },
//         take: 10,
//       },
//     },
//   });
//   return product;
// }

// export default async function ProductPage({ params }: { params: { slug: string } }) {
//   const product = await getProduct(params.slug);
//   if (!product) notFound();

//   const relatedProducts = await prisma.product.findMany({
//     where: {
//       categoryId: product.categoryId,
//       id: { not: product.id },
//       isActive: true,
//     },
//     include: { brand: true, category: true },
//     take: 4,
//     orderBy: { sold: 'desc' },
//   });

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />
//       <main className="max-w-7xl mx-auto px-4 py-6">
//         {/* ProductDetail pehle se hi client component hoga, isliye interactivity wahan chalegi */}
//         <ProductDetail product={product as any} />

//         {/* Related Products */}
//         {relatedProducts.length > 0 && (
//           <section className="mt-10">
//             <div className="flex items-center gap-2 mb-4">
//               <div className="w-1 h-6 bg-[#F85606] rounded-full" />
//               <h2 className="text-xl font-bold text-gray-800">Related Products</h2>
//             </div>
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
//               {relatedProducts.map((p) => (
//                 <ProductCard key={p.id} product={p as any} />
//               ))}
//             </div>
//           </section>
//         )}
//       </main>
//       <Footer />
//     </div>
//   );
// }
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProductDetail } from './ProductDetail';
import { ProductCard } from '@/components/shop/ProductCard';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = await prisma.product.findUnique({
    where: { slug: params.slug },
    select: { name: true, description: true },
  });

  if (!product) return { title: 'Product Not Found' };

  return {
    title: `${product.name} | OZ STORE`,
    description: product.description.substring(0, 160),
  };
}

async function getProduct(slug: string) {
  const product = await prisma.product.findUnique({
    where: { slug, isActive: true },
    include: {
      brand: true,
      category: true,
      variants: true,
      reviews: {
        include: { user: { select: { name: true } } },
        orderBy: { createdAt: 'desc' },
        take: 10,
      },
    },
  });
  return product;
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);
  if (!product) notFound();

  const relatedProducts = await prisma.product.findMany({
    where: {
      categoryId: product.categoryId,
      id: { not: product.id },
      isActive: true,
    },
    include: { brand: true, category: true },
    take: 4,
    orderBy: { sold: 'desc' },
  });

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Product Component */}
        <ProductDetail product={product as any} />

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-1.5 h-8 bg-[#B68D40] rounded-full" />
              <h2 className="text-2xl font-black text-[#2D1B0F] uppercase tracking-widest">
                Related Essentials
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <div key={p.id} className="transform hover:-translate-y-1 transition-transform duration-300">
                  <ProductCard product={p as any} />
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}