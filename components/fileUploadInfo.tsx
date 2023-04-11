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
        <div className="space-y-1 max-h-96 overflow-auto">
            {filesToCreate.map(({name, size}) => (
                <div key={name} className="py-5 px-5 grid grid-cols-3 place-items-center rounded-lg bg-[#FBFAFF]">
                    <Image src={'/pdf-icon.png'} width={50} height={50} alt='pdf' />
                    <p className="truncate">{name}</p>
                    <p>{size}</p>
                </div>
            ))}
        </div>
        </>   
    )
}