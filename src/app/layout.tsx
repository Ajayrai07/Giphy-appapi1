import { Metadata } from 'next';
import './globals.css'
import SessionProvider from './SessionProvider';

export const metadata: Metadata ={
  icons:{
    icon:"/Logo.png",
    apple: "/Logo.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full bg-gray-900">
      <body className="h-full">
      <SessionProvider>
        {children}
      </SessionProvider>
      </body>
    </html>
  )
}