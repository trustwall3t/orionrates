import type { Metadata } from 'next';
import './globals.css';
import DynamicStyles from '@/components/DynamicStyles';
import { Toaster } from 'sonner';
import SmartsuppScript from '@/components/SmartsuppScript';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
	title: 'Orion Rates - Welcome | Regulated Broker in Copy Trading, Trade with Zero Spreads',
	description:
		'Orion Rates is a regulated broker in copy trading, trade with zero spreads',
	keywords: 'Orion Rates, broker, copy trading, zero spreads',
	authors: [{ name: 'Orion Rates' }],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={``}>
				<ThemeProvider>
					<DynamicStyles />
					<SmartsuppScript />
					{children}
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
