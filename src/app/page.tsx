// // // // src/app/page.tsx
// // // import { Header } from '@/components/layout/Header';
// // // import { Footer } from '@/components/layout/Footer';
// // // import { BannerCarousel } from '@/components/shop/BannerCarousel';
// // // import { ProductCard } from '@/components/shop/ProductCard';
// // // import { prisma } from '@/lib/prisma';
// // // import Link from 'next/link';
// // // import { ChevronRight, Zap, Shield, Truck, RefreshCw } from 'lucide-react';

// // // async function getHomeData() {
// // //   const [banners, featuredProducts, categories, newArrivals] = await Promise.all([
// // //     prisma.banner.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
// // //     prisma.product.findMany({
// // //       where: { isFeatured: true, isActive: true },
// // //       include: { brand: true, category: true },
// // //       take: 8,
// // //       orderBy: { sold: 'desc' },
// // //     }),
// // //     prisma.category.findMany({ where: { parentId: null }, take: 8 }),
// // //     prisma.product.findMany({
// // //       where: { isActive: true },
// // //       include: { brand: true, category: true },
// // //       take: 8,
// // //       orderBy: { createdAt: 'desc' },
// // //     }),
// // //   ]);
// // //   return { banners, featuredProducts, categories, newArrivals };
// // // }

// // // const features = [
// // //   { icon: Truck, title: 'Free Delivery', desc: 'On orders above Rs. 2,000' },
// // //   { icon: Shield, title: 'Secure Payment', desc: '100% secure transactions' },
// // //   { icon: RefreshCw, title: 'Easy Returns', desc: '7-day return policy' },
// // //   { icon: Zap, title: 'Fast Shipping', desc: 'Delivered in 1-3 days' },
// // // ];

// // // export default async function HomePage() {
// // //   const { banners, featuredProducts, categories, newArrivals } = await getHomeData();

// // //   return (
// // //     <div className="min-h-screen bg-gray-50">
// // //       <Header />

// // //       <main className="max-w-7xl mx-auto px-4 py-4 space-y-8">
// // //         {/* Banner + Categories */}
// // //         <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
// // //           {/* Categories sidebar */}
// // //           <div className="hidden lg:block bg-white rounded-xl border border-gray-100 overflow-hidden">
// // //             <div className="bg-[#F85606] px-4 py-3">
// // //               <h2 className="text-white font-semibold text-sm">All Categories</h2>
// // //             </div>
// // //             <ul>
// // //               {categories.map((cat) => (
// // //                 <li key={cat.id}>
// // //                   <Link
// // //                     href={`/shop?category=${cat.slug}`}
// // //                     className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#F85606] transition-colors border-b border-gray-50"
// // //                   >
// // //                     <span>{cat.icon || '📦'}</span>
// // //                     <span>{cat.name}</span>
// // //                     <ChevronRight size={13} className="ml-auto text-gray-400" />
// // //                   </Link>
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </div>

// // //           {/* Banner */}
// // //           <div className="lg:col-span-3">
// // //             <BannerCarousel banners={banners} />
// // //           </div>
// // //         </div>

// // //         {/* Features */}
// // //         <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
// // //           {features.map(({ icon: Icon, title, desc }) => (
// // //             <div key={title} className="bg-white rounded-xl p-4 flex items-center gap-3 border border-gray-100">
// // //               <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
// // //                 <Icon size={18} className="text-[#F85606]" />
// // //               </div>
// // //               <div>
// // //                 <p className="text-sm font-semibold text-gray-800">{title}</p>
// // //                 <p className="text-xs text-gray-500">{desc}</p>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {/* Flash Sale / Featured */}
// // //         <section>
// // //           <div className="flex items-center justify-between mb-4">
// // //             <div className="flex items-center gap-2">
// // //               <div className="w-1 h-6 bg-[#F85606] rounded-full" />
// // //               <h2 className="text-xl font-bold text-gray-800">🔥 Flash Sale</h2>
// // //             </div>
// // //             <Link href="/shop?featured=true" className="text-sm text-[#F85606] hover:underline flex items-center gap-1">
// // //               View All <ChevronRight size={14} />
// // //             </Link>
// // //           </div>
// // //           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
// // //             {featuredProducts.map((product) => (
// // //               <ProductCard key={product.id} product={product as any} />
// // //             ))}
// // //           </div>
// // //         </section>

// // //         {/* Category Banners */}
// // //         <section>
// // //           <div className="flex items-center gap-2 mb-4">
// // //             <div className="w-1 h-6 bg-[#F85606] rounded-full" />
// // //             <h2 className="text-xl font-bold text-gray-800">Shop by Category</h2>
// // //           </div>
// // //           <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
// // //             {[
// // //               { name: 'Smartphones', icon: '📱', slug: 'smartphones', bg: 'from-blue-500 to-blue-700', desc: 'Latest flagship phones' },
// // //               { name: 'Tablets', icon: '📟', slug: 'tablets', bg: 'from-purple-500 to-purple-700', desc: 'iPads and Android tablets' },
// // //               { name: 'Accessories', icon: '🎧', slug: 'accessories', bg: 'from-green-500 to-green-700', desc: 'Earphones, cases & more' },
// // //               { name: 'Smartwatches', icon: '⌚', slug: 'smartwatches', bg: 'from-orange-500 to-orange-700', desc: 'Smart bands & watches' },
// // //             ].map((cat) => (
// // //               <Link key={cat.slug} href={`/shop?category=${cat.slug}`}>
// // //                 <div className={`bg-gradient-to-br ${cat.bg} rounded-xl p-5 text-white hover:scale-105 transition-transform cursor-pointer`}>
// // //                   <div className="text-4xl mb-2">{cat.icon}</div>
// // //                   <h3 className="font-bold text-base">{cat.name}</h3>
// // //                   <p className="text-xs text-white/70 mt-0.5">{cat.desc}</p>
// // //                   <div className="mt-3 text-xs bg-white/20 rounded-full px-3 py-1 inline-block">
// // //                     Shop Now →
// // //                   </div>
// // //                 </div>
// // //               </Link>
// // //             ))}
// // //           </div>
// // //         </section>

// // //         {/* New Arrivals */}
// // //         <section>
// // //           <div className="flex items-center justify-between mb-4">
// // //             <div className="flex items-center gap-2">
// // //               <div className="w-1 h-6 bg-[#F85606] rounded-full" />
// // //               <h2 className="text-xl font-bold text-gray-800">✨ New Arrivals</h2>
// // //             </div>
// // //             <Link href="/shop" className="text-sm text-[#F85606] hover:underline flex items-center gap-1">
// // //               View All <ChevronRight size={14} />
// // //             </Link>
// // //           </div>
// // //           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
// // //             {newArrivals.map((product) => (
// // //               <ProductCard key={product.id} product={product as any} />
// // //             ))}
// // //           </div>
// // //         </section>

// // //         {/* Brands */}
// // //         <section className="bg-white rounded-xl p-6 border border-gray-100">
// // //           <h2 className="text-lg font-bold text-gray-800 text-center mb-6">Featured Brands</h2>
// // //           <div className="flex flex-wrap justify-center gap-4">
// // //             {['Apple', 'Samsung', 'Xiaomi', 'OPPO', 'Vivo', 'Realme', 'OnePlus', 'Google'].map((brand) => (
// // //               <Link
// // //                 key={brand}
// // //                 href={`/shop?brand=${brand.toLowerCase()}`}
// // //                 className="px-5 py-2.5 border border-gray-200 rounded-full text-sm text-gray-700 hover:border-[#F85606] hover:text-[#F85606] hover:bg-orange-50 transition-all font-medium"
// // //               >
// // //                 {brand}
// // //               </Link>
// // //             ))}
// // //           </div>
// // //         </section>
// // //       </main>

// // //       <Footer />
// // //     </div>
// // //   );
// // // }
// // import { Header } from '@/components/layout/Header';
// // import { Footer } from '@/components/layout/Footer';
// // import { BannerCarousel } from '@/components/shop/BannerCarousel';
// // import { ProductCard } from '@/components/shop/ProductCard';
// // import { prisma } from '@/lib/prisma';
// // import Link from 'next/link';
// // import { ChevronRight, Zap, Shield, Truck, RefreshCw, LayoutGrid } from 'lucide-react';

// // async function getHomeData() {
// //   const [banners, featuredProducts, categories, newArrivals] = await Promise.all([
// //     prisma.banner.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
// //     prisma.product.findMany({ where: { isFeatured: true, isActive: true }, include: { brand: true, category: true }, take: 8, orderBy: { sold: 'desc' } }),
// //     prisma.category.findMany({ where: { parentId: null }, take: 8 }),
// //     prisma.product.findMany({ where: { isActive: true }, include: { brand: true, category: true }, take: 8, orderBy: { createdAt: 'desc' } }),
// //   ]);
// //   return { banners, featuredProducts, categories, newArrivals };
// // }

// // const features = [
// //   { icon: Truck, title: 'Complimentary Shipping', desc: 'On orders above Rs. 2,000' },
// //   { icon: Shield, title: 'Secure Transactions', desc: '100% encrypted payment' },
// //   { icon: RefreshCw, title: 'Easy Returns', desc: '7-day prestige policy' },
// //   { icon: Zap, title: 'Express Delivery', desc: 'Delivered in 1-3 business days' },
// // ];

// // export default async function HomePage() {
// //   const { banners, featuredProducts, categories, newArrivals } = await getHomeData();

// //   return (
// //     <div className="min-h-screen bg-[#FAF9F6]">
// //       <Header />
// //       <main className="max-w-7xl mx-auto px-4 py-8 space-y-16">
        
// //         {/* Banner & Categories Section */}
// //         <section className="grid grid-cols-1 lg:grid-cols-4 gap-6">
// //           <div className="hidden lg:block bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
// //             <div className="bg-[#2D1B0F] px-6 py-4 flex items-center gap-3">
// //               <LayoutGrid size={18} className="text-[#B68D40]" />
// //               <h2 className="text-white font-black text-xs uppercase tracking-widest">Collections</h2>
// //             </div>
// //             <ul>
// //               {categories.map((cat) => (
// //                 <li key={cat.id}>
// //                   <Link href={`/shop?category=${cat.slug}`} className="flex items-center gap-3 px-6 py-4 text-sm font-bold text-stone-600 hover:text-[#B68D40] hover:bg-[#FAF9F6] transition-all border-b border-stone-50">
// //                     {cat.name}
// //                   </Link>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //           <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-lg border border-stone-200">
// //             <BannerCarousel banners={banners} />
// //           </div>
// //         </section>

// //         {/* Minimalist Features */}
// //         <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //           {features.map(({ icon: Icon, title, desc }) => (
// //             <div key={title} className="bg-white rounded-xl p-6 border border-stone-200 flex flex-col gap-2">
// //               <Icon size={24} className="text-[#B68D40] mb-1" />
// //               <p className="text-sm font-black uppercase tracking-wider text-[#2D1B0F]">{title}</p>
// //               <p className="text-xs text-stone-500">{desc}</p>
// //             </div>
// //           ))}
// //         </section>

// //         {/* Featured Section */}
// //         <section>
// //           <div className="flex items-center justify-between mb-10">
// //             <h2 className="text-2xl font-black uppercase tracking-widest text-[#2D1B0F]">Curated Essentials</h2>
// //             <Link href="/shop?featured=true" className="text-xs font-bold uppercase tracking-widest text-[#B68D40] hover:underline flex items-center">
// //               View All <ChevronRight size={14} />
// //             </Link>
// //           </div>
// //           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
// //             {featuredProducts.map((product) => <ProductCard key={product.id} product={product as any} />)}
// //           </div>
// //         </section>

// //         {/* New Arrivals */}
// //         <section>
// //           <h2 className="text-2xl font-black uppercase tracking-widest text-[#2D1B0F] mb-10">Latest Arrivals</h2>
// //           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
// //             {newArrivals.map((product) => <ProductCard key={product.id} product={product as any} />)}
// //           </div>
// //         </section>
// //       </main>
// //       <Footer />
// //     </div>
// //   );
// // }
// import { prisma } from '@/lib/prisma';
// import { Header } from '@/components/layout/Header';
// import { ProductCard } from '@/components/shop/ProductCard';

// // Yeh function define karna zaroori hai
// async function getProducts(searchParams: any) {
//   const category = searchParams.category;
//   const products = await prisma.product.findMany({
//     where: category ? { category: { slug: category } } : {},
//     include: { category: true, brand: true }
//   });
//   const categories = await prisma.category.findMany();
//   return { products, total: products.length, categories };
// }

// export default async function ShopPage({ searchParams }: { searchParams: any }) {
//   const { products, total, categories } = await getProducts(searchParams);

//   return (
//     <div className="min-h-screen bg-[#FAF9F6]">
//       <Header />
//       <main className="max-w-7xl mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
//           {/* Sidebar content */}
//           <aside className="lg:col-span-1">
//              {/* Categories list... */}
//           </aside>
//           {/* Grid */}
//           <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6">
//             {products.map((p) => <ProductCard key={p.id} product={p} />)}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
import { prisma } from '@/lib/prisma';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProductCard } from '@/components/shop/ProductCard';
import Link from 'next/link';

async function getProducts(searchParams: any) {
  const categorySlug = searchParams?.category;
  
  const [products, categories] = await Promise.all([
    prisma.product.findMany({
      where: categorySlug ? { category: { slug: categorySlug } } : {},
      include: { category: true, brand: true }
    }),
    prisma.category.findMany()
  ]);

  return { products, total: products.length, categories };
}

export default async function ShopPage({ searchParams }: { searchParams: any }) {
  const { products, total, categories } = await getProducts(searchParams);

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
              <h2 className="font-black text-[#2D1B0F] uppercase tracking-widest text-sm mb-4">Categories</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/shop" className="text-sm text-stone-600 hover:text-[#B68D40]">All Products</Link>
                </li>
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <Link 
                      href={`/shop?category=${cat.slug}`} 
                      className="text-sm text-stone-600 hover:text-[#B68D40] block py-1"
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h1 className="text-2xl font-black text-[#2D1B0F] uppercase tracking-widest">
                {searchParams?.category ? searchParams.category.replace('-', ' ') : 'All Products'}
              </h1>
              <p className="text-sm text-stone-500 mt-1">{total} items found</p>
            </div>

            {products.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-stone-500">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}