import './globals.css'
import { Inter } from 'next/font/google'
import { Shapka } from '../../staticomponents/Header'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next js api testing',
  description: 'Nothing',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Shapka/>
      <main className='container'> {children}</main>
      </body>
    </html>
  )
}
