import './globals.css'
import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Xyron Brual',
  description: 'My name is Xyron Brual. Welcome to my portfolio!',
  openGraph: {
    title: 'Xyron Brual',
    description: 'My name is Xyron Brual. Welcome to my portfolio!',
    url: 'https://portfolio-xyronic15.vercel.app/',
    siteName: 'Next.js',
    images: [
      {
        url: '/imgs/og-image.PNG',
        width: 800,
        height: 600,
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  )
}
