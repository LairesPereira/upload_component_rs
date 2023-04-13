
import { Inter } from 'next/font/google'
import DragAndDropArea from "../../components/DragAndDropArea"
import FileUploadInfo from "../../components/fileUploadInfo"
import { useState } from 'react'


import Image from 'next/image'
import uploadIcon from '../../public/uploadIcon.png'
const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  const [ filesToUpload, setFiles ] = useState({
    filesToShow: []
  })

  function setFilesToUpload(e :any) {
    console.log('e: ', e)
    const objectFilesToArray = Object.values(e)
    for (const file in e) {
      console.log(e)
      if(typeof(e[file]) === 'object') {
        setFiles({...filesToUpload, ...filesToUpload.filesToShow.push(e[file])})
      }
        
      }
    }
    console.log('finalmente', filesToUpload)

  return (
    <div className="homeAreaBox flex flex-col place-items-center place-content-center h-screen bg-gradient-to-r from-[#3D4E81] via-[#5753C9] via-30% to-[#6E7FF3]">
      <div className="setSizeOfChildren w-96 space-y-2">
        <div className='border-[#2d2d2d]'>
          <DragAndDropArea setFiles={setFilesToUpload}/>
        </div>  
        <div className="allFilesIpuntParent space-y-1.5 rounded-lg max-h-96 overflow-y-auto">
          {filesToUpload.filesToShow.map(({name, size}, key) => (
                <div key={key} >
                  <FileUploadInfo fileName={name} fileSize={size} />
                </div>
            ))}
          </div>
      </div>
    </div>
  )
}
