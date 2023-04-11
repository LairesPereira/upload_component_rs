import Image from "next/image"
import fileIcon from '../../public/pdf-icon.png'
import uploadIcon from '../../public/uploadIcon.png'
import { CSSProperties } from "react"
import { BeatLoader } from "react-spinners"
import FileUploadInfo from "../../components/fileUploadInfo"
import { Inter } from 'next/font/google'
import { ChangeEvent, useState } from "react"
import styles from '../styles/Home.module.css'
import { DragEvent } from "react"

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("blue");


  return (
    <div className="homeAreaBox flex flex-col place-items-center place-content-center h-screen bg-gradient-to-r from-[#3D4E81] via-[#5753C9] via-30% to-[#6E7FF3]">
      <div className="setSizeOfChildren w-96 space-y-2">
        <div className="dragAreaBox flex flex-col space-y-4 place-items-center py-12 rounded-xl border-4 border-dashed bg-gradient-to-r from-[#cfd9df] to-[#e2ebf0]">
        <Image src={uploadIcon} width={50} height={50} alt='upload icon' />
          <span>drag and drop your files here</span>
        </div>
        <div className="allFilesIpuntParent space-y-1.5 rounded-lg max-h-96 overflow-y-auto">
          <div className="filesInputedBox py-5 rounded-xl bg-gradient-to-r from-[#cfd9df] to-[#e2ebf0]" >
            <div className="flex flex-col-3 place-items-center">
              <div className="basis-3/12">
                <Image className="justify-self-start ml-5 " src={fileIcon}  width={40} height={40} alt={'file icon'} />
              </div>
              <div className="basis-7/12 grid grid-cols-2 justify-items-center"> 
                <span className="line-clamp-1">file with big big big big big big big big big big big big really big name</span>
                <span >size</span>
              </div>
              <div className="basis-1/12">
                <BeatLoader
                color="grey"
                size={5}
                loading={true}
                />              
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
  )
}
