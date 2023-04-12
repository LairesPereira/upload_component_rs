import Image from "next/image"
import uploadIcon from '../public/uploadIcon.png'
import { useState } from "react"

export default function DragAndDropArea(fileUploadMethods: any) {
    const [ isDragActive, setDrag ] = useState(false)

    function handleDrag(e :any) {
        e.preventDefault()
        e.stopPropagation()
        e.type === 'dragover' ? setDrag(true) : setDrag(false)   
    }

    function handleDrop(e: any) {
        e.preventDefault()
        e.stopPropagation()
        setDrag(false)
        fileUploadMethods.setFiles(e.dataTransfer.files) 
    }

    return (
        <>
            <label>
                <div className={`${isDragActive ? 'border-[#2d2d2d]' : '' } 
                flex flex-col place-items-center space-y-4
                dragAreaBox py-12 rounded-xl border-4 border-dashed bg-gradient-to-r from-[#cfd9df] to-[#e2ebf0]
                `}
                    onDragEnter={handleDrag}
                    onDragOver={handleDrag}
                    onDragLeave={handleDrag}
                    onDrop={handleDrop}
                >
                    <input type='file' onChange={handleDrop} style={ {display: 'none'} } /> 
                    <Image src={uploadIcon} width={50} height={50} alt='upload icon' />
                    <span>drag and drop your files here</span>
                
                </div>
            </label>
        </>
    )
}