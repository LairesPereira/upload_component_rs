import Image from "next/image"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <main className={`${inter.className} grid h-screen place-items-center bg-gradient-to-r from-[#A8CAFF] to-[#DAE8FF]`}>
     <div className="border-2 border-dashed rounded-lg bg-[#FBFAFF]">
      <div className='flex flex-col place-content-center grid-cols-1 draggableArea'>
        <div className="icon flex place-content-center px-20 pt-8 pb-3">
        <Image src="/upload.png" alt="upload file" width={60} height={60} />
        </div>
        <span className="px-20 pb-14">Import or drag your files here</span>
      </div>
     </div>
    </main>
  )
}
