// 'use client';
// // src/components/layout/Header.tsx
// import { useState } from 'react';
// import Link from 'next/link';
// import { useSession, signOut } from 'next-auth/react';
// import { useCartStore } from '@/lib/store';
// import { Search, ShoppingCart, User, Menu, X, ChevronDown, Phone, MapPin } from 'lucide-react';
// import { useRouter } from 'next/navigation';

// export function Header() {
//   const { data: session } = useSession();
//   const { getTotalItems } = useCartStore();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [userMenuOpen, setUserMenuOpen] = useState(false);
//   const router = useRouter();
//   const totalItems = getTotalItems();

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       router.push(`/shop?search=${encodeURIComponent(searchQuery)}`);
//     }
//   };

//   const categories = [
//     { name: 'Smartphones', slug: 'smartphones', icon: '📱' },
//     { name: 'Tablets', slug: 'tablets', icon: '📟' },
//     { name: 'Accessories', slug: 'accessories', icon: '🎧' },
//     { name: 'Smartwatches', slug: 'smartwatches', icon: '⌚' },
//   ];

//   return (
//     <header className="sticky top-0 z-50 shadow-md">
//       {/* Top Bar */}
//       <div className="bg-[#1A1A2E] text-white text-xs py-1.5 px-4 hidden md:block">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <div className="flex items-center gap-4">
//             <span className="flex items-center gap-1"><Phone size={11} /> +92 300 1234567</span>
//             <span className="flex items-center gap-1"><MapPin size={11} /> Free delivery on orders over Rs. 2,000</span>
//           </div>
//           <div className="flex items-center gap-4">
//             <Link href="/shop" className="hover:text-orange-400 transition-colors">Shop</Link>
//             <Link href="/orders" className="hover:text-orange-400 transition-colors">Track Order</Link>
//             {session?.user ? (
//               <span className="text-orange-400">Hi, {session.user.name?.split(' ')[0]}</span>
//             ) : (
//               <>
//                 <Link href="/auth/login" className="hover:text-orange-400 transition-colors">Login</Link>
//                 <span>/</span>
//                 <Link href="/auth/register" className="hover:text-orange-400 transition-colors">Register</Link>
//               </>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <div className="bg-[#F85606] py-3 px-4">
//         <div className="max-w-7xl mx-auto flex items-center gap-4">
//           {/* Logo */}
//           <Link href="/" className="flex-shrink-0">
//             <div className="flex items-center gap-2">
//               <div className="bg-white rounded-lg w-8 h-8 flex items-center justify-center">
//                 <span className="text-[#F85606] font-black text-sm">OZ</span>
//               </div>
//               <span className="text-white font-black text-xl hidden sm:block tracking-tight">
//               OZ STORE
//               </span>
//             </div>
//           </Link>

//           {/* Search */}
//           <form onSubmit={handleSearch} className="flex-1 max-w-2xl">
//             <div className="flex">
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="Search for phones, tablets, accessories..."
//                 className="flex-1 px-4 py-2.5 text-sm rounded-l-lg outline-none text-gray-800 placeholder-gray-400"
//               />
//               <button
//                 type="submit"
//                 className="bg-[#FFD000] hover:bg-yellow-400 px-5 rounded-r-lg transition-colors flex items-center gap-2"
//               >
//                 <Search size={18} className="text-gray-800" />
//                 <span className="text-sm font-semibold text-gray-800 hidden sm:block">Search</span>
//               </button>
//             </div>
//           </form>

//           {/* Actions */}
//           <div className="flex items-center gap-2">
//             {/* Cart */}
//             <Link href="/cart" className="relative flex flex-col items-center text-white hover:text-yellow-300 transition-colors p-2">
//               <div className="relative">
//                 <ShoppingCart size={22} />
//                 {totalItems > 0 && (
//                   <span className="absolute -top-2 -right-2 bg-[#FFD000] text-gray-800 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
//                     {totalItems > 99 ? '99+' : totalItems}
//                   </span>
//                 )}
//               </div>
//               <span className="text-xs hidden sm:block">Cart</span>
//             </Link>

//             {/* User */}
//             <div className="relative">
//               <button
//                 onClick={() => setUserMenuOpen(!userMenuOpen)}
//                 className="flex flex-col items-center text-white hover:text-yellow-300 transition-colors p-2"
//               >
//                 <User size={22} />
//                 <span className="text-xs hidden sm:block">
//                   {session?.user ? 'Account' : 'Login'}
//                 </span>
//               </button>

//               {userMenuOpen && (
//                 <div className="absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-50">
//                   {session?.user ? (
//                     <>
//                       <div className="px-4 py-2 border-b border-gray-100">
//                         <p className="font-semibold text-sm text-gray-800">{session.user.name}</p>
//                         <p className="text-xs text-gray-500">{session.user.email}</p>
//                       </div>
//                       <Link href="/profile" onClick={() => setUserMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50">My Profile</Link>
//                       <Link href="/orders" onClick={() => setUserMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50">My Orders</Link>
//                       {(session.user as any).role === 'ADMIN' && (
//                         <Link href="/admin" onClick={() => setUserMenuOpen(false)} className="block px-4 py-2 text-sm text-orange-600 font-medium hover:bg-orange-50">Admin Panel</Link>
//                       )}
//                       <button
//                         onClick={() => { signOut(); setUserMenuOpen(false); }}
//                         className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 border-t border-gray-100"
//                       >
//                         Sign Out
//                       </button>
//                     </>
//                   ) : (
//                     <>
//                       <Link href="/auth/login" onClick={() => setUserMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50">Login</Link>
//                       <Link href="/auth/register" onClick={() => setUserMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50">Register</Link>
//                     </>
//                   )}
//                 </div>
//               )}
//             </div>

//             {/* Mobile menu button */}
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="md:hidden text-white p-2"
//             >
//               {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Category Navigation */}
//       <nav className="bg-white border-b border-gray-200 hidden md:block">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center gap-0">
//             <div className="group relative">
//               <button className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-gray-700 hover:text-[#F85606] hover:bg-orange-50 transition-colors border-b-2 border-transparent hover:border-[#F85606]">
//                 <Menu size={16} /> All Categories <ChevronDown size={14} />
//               </button>
//               <div className="absolute top-full left-0 hidden group-hover:block w-48 bg-white shadow-xl rounded-b-lg border border-t-0 border-gray-100 z-50">
//                 {categories.map((cat) => (
//                   <Link
//                     key={cat.slug}
//                     href={`/shop?category=${cat.slug}`}
//                     className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#F85606] transition-colors"
//                   >
//                     <span>{cat.icon}</span> {cat.name}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//             {categories.map((cat) => (
//               <Link
//                 key={cat.slug}
//                 href={`/shop?category=${cat.slug}`}
//                 className="flex items-center gap-1.5 px-4 py-3 text-sm text-gray-700 hover:text-[#F85606] hover:bg-orange-50 transition-colors border-b-2 border-transparent hover:border-[#F85606] whitespace-nowrap"
//               >
//                 <span>{cat.icon}</span> {cat.name}
//               </Link>
//             ))}
//             <Link
//               href="/shop?featured=true"
//               className="flex items-center gap-1.5 px-4 py-3 text-sm font-semibold text-[#F85606] hover:bg-orange-50 transition-colors border-b-2 border-transparent hover:border-[#F85606]"
//             >
//               🔥 Flash Sale
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden bg-white border-b border-gray-200 shadow-lg">
//           <div className="px-4 py-3 space-y-1">
//             {categories.map((cat) => (
//               <Link
//                 key={cat.slug}
//                 href={`/shop?category=${cat.slug}`}
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-700 hover:bg-orange-50 rounded-lg"
//               >
//                 <span>{cat.icon}</span> {cat.name}
//               </Link>
//             ))}
//             <hr />
//             {session?.user ? (
//               <>
//                 <Link href="/profile" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700">My Profile</Link>
//                 <Link href="/orders" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700">My Orders</Link>
//                 <button onClick={() => signOut()} className="block w-full text-left px-3 py-2 text-sm text-red-600">Sign Out</button>
//               </>
//             ) : (
//               <>
//                 <Link href="/auth/login" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700">Login</Link>
//                 <Link href="/auth/register" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700">Register</Link>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }
'use client';
// src/components/layout/Header.tsx
import { useState } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useCartStore } from '@/lib/store';
import { Search, ShoppingCart, User, Menu, X, ChevronDown, Phone, MapPin } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function Header() {
  const { data: session } = useSession();
  const { getTotalItems } = useCartStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const router = useRouter();
  const totalItems = getTotalItems();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const categories = [
    { name: 'Smartphones', slug: 'smartphones', icon: '📱' },
    { name: 'Tablets', slug: 'tablets', icon: '📟' },
    { name: 'Accessories', slug: 'accessories', icon: '🎧' },
    { name: 'Smartwatches', slug: 'smartwatches', icon: '⌚' },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      {/* Top Bar - Deep Dark Brown */}
      <div className="bg-[#2D1B0F] text-[#F5F5DC] text-xs py-2 px-4 hidden md:block border-b border-[#3D2B1F]">
        <div className="max-w-7xl mx-auto flex justify-between items-center opacity-90">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone size={11} /> +92 300 4742092</span>
            <span className="flex items-center gap-1"><MapPin size={11} /> Free delivery on orders over Rs. 2,000</span>
          </div>
          <div className="flex items-center gap-4 font-medium">
            <Link href="/shop" className="hover:text-[#B68D40] transition-colors">Shop</Link>
            <Link href="/orders" className="hover:text-[#B68D40] transition-colors">Track Order</Link>
            {session?.user ? (
              <span className="text-[#B68D40]">Hi, {session.user.name?.split(' ')[0]}</span>
            ) : (
              <>
                <Link href="/auth/login" className="hover:text-[#B68D40] transition-colors">Login</Link>
                <span className="opacity-40">|</span>
                <Link href="/auth/register" className="hover:text-[#B68D40] transition-colors">Register</Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Header - Rich Brown */}
      <div className="bg-[#3D2B1F] py-3.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <div className="flex items-center gap-2">
              <div className="bg-[#B68D40] rounded-lg w-9 h-9 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                <span className="text-[#3D2B1F] font-black text-sm">OZ</span>
              </div>
              <span className="text-[#F5F5DC] font-black text-xl hidden sm:block tracking-widest">
                OZ STORE
              </span>
            </div>
          </Link>

          {/* Search - Off-White look */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl">
            <div className="flex">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for premium tech..."
                className="flex-1 px-4 py-2.5 text-sm rounded-l-lg outline-none text-gray-800 bg-[#FAF9F6] placeholder-gray-400"
              />
              <button
                type="submit"
                className="bg-[#B68D40] hover:bg-[#967333] px-6 rounded-r-lg transition-colors flex items-center gap-2 border-l border-[#3D2B1F]/10"
              >
                <Search size={18} className="text-[#3D2B1F]" />
                <span className="text-sm font-bold text-[#3D2B1F] hidden sm:block uppercase tracking-tighter">Search</span>
              </button>
            </div>
          </form>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Cart */}
            <Link href="/cart" className="relative flex flex-col items-center text-[#F5F5DC] hover:text-[#B68D40] transition-colors p-2">
              <div className="relative">
                <ShoppingCart size={22} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#B68D40] text-[#3D2B1F] text-[10px] font-bold rounded-full w-4.5 h-4.5 flex items-center justify-center border-2 border-[#3D2B1F]">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </div>
              <span className="text-[10px] font-medium uppercase mt-0.5 hidden sm:block">Cart</span>
            </Link>

            {/* User */}
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex flex-col items-center text-[#F5F5DC] hover:text-[#B68D40] transition-colors p-2"
              >
                <User size={22} />
                <span className="text-[10px] font-medium uppercase mt-0.5 hidden sm:block">
                  {session?.user ? 'Account' : 'Join'}
                </span>
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-[#FAF9F6] rounded-lg shadow-2xl border border-stone-200 py-1 z-50 overflow-hidden">
                  {session?.user ? (
                    <>
                      <div className="px-4 py-3 bg-stone-100 border-b border-stone-200">
                        <p className="font-bold text-sm text-[#3D2B1F]">{session.user.name}</p>
                        <p className="text-[11px] text-stone-500 truncate">{session.user.email}</p>
                      </div>
                      <Link href="/profile" onClick={() => setUserMenuOpen(false)} className="block px-4 py-2.5 text-sm text-stone-700 hover:bg-stone-50 hover:text-[#B68D40]">My Profile</Link>
                      <Link href="/orders" onClick={() => setUserMenuOpen(false)} className="block px-4 py-2.5 text-sm text-stone-700 hover:bg-stone-50 hover:text-[#B68D40]">My Orders</Link>
                      {(session.user as any).role === 'ADMIN' && (
                        <Link href="/admin" onClick={() => setUserMenuOpen(false)} className="block px-4 py-2.5 text-sm text-[#B68D40] font-bold hover:bg-stone-50">Admin Panel</Link>
                      )}
                      <button
                        onClick={() => { signOut(); setUserMenuOpen(false); }}
                        className="w-full text-left px-4 py-2.5 text-sm text-red-700 hover:bg-red-50 border-t border-stone-100"
                      >
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link href="/auth/login" onClick={() => setUserMenuOpen(false)} className="block px-4 py-2.5 text-sm text-stone-700 hover:bg-stone-50">Login</Link>
                      <Link href="/auth/register" onClick={() => setUserMenuOpen(false)} className="block px-4 py-2.5 text-sm text-stone-700 hover:bg-stone-50">Register</Link>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#F5F5DC] p-2"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Category Navigation - Off-White/Stone */}
      <nav className="bg-[#FAF9F6] border-b border-stone-200 hidden md:block">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-0">
            <div className="group relative">
              <button className="flex items-center gap-2 px-5 py-3 text-sm font-bold text-[#3D2B1F] hover:bg-stone-100 transition-colors">
                <Menu size={16} /> ALL CATEGORIES <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block w-52 bg-white shadow-2xl rounded-b-lg border border-stone-100 z-50">
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/shop?category=${cat.slug}`}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-stone-700 hover:bg-stone-50 hover:text-[#B68D40] transition-colors"
                  >
                    <span>{cat.icon}</span> {cat.name}
                  </Link>
                ))}
              </div>
            </div>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/shop?category=${cat.slug}`}
                className="flex items-center gap-1.5 px-5 py-3 text-[13px] font-medium text-stone-600 hover:text-[#B68D40] transition-colors border-b-2 border-transparent hover:border-[#B68D40] whitespace-nowrap"
              >
                {cat.name}
              </Link>
            ))}
            <Link
              href="/shop?featured=true"
              className="flex items-center gap-1.5 px-5 py-3 text-[13px] font-bold text-[#B68D40] hover:bg-[#B68D40]/5 transition-colors border-b-2 border-transparent hover:border-[#B68D40]"
            >
              ✨ EXCLUSIVE DEALS
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F6] border-b border-stone-200 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="px-4 py-4 space-y-2">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/shop?category=${cat.slug}`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-stone-700 hover:bg-stone-100 rounded-lg transition-all"
              >
                <span className="text-lg">{cat.icon}</span> {cat.name}
              </Link>
            ))}
            <div className="h-px bg-stone-200 my-2" />
            <Link href="/shop?featured=true" className="block px-4 py-3 text-sm font-bold text-[#B68D40]">Exclusive Deals</Link>
          </div>
        </div>
      )}
    </header>
  );
}