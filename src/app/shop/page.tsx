import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProductCard } from '@/components/shop/ProductCard';
import { prisma } from '@/lib/prisma';
import { ChevronRight, LayoutGrid } from 'lucide-react';
import Link from 'next/link';

// 1. Interface yahan define karein taaki Component aur Function dono access kar sakein
interface SearchParams {
  category?: string;
  brand?: string;
  search?: string;
  featured?: string;
  minPrice?: string;
  maxPrice?: string;
  sort?: string;
  page?: string;
}

// 2. Data fetching logic
async function getProducts(params: SearchParams) {
  const page = parseInt(params.page || '1');
  const limit = 20;
  const skip = (page - 1) * limit;

  const where: any = { isActive: true };

  if (params.category) where.category = { slug: params.category };
  if (params.brand) where.brand = { slug: params.brand };
  
  // Price filtering
  if (params.minPrice || params.maxPrice) {
    where.OR = [
      { price: { gte: params.minPrice ? parseFloat(params.minPrice) : undefined, lte: params.maxPrice ? parseFloat(params.maxPrice) : undefined } },
      { salePrice: { gte: params.minPrice ? parseFloat(params.minPrice) : undefined, lte: params.maxPrice ? parseFloat(params.maxPrice) : undefined } }
    ];
  }

  const [products, total] = await Promise.all([
    prisma.product.findMany({ 
      where, 
      include: { brand: true, category: true }, 
      take: limit, 
      skip, 
      orderBy: { createdAt: 'desc' } 
    }),
    prisma.product.count({ where }),
  ]);

  const categories = await prisma.category.findMany({ orderBy: { name: 'asc' } });

  return { products, total, categories };
}

export default async function ShopPage({ searchParams }: { searchParams: SearchParams }) {
  // Await ka sahi use
  const { products, total, categories } = await getProducts(searchParams);

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-black text-[#2D1B0F] uppercase tracking-[0.2em] mb-4">
            {searchParams.category ? categories.find(c => c.slug === searchParams.category)?.name : 'The Collection'}
          </h1>
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-stone-400">
            <Link href="/" className="hover:text-[#B68D40]">Home</Link>
            <ChevronRight size={12} />
            <span className="text-[#B68D40]">Shop</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0 space-y-10">
            <div>
              <h3 className="text-xs font-black text-[#2D1B0F] uppercase tracking-widest mb-6 flex items-center gap-2">
                <LayoutGrid size={16} className="text-[#B68D40]" /> Categories
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/shop" className="text-sm font-bold text-stone-600 hover:text-[#B68D40] block">
                    All Products
                  </Link>
                </li>
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <Link href={`/shop?category=${cat.slug}`} className={`text-sm font-bold transition-colors block ${searchParams.category === cat.slug ? 'text-[#B68D40]' : 'text-stone-500 hover:text-[#B68D40]'}`}>
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Price Filter */}
            <div>
              <h3 className="text-xs font-black text-[#2D1B0F] uppercase tracking-widest mb-6">Price Range</h3>
              <div className="space-y-3">
                {[
                  { label: 'Under 10K', min: '', max: '10000' },
                  { label: '10K - 50K', min: '10000', max: '50000' },
                  { label: '50K+', min: '50000', max: '' },
                ].map((range) => (
                  <Link key={range.label} href={`/shop?minPrice=${range.min}&maxPrice=${range.max}`} className="block text-sm font-bold text-stone-500 hover:text-[#B68D40]">
                    {range.label}
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          {/* Grid Products */}
          <div className="flex-1">
            <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-8">Showing {total} results</p>
            {products.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-3xl border border-stone-200">
                <p className="text-stone-500 font-bold">No essentials found in this range.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product as any} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}