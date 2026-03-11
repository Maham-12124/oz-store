// // src/app/layout.tsx
// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import './globals.css';
// import { Providers } from '@/components/layout/Providers';
// import { Toaster } from 'react-hot-toast';

// const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

// export const metadata: Metadata = {
//   title: 'MobileShop - Pakistan\'s #1 Mobile Store',
//   description: 'Buy latest smartphones, tablets, and accessories at best prices in Pakistan.',
//   keywords: 'mobile shop, smartphones, Pakistan, online shopping, iPhone, Samsung, Xiaomi',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.variable} font-sans`}>
//         <Providers>
//           {children}
//           <Toaster
//             position="top-center"
//             toastOptions={{
//               duration: 3000,
//               style: { borderRadius: '8px', fontSize: '14px' },
//               success: { iconTheme: { primary: '#F85606', secondary: '#fff' } },
              
//             }}
//           />
//         </Providers>
//       </body>
//     </html>
//   );
// }
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/layout/Providers';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'OZ STORE | Premium Tech & Lifestyle Essentials',
  description: 'Curated technology and lifestyle essentials for the modern minimalist in Pakistan.',
  keywords: 'OZ STORE, premium tech, smartphones, minimalist lifestyle, Pakistan online shopping',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>
          {children}
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 3000,
              style: { 
                borderRadius: '12px', 
                background: '#2D1B0F', 
                color: '#fff',
                fontSize: '13px',
                letterSpacing: '0.05em' 
              },
              success: { 
                iconTheme: { primary: '#B68D40', secondary: '#fff' } 
              },
              error: {
                style: { background: '#991B1B' }
              }
            }}
          />
        </Providers>
      </body>
    </html>
  );
}