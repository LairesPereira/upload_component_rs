
import { Inter } from 'next/font/google'
import { useState } from 'react'
import DragAndDropArea from "../../components/DragAndDropArea"
import FileUploadInfo from "../../components/fileUploadInfo"

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  function setFilesToUpload(e :any) {
    const filesToUpload = e
    for (const file in filesToUpload) {
      }
    }

  return (
    <div className="homeAreaBox flex flex-col place-items-center place-content-center h-screen bg-gradient-to-r from-[#3D4E81] via-[#5753C9] via-30% to-[#6E7FF3]">
      <div className="setSizeOfChildren w-96 space-y-2">
        <div className="">
          <DragAndDropArea setFiles={setFilesToUpload} />
        </div>
        <div className="allFilesIpuntParent space-y-1.5 rounded-lg max-h-96 overflow-y-auto">
          <FileUploadInfo />
        </div>
      </div>
    </div>
  )
}
