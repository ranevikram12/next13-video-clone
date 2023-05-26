'use client';

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from 'react-icons/tb'
import {useState, useEffect} from 'react';

declare global {
  var cloudinary: any
}

const uploadPreset = "s7bwndkb";



interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}




const ImageUploadMulti: React.FC<ImageUploadProps> = ({

  onChange,
  value
}) => {

  
  

  const [imgArray, setImgArray] = useState<string[]>([]);


 

  const handleUpload = useCallback((result: any) => {
    console.log("result url", result.info.secure_url)
    setImgArray([...imgArray, result.info.secure_url ])
   
  
    console.log("Img array", imgArray)

  
 
    //onChange(imgArray);
    onChange(result.info.secure_url);
 
  }, [onChange]);


  useEffect(() => {
    console.log(imgArray);
  }, [imgArray, handleUpload]);


  return (
    <CldUploadWidget 
      onUpload={handleUpload} 
      uploadPreset={uploadPreset}
      options={{
        maxFiles: 5
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="
              relative
              cursor-pointer
              hover:opacity-70
              transition
              border-dashed 
              border-2 
              p-20 
              border-neutral-300
              flex
              flex-col
              justify-center
              items-center
              gap-4
              text-neutral-600
            "
          >
            <TbPhotoPlus
              size={50}
            />
            <div className="font-semibold text-lg">
              Click to upload multiple
            </div>
            {imgArray[0] && (
              <div className="
              absolute inset-0 w-full h-full">
                <Image
                  fill 
                  style={{ objectFit: 'cover' }} 
                  src={imgArray[0]} 
                  alt="House" 
                />
              </div>
            )}
          </div>
        ) 
    }}
    </CldUploadWidget>
  );
}

export default ImageUploadMulti;
