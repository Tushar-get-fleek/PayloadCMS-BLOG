import { Inter } from 'next/font/google';
import './globals.css'; // Assuming you have global styles

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'My Next.js App',
    description: 'A simple Next.js app with featured articles',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}