import "./globals.css"
import Link from "next/link"
import MusicPlayer from "./MusicPlayer"

export const metadata = {
  title: "TattzOnDeck",
  description: "Creative. Unique. One of a Kind.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: "black",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* NAVIGATION */}
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "80px",
            padding: "30px",
            fontSize: "28px",
            fontWeight: 900,
            letterSpacing: "2px",
          }}
        >
          <Link href="/">HOME</Link>
          <Link href="/portfolio">PORTFOLIO</Link>
          <Link href="/vip">VIP</Link>
          <Link href="/contact">CONTACT</Link>
        </nav>

        {/* PAGE CONTENT */}
        {children}

        {/* GLOBAL MUSIC PLAYER */}
        <MusicPlayer />
      </body>
    </html>
  )
}