// Main Next/react imports
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// Auth/user management
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ember',
  description: 'AI by Talon Group',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className='container' style={{ padding: '50px 0 100px 0'}}>
          {children}
        </div>
      </body>
    </html>
  );
};

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <ClerkProvider>
//       <html lang="en">
//         <body className={inter.className}>{children}</body>
//       </html>
//     </ClerkProvider>
//   );
// };