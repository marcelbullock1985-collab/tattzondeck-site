import Image from "next/image"

export default function Home() {
  return (
    <div>
      <Image
        src="/logo.png"
        alt="Logo"
        width={400}
        height={400}
      />
    </div>
  )
}