import Image from "next/image"
import { Inter } from 'next/font/google'
import { ChangeEvent, useState } from "react"
import styles from '../styles/Home.module.css'
import { DragEvent } from "react"

const inter = Inter({ subsets: ['latin'] })


function DragAndDropArea() {
  const [isDragActive, setDrag] = useState(false)

  const inputHandleChange = function(e: ChangeEvent<HTMLInputElement>) {
    console.log(e.target.files)
  }

  const handleDrag = function(e: DragEvent<HTMLFormElement | HTMLDivElement>) {
    e.preventDefault()
    e.stopPropagation()
    
    if(e.type === 'dragenter' || e.type === 'dragover') {
      setDrag(true)
    } else if(e.type === 'dragleave') {
      console.log('leave  ')
      setDrag(false)
    } 
  }

  const handleDrop = function(e: DragEvent<HTMLDivElement> ) {
    e.preventDefault()
    e.stopPropagation()
   
    if(e.dataTransfer.files && e.dataTransfer.files[0]) {
      console.log(e.dataTransfer.files[0])
    }
  }

  return (
      <form className={`${isDragActive ? 'active' : 'false'} relative`} onDragEnter={handleDrag} onDragLeave={handleDrag}>
        <label>
          <div className={`${isDragActive ? 'border-[#5AB9FF]' : ''}  border-2 border-dashed rounded-lg bg-[#FBFAFF]`}>
            <input className={styles.inputElement} type="file" multiple={true} onChange={inputHandleChange}/>
              <div className='flex flex-col place-content-center grid-cols-1 draggableArea'>
                <div className="icon flex place-content-center px-20 pt-8 pb-3">
                <Image src="/upload.png" alt="upload file" width={60} height={60} />
                </div>
                <span className="px-20 pb-14">Import or drag your files here</span>
              </div>
            </div>
            {/* the draggable area have other elements that are not part of the
                draggable area itself, so it calls dragLeave method. To solve this
                issue, we create a div that will cover all the elements on that area
                and keep dragOver activated and its gonna be hidden when we leave.
            */}
            { isDragActive && 
              <div className="absolute w-full h-full inset-0 rounded-2xl" 
              onDragEnter={handleDrag} 
              onDragLeave={handleDrag} 
              onDragOver={handleDrag}
              onDrop={handleDrop}>
              </div>
            }
          </label>
      </form>
  )
}

export default function Home() {
  return (
    <main className={`${inter.className} grid h-screen place-items-center bg-gradient-to-r from-[#A8CAFF] to-[#DAE8FF]`}> 
     <DragAndDropArea />
    </main>
  )
}
