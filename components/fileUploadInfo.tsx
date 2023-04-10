import Image from "next/image"
import '../src/styles/FileUploadInfo.module.css'

export default function FileUploadInfo(recievedFileInfo: {infoSend: []}) { 
    console.log(recievedFileInfo)
    let filesInfoToDisplay = recievedFileInfo.infoSend
    let filesToCreate: [] = []
    for (const ind in filesInfoToDisplay) {
        filesToCreate.push(filesInfoToDisplay[ind])
    }

    return (
        <>
            {filesToCreate.map(({name, size}) => (
                <div key={name} className="p-5 grid grid-cols-3 place-items-center rounded-md bg-[#FBFAFF]">
                    <Image src={'/pdf-icon.png'} width={50} height={50} alt='pdf' />
                    <p>{name}</p>
                    <p>{size}</p>
                </div>
            ))}        
        </>   
    )
}