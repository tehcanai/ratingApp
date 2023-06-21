import './globals.css'

export const metadata = {
  title: 'Rating App',
  description: 'Rating App',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
