import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex">
        <Image
          src="/volcano.png"
          alt="タラバガニ・ヴォルケイノ Logo"
          width={180}
          height={180}
          priority
        />
      </div>
    </main>
  )
}
