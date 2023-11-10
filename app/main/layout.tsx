import type { Metadata } from 'next';
import { Inter, Jost } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });
const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: 'Embr',
  description: 'AI Toolings',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${jost.className} antialiased dark:bg-[#09090B]`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<main className="">{children}</main>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}