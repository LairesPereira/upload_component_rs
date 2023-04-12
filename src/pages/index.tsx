
import { Inter } from 'next/font/google'
import DragAndDropArea from "../../components/DragAndDropArea"
import FileUploadInfo from "../../components/fileUploadInfo"

import Image from "next/image"
import uploadIcon from '../../public/uploadIcon.png'
import fileIcon from '../../public/pdf-icon.png'
import { BeatLoader } from "react-spinners"
import { useState } from "react"

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
        <div>
          <DragAndDropArea setFiles={setFilesToUpload} />
        </div>
          <FileUploadInfo />
      </div>
    </div>
  )
}
