import Image from "next/image"
import FileUploadInfo from "../../components/fileUploadInfo"
import { Inter } from 'next/font/google'
import { ChangeEvent, useState } from "react"
import styles from '../styles/Home.module.css'
import { DragEvent } from "react"

const inter = Inter({ subsets: ['latin'] })

const DragAndDropArea = function()  {
  const  [dragArea, setDrag] = useState({
    isDragActive: false,
    filesDroped: []
  })

  const handleDrop = function(e: DragEvent<HTMLDivElement> ) {
    e.preventDefault()
    e.stopPropagation()
    let filesToPush = []
  
    if(e.dataTransfer.files && e.dataTransfer.files[0]) {
      const filesRecieved = e.dataTransfer.files
      for (const file in filesRecieved) {
        if(typeof(filesRecieved[file]) === 'object') {
          setDrag({...dragArea, ...dragArea.filesDroped.push(filesRecieved[file])})
        }
      }
    }
    setDrag({...dragArea, isDragActive: false})
  }

  const inputHandleChange = function(e: ChangeEvent<HTMLInputElement>) {
    console.log(e.target.files)
  }

  const handleDrag = function(e: DragEvent<HTMLFormElement | HTMLDivElement>) {
    e.preventDefault()
    e.stopPropagation()
    
    if(e.type === 'dragenter' || e.type === 'dragover') {
      setDrag({...dragArea, isDragActive: true})
    } else if(e.type === 'dragleave') {
      setDrag({...dragArea, isDragActive: false})
    } 
  }

  return (
    <>
    <div className={`${dragArea.isDragActive ? 'active border-[#5AB9FF]' : 'false'} 
    border-2 border-dashed relative rounded-lg `}
    onDragEnter={handleDrag} 
    onDragLeave={handleDrag}>
    <label>
      <div className='grid place-items-center justify-items-center px-5 py-10 space-y-2 rounded-lg bg-[#FBFAFF]'>
        <Image src="/upload.png" alt="upload file" width={60} height={60} />
          <input className={styles.inputElement} type="file" multiple={true} onChange={inputHandleChange}/>
            Import or drag your files here
          </div>
            {/* 
                the draggable area have other elements that are not part of the
                draggable area itself, so it calls dragLeave method. To solve this
                issue, we create a div that will cover all the elements on that area
                and keep dragOver activated and its gonna be hidden when we leave.
            */}
            { dragArea.isDragActive && 
              <div className="absolute w-full h-full inset-0 rounded-2xl" 
              onDragEnter={handleDrag} 
              onDragLeave={handleDrag} 
              onDragOver={handleDrag}
              onDrop={handleDrop}>
              </div>
            }
        </label>
    </div>
    <div className="space-y-1 max-h-96 overflow-auto">
      <FileUploadInfo infoSend={dragArea.filesDroped} />
    </div>
    </>
  )
}

export default function Home() {
  return (
    <div className={`${inter.className} grid h-screen place-items-center bg-gradient-to-r from-[#A8CAFF] to-[#DAE8FF]`}>
        <div className="space-y-1 shadow-2xl max-w-md">
          <div>
            <DragAndDropArea />
          </div >
      </div>
    </div>  
  )
}
