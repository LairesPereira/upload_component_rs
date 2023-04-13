import Image from "next/image"
import { BeatLoader } from "react-spinners"
import fileIcon from '../public/pdf-icon.png'

export default function FileUploadInfo(info: {fileName: string, fileSize: number}) {
    return (
      <div className="filesInputedBox py-5 rounded-xl bg-gradient-to-r from-[#cfd9df] to-[#e2ebf0]">
          <div className="flex flex-col-3 place-items-center">
            <div className="basis-3/12">
              <Image className="justify-self-start ml-5 " src={fileIcon}  width={0} height={40} alt={'file icon'} />
            </div>
            <div className="basis-7/12 grid grid-cols-2 justify-items-center"> 
              <span className="line-clamp-1">{info.fileName}</span>
              <span>{
                (info.fileSize / (1024 * 1024)).toFixed(2) 
              } - MB</span>
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
    )
}