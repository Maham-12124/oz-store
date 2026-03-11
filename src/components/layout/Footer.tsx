// // // // src/components/layout/Footer.tsx
// // // import Link from 'next/link';
// // // import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

// // // export function Footer() {
// // //   return (
// // //     <footer className="bg-[#1A1A2E] text-gray-300 mt-12">
// // //       <div className="max-w-7xl mx-auto px-4 py-12">
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// // //           {/* Brand */}
// // //           <div>
// // //             <div className="flex items-center gap-2 mb-4">
// // //               <div className="bg-[#F85606] rounded-lg w-9 h-9 flex items-center justify-center">
// // //                 <span className="text-white font-black text-sm">MS</span>
// // //               </div>
// // //               <span className="text-white font-black text-xl">MobileShop</span>
// // //             </div>
// // //             <p className="text-sm leading-relaxed text-gray-400 mb-4">
// // //               Pakistan's leading online mobile store. Get the latest smartphones, tablets, and accessories at the best prices.
// // //             </p>
// // //             <div className="flex gap-3">
// // //               {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
// // //                 <a key={i} href="#" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-[#F85606] flex items-center justify-center transition-colors">
// // //                   <Icon size={16} />
// // //                 </a>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* Quick Links */}
// // //           <div>
// // //             <h3 className="text-white font-semibold mb-4">Quick Links</h3>
// // //             <ul className="space-y-2 text-sm">
// // //               {[
// // //                 { name: 'Smartphones', href: '/shop?category=smartphones' },
// // //                 { name: 'Tablets', href: '/shop?category=tablets' },
// // //                 { name: 'Accessories', href: '/shop?category=accessories' },
// // //                 { name: 'Smartwatches', href: '/shop?category=smartwatches' },
// // //                 { name: 'Flash Sale', href: '/shop?featured=true' },
// // //               ].map((link) => (
// // //                 <li key={link.name}>
// // //                   <Link href={link.href} className="hover:text-[#F85606] transition-colors">
// // //                     {link.name}
// // //                   </Link>
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </div>

// // //           {/* Customer Service */}
// // //           <div>
// // //             <h3 className="text-white font-semibold mb-4">Customer Service</h3>
// // //             <ul className="space-y-2 text-sm">
// // //               {[
// // //                 { name: 'My Account', href: '/profile' },
// // //                 { name: 'My Orders', href: '/orders' },
// // //                 { name: 'Track Order', href: '/orders' },
// // //                 { name: 'Returns & Refunds', href: '#' },
// // //                 { name: 'Help Center', href: '#' },
// // //               ].map((link) => (
// // //                 <li key={link.name}>
// // //                   <Link href={link.href} className="hover:text-[#F85606] transition-colors">
// // //                     {link.name}
// // //                   </Link>
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </div>

// // //           {/* Contact */}
// // //           <div>
// // //             <h3 className="text-white font-semibold mb-4">Contact Us</h3>
// // //             <ul className="space-y-3 text-sm">
// // //               <li className="flex items-start gap-2">
// // //                 <MapPin size={15} className="mt-0.5 flex-shrink-0 text-[#F85606]" />
// // //                 <span>123 Tech Street, Lahore, Pakistan</span>
// // //               </li>
// // //               <li className="flex items-center gap-2">
// // //                 <Phone size={15} className="flex-shrink-0 text-[#F85606]" />
// // //                 <span>+92 300 1234567</span>
// // //               </li>
// // //               <li className="flex items-center gap-2">
// // //                 <Mail size={15} className="flex-shrink-0 text-[#F85606]" />
// // //                 <span>support@mobileshop.pk</span>
// // //               </li>
// // //             </ul>
// // //             <div className="mt-4">
// // //               <p className="text-xs text-gray-500 mb-2">Business Hours</p>
// // //               <p className="text-sm">Mon - Sat: 9:00 AM - 9:00 PM</p>
// // //               <p className="text-sm">Sun: 10:00 AM - 6:00 PM</p>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Brands */}
// // //         <div className="border-t border-gray-700 mt-10 pt-8">
// // //           <p className="text-xs text-gray-500 text-center mb-4">Featured Brands</p>
// // //           <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
// // //             {['Apple', 'Samsung', 'Xiaomi', 'OPPO', 'Vivo', 'Realme', 'OnePlus', 'Google'].map((brand) => (
// // //               <Link key={brand} href={`/shop?brand=${brand.toLowerCase()}`} className="hover:text-[#F85606] transition-colors">
// // //                 {brand}
// // //               </Link>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
// // //           <p>© 2024 MobileShop. All rights reserved.</p>
// // //           <div className="flex gap-4">
// // //             <a href="#" className="hover:text-gray-300">Privacy Policy</a>
// // //             <a href="#" className="hover:text-gray-300">Terms of Service</a>
// // //             <a href="#" className="hover:text-gray-300">Cookie Policy</a>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </footer>
// // //   );
// // // }
// // // src/components/layout/Footer.tsx
// // import Link from 'next/link';
// // import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

// // export function Footer() {
// //   return (
// //     <footer className="bg-[#2D1B0F] text-stone-300 mt-12 border-t border-[#3D2B1F]">
// //       <div className="max-w-7xl mx-auto px-4 py-12">
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// //           {/* Brand */}
// //           <div>
// //             <div className="flex items-center gap-2 mb-4">
// //               <div className="bg-[#B68D40] rounded-lg w-9 h-9 flex items-center justify-center">
// //                 <span className="text-[#2D1B0F] font-black text-sm">OZ</span>
// //               </div>
// //               <span className="text-[#FAF9F6] font-black text-xl tracking-tight">OZ STORE</span>
// //             </div>
// //             <p className="text-sm leading-relaxed text-stone-400 mb-6">
// //               Pakistan's premium destination for tech enthusiasts. Experience luxury and quality with our curated collection of smartphones and accessories.
// //             </p>
// //             <div className="flex gap-3">
// //               {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
// //                 <a 
// //                   key={i} 
// //                   href="#" 
// //                   className="w-9 h-9 rounded-lg bg-[#3D2B1F] text-[#B68D40] hover:bg-[#B68D40] hover:text-[#2D1B0F] flex items-center justify-center transition-all duration-300 shadow-sm"
// //                 >
// //                   <Icon size={16} />
// //                 </a>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Quick Links */}
// //           <div>
// //             <h3 className="text-[#FAF9F6] font-bold mb-5 uppercase tracking-wider text-sm">Quick Links</h3>
// //             <ul className="space-y-3 text-sm">
// //               {[
// //                 { name: 'Smartphones', href: '/shop?category=smartphones' },
// //                 { name: 'Tablets', href: '/shop?category=tablets' },
// //                 { name: 'Accessories', href: '/shop?category=accessories' },
// //                 { name: 'Smartwatches', href: '/shop?category=smartwatches' },
// //                 { name: 'Flash Sale', href: '/shop?featured=true' },
// //               ].map((link) => (
// //                 <li key={link.name}>
// //                   <Link href={link.href} className="hover:text-[#B68D40] transition-colors border-b border-transparent hover:border-[#B68D40]/30 pb-0.5">
// //                     {link.name}
// //                   </Link>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* Customer Service */}
// //           <div>
// //             <h3 className="text-[#FAF9F6] font-bold mb-5 uppercase tracking-wider text-sm">Customer Service</h3>
// //             <ul className="space-y-3 text-sm">
// //               {[
// //                 { name: 'My Account', href: '/profile' },
// //                 { name: 'My Orders', href: '/orders' },
// //                 { name: 'Track Order', href: '/orders' },
// //                 { name: 'Returns & Refunds', href: '#' },
// //                 { name: 'Help Center', href: '#' },
// //               ].map((link) => (
// //                 <li key={link.name}>
// //                   <Link href={link.href} className="hover:text-[#B68D40] transition-colors border-b border-transparent hover:border-[#B68D40]/30 pb-0.5">
// //                     {link.name}
// //                   </Link>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* Contact */}
// //           <div>
// //             <h3 className="text-[#FAF9F6] font-bold mb-5 uppercase tracking-wider text-sm">Contact Us</h3>
// //             <ul className="space-y-4 text-sm">
// //               <li className="flex items-start gap-3 group">
// //                 <MapPin size={17} className="mt-0.5 flex-shrink-0 text-[#B68D40]" />
// //                 <span className="group-hover:text-stone-100 transition-colors">123 Tech Street, Lahore, Pakistan</span>
// //               </li>
// //               <li className="flex items-center gap-3 group">
// //                 <Phone size={17} className="flex-shrink-0 text-[#B68D40]" />
// //                 <span className="group-hover:text-stone-100 transition-colors">+92 300 1234567</span>
// //               </li>
// //               <li className="flex items-center gap-3 group">
// //                 <Mail size={17} className="flex-shrink-0 text-[#B68D40]" />
// //                 <span className="group-hover:text-stone-100 transition-colors">support@ozstore.pk</span>
// //               </li>
// //             </ul>
// //             <div className="mt-6 p-3 bg-[#3D2B1F]/50 rounded-lg border border-[#3D2B1F]">
// //               <p className="text-[10px] text-[#B68D40] font-bold uppercase mb-1">Business Hours</p>
// //               <p className="text-xs text-stone-400 italic">Mon - Sat: 9:00 AM - 9:00 PM</p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Brands */}
// //         <div className="border-t border-[#3D2B1F] mt-12 pt-8 text-center">
// //           <p className="text-[10px] text-[#B68D40] font-bold uppercase tracking-[0.2em] mb-6">Our Premium Partners</p>
// //           <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-stone-500 font-medium">
// //             {['Apple', 'Samsung', 'Xiaomi', 'OPPO', 'Vivo', 'Realme', 'OnePlus', 'Google'].map((brand) => (
// //               <Link key={brand} href={`/shop?brand=${brand.toLowerCase()}`} className="hover:text-[#B68D40] transition-all hover:scale-110">
// //                 {brand}
// //               </Link>
// //             ))}
// //           </div>
// //         </div>

// //         <div className="border-t border-[#3D2B1F] mt-10 pt-6 flex flex-col md:row justify-between items-center gap-4 text-[11px] text-stone-500 font-medium">
// //           <p>© 2026 OZ STORE. Crafted for Excellence.</p>
// //           <div className="flex gap-6 uppercase tracking-widest">
// //             <a href="#" className="hover:text-[#B68D40] transition-colors">Privacy</a>
// //             <a href="#" className="hover:text-[#B68D40] transition-colors">Terms</a>
// //             <a href="#" className="hover:text-[#B68D40] transition-colors">Cookies</a>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }
// // src/components/layout/Footer.tsx
// import Link from 'next/link';
// import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

// export function Footer() {
//   return (
//     <footer className="bg-[#2D1B0F] text-stone-300 mt-12 border-t border-[#3D2B1F]">
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Brand */}
//           <div>
//             <div className="flex items-center gap-2 mb-4">
//               <div className="bg-[#B68D40] rounded-lg w-9 h-9 flex items-center justify-center">
//                 <span className="text-[#2D1B0F] font-black text-sm">OZ</span>
//               </div>
//               <span className="text-[#FAF9F6] font-black text-xl tracking-tight">OZ STORE</span>
//             </div>
//             <p className="text-sm leading-relaxed text-stone-400 mb-6">
//               Pakistan's premium destination for tech enthusiasts. Experience luxury and quality with our curated collection of smartphones and accessories.
//             </p>
//             <div className="flex gap-3">
//               {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
//                 <a 
//                   key={i} 
//                   href="#" 
//                   className="w-9 h-9 rounded-lg bg-[#3D2B1F] text-[#B68D40] hover:bg-[#B68D40] hover:text-[#2D1B0F] flex items-center justify-center transition-all duration-300 shadow-sm"
//                 >
//                   <Icon size={16} />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-[#FAF9F6] font-bold mb-5 uppercase tracking-wider text-sm">Quick Links</h3>
//             <ul className="space-y-3 text-sm">
//               {[
//                 { name: 'Smartphones', href: '/shop?category=smartphones' },
//                 { name: 'Tablets', href: '/shop?category=tablets' },
//                 { name: 'Accessories', href: '/shop?category=accessories' },
//                 { name: 'Smartwatches', href: '/shop?category=smartwatches' },
//                 { name: 'Flash Sale', href: '/shop?featured=true' },
//               ].map((link) => (
//                 <li key={link.name}>
//                   <Link href={link.href} className="hover:text-[#B68D40] transition-colors border-b border-transparent hover:border-[#B68D40]/30 pb-0.5">
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Customer Service */}
//           <div>
//             <h3 className="text-[#FAF9F6] font-bold mb-5 uppercase tracking-wider text-sm">Customer Service</h3>
//             <ul className="space-y-3 text-sm">
//               {[
//                 { name: 'My Account', href: '/profile' },
//                 { name: 'My Orders', href: '/orders' },
//                 { name: 'Track Order', href: '/orders' },
//                 { name: 'Returns & Refunds', href: '#' },
//                 { name: 'Help Center', href: '#' },
//               ].map((link) => (
//                 <li key={link.name}>
//                   <Link href={link.href} className="hover:text-[#B68D40] transition-colors border-b border-transparent hover:border-[#B68D40]/30 pb-0.5">
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact - Now Fully Clickable */}
//           <div>
//             <h3 className="text-[#FAF9F6] font-bold mb-5 uppercase tracking-wider text-sm">Contact Us</h3>
//             <ul className="space-y-4 text-sm">
//               <li>
//                 <a 
//                   href="https://maps.google.com/?q=123+Tech+Street,+Lahore,+Pakistan" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="flex items-start gap-3 group transition-colors"
//                 >
//                   <MapPin size={17} className="mt-0.5 flex-shrink-0 text-[#B68D40]" />
//                   <span className="group-hover:text-white transition-colors">123 Tech Street, Lahore, Pakistan</span>
//                 </a>
//               </li>
//               <li>
//                 <a 
//                   href="tel:+923001234567" 
//                   className="flex items-center gap-3 group transition-colors"
//                 >
//                   <Phone size={17} className="flex-shrink-0 text-[#B68D40]" />
//                   <span className="group-hover:text-white transition-colors">+92 300 1234567</span>
//                 </a>
//               </li>
//               <li>
//                 <a 
//                   href="mailto:support@ozstore.pk" 
//                   className="flex items-center gap-3 group transition-colors"
//                 >
//                   <Mail size={17} className="flex-shrink-0 text-[#B68D40]" />
//                   <span className="group-hover:text-white transition-colors break-all">support@ozstore.pk</span>
//                 </a>
//               </li>
//             </ul>
//             <div className="mt-6 p-3 bg-[#3D2B1F]/50 rounded-lg border border-[#3D2B1F]">
//               <p className="text-[10px] text-[#B68D40] font-bold uppercase mb-1">Business Hours</p>
//               <p className="text-xs text-stone-400 italic">Mon - Sat: 9:00 AM - 9:00 PM</p>
//             </div>
//           </div>
//         </div>

//         {/* Brands */}
//         <div className="border-t border-[#3D2B1F] mt-12 pt-8 text-center">
//           <p className="text-[10px] text-[#B68D40] font-bold uppercase tracking-[0.2em] mb-6">Our Premium Partners</p>
//           <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-stone-500 font-medium">
//             {['Apple', 'Samsung', 'Xiaomi', 'OPPO', 'Vivo', 'Realme', 'OnePlus', 'Google'].map((brand) => (
//               <Link key={brand} href={`/shop?brand=${brand.toLowerCase()}`} className="hover:text-[#B68D40] transition-all hover:scale-110">
//                 {brand}
//               </Link>
//             ))}
//           </div>
//         </div>

//         <div className="border-t border-[#3D2B1F] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-stone-500 font-medium">
//           <p>© 2026 OZ STORE.</p>
//           <div className="flex gap-6 uppercase tracking-widest">
//             <a href="#" className="hover:text-[#B68D40] transition-colors">Privacy</a>
//             <a href="#" className="hover:text-[#B68D40] transition-colors">Terms</a>
//             <a href="#" className="hover:text-[#B68D40] transition-colors">Cookies</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
// src/components/layout/Footer.tsx
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#2D1B0F] text-stone-300 mt-12 border-t border-[#3D2B1F]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#B68D40] rounded-lg w-9 h-9 flex items-center justify-center">
                <span className="text-[#2D1B0F] font-black text-sm">OZ</span>
              </div>
              <span className="text-[#FAF9F6] font-black text-xl tracking-tight">OZ STORE</span>
            </div>
            <p className="text-sm leading-relaxed text-stone-400 mb-6">
              Pakistan's premium destination for tech enthusiasts. Experience luxury and quality with our curated collection of smartphones and accessories.
            </p>
            
            {/* Clickable Social Icons */}
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: "https://facebook.com/ozstore" },
                { Icon: Instagram, href: "https://instagram.com/ozstore" },
                { Icon: Twitter, href: "https://twitter.com/ozstore" },
                { Icon: Youtube, href: "https://youtube.com/@ozstore" },
              ].map(({ Icon, href }, i) => (
                <a 
                  key={i} 
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#3D2B1F] text-[#B68D40] hover:bg-[#B68D40] hover:text-[#2D1B0F] flex items-center justify-center transition-all duration-300 shadow-sm"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#FAF9F6] font-bold mb-5 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Smartphones', href: '/shop?category=smartphones' },
                { name: 'Tablets', href: '/shop?category=tablets' },
                { name: 'Accessories', href: '/shop?category=accessories' },
                { name: 'Smartwatches', href: '/shop?category=smartwatches' },
                { name: 'Flash Sale', href: '/shop?featured=true' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-[#B68D40] transition-colors border-b border-transparent hover:border-[#B68D40]/30 pb-0.5">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-[#FAF9F6] font-bold mb-5 uppercase tracking-wider text-sm">Customer Service</h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'My Account', href: '/profile' },
                { name: 'My Orders', href: '/orders' },
                { name: 'Track Order', href: '/orders' },
                { name: 'Returns & Refunds', href: '#' },
                { name: 'Help Center', href: '#' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-[#B68D40] transition-colors border-b border-transparent hover:border-[#B68D40]/30 pb-0.5">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - Fully Clickable */}
          <div>
            <h3 className="text-[#FAF9F6] font-bold mb-5 uppercase tracking-wider text-sm">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a 
                  href="https://maps.google.com/?q=123+Tech+Street+Lahore+Pakistan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group transition-colors"
                >
                  <MapPin size={17} className="mt-0.5 flex-shrink-0 text-[#B68D40]" />
                  <span className="group-hover:text-white transition-colors">123 Tech Street, Lahore, Pakistan</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+923001234567" 
                  className="flex items-center gap-3 group transition-colors"
                >
                  <Phone size={17} className="flex-shrink-0 text-[#B68D40]" />
                  <span className="group-hover:text-white transition-colors">+92 300 1234567</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:support@ozstore.pk" 
                  className="flex items-center gap-3 group transition-colors"
                >
                  <Mail size={17} className="flex-shrink-0 text-[#B68D40]" />
                  <span className="group-hover:text-white transition-colors break-all">support@ozstore.pk</span>
                </a>
              </li>
            </ul>
            <div className="mt-6 p-3 bg-[#3D2B1F]/50 rounded-lg border border-[#3D2B1F]">
              <p className="text-[10px] text-[#B68D40] font-bold uppercase mb-1">Business Hours</p>
              <p className="text-xs text-stone-400 italic">Mon - Sat: 9:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>

        {/* Brands */}
        <div className="border-t border-[#3D2B1F] mt-12 pt-8 text-center">
          <p className="text-[10px] text-[#B68D40] font-bold uppercase tracking-[0.2em] mb-6">Our Premium Partners</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-stone-500 font-medium">
            {['Apple', 'Samsung', 'Xiaomi', 'OPPO', 'Vivo', 'Realme', 'OnePlus', 'Google'].map((brand) => (
              <Link key={brand} href={`/shop?brand=${brand.toLowerCase()}`} className="hover:text-[#B68D40] transition-all hover:scale-110">
                {brand}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-[#3D2B1F] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-stone-500 font-medium">
          <p>© 2026 OZ STORE. Crafted for Excellence.</p>
          <div className="flex gap-6 uppercase tracking-widest">
            <a href="#" className="hover:text-[#B68D40] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#B68D40] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#B68D40] transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}