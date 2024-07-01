import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import ActiveSectionContextProvider from '@/context/active-section-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'cyayu portfolio',
  description: 'cyayu portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950
      relative  pt-28 sm:pt-36 ` }>

        <ActiveSectionContextProvider>
          <Header/>
          {children}          
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
