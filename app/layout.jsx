import { Inter, EB_Garamond } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });
const ebGaramond = EB_Garamond({ subsets: ['latin'] });

export const metadata = {
	title: 'Provo YSA 142nd Ward',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} ${ebGaramond.className} min-h-screen flex flex-col`}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}