'use client';

import Image from "next/image";

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";

import Heading from "../Heading";
import HeartButton from "../HeartButton";

interface ListingHeadProps {
  title: string;
  locationValue: string;
  imageSrc: string;
  imageArray: string[];
  id: string;
  currentUser?: SafeUser | null
}

const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  locationValue,
  imageSrc,
  imageArray,
  id,
  currentUser
}) => {

  console.log("img array", imageArray)
  console.log("img src ", imageSrc)
  const { getByValue } = useCountries();

  const location = getByValue(locationValue);

  return ( 
    <>
    <Heading
      title={title}
      subtitle={`${location?.region}, ${location?.label}`}
    />



   


<div className=" w-full
        h-[60vh]
        overflow-hidden 
        rounded-xl
        relative ">
  {/* <div className="-m-1 flex flex-row md:-m-2 w-full h-[60vh]">
    <div className="flex w-1/2 flex-wrap">

    <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full   object-center"
          src={imageArray[0]} />
      </div>

    
      
      
    
    </div>
    <div className="flex w-1/2 flex-col ">
     
    {imageArray[1] && (
              
              
              <div className=" p-1 md:p-2 flex-1">
              <img
                alt="gallery"
                className="block w-full   object-center"
                src={imageArray[1]} />
            </div>
              

            )}

      {imageArray[2] && (
              
              
              <div className=" p-1 md:p-2 flex-1 w-200 h-200">
              <img
                alt="gallery"
                className="block    object-cover  object-center"
                src={imageArray[2]} />
            </div>
              

            )}

    </div>


    <div className="flex w-1/2 flex-col">
     
    {imageArray[3] && (
              
              
              <div className="w-full p-1 md:p-2 flex-1">
              <img
                alt="gallery"
                className="block h-full w-full   object-center"
                src={imageArray[3]} />
            </div>
              

            )}

      {imageArray[4] && (
              
              
              <div className="w-full p-1 md:p-2 flex-1">
              <img
                alt="gallery"
                className="block h-full w-full   object-center"
                src={imageArray[4]} />
            </div>
              

            )}

    </div>






  </div> */}

  <div className="grid grid-cols-3 gap-2">


  
        <img
          alt="gallery"
          className="   row-span-2 object-center h-[60vh]"
          src={imageArray[0]} />
  


      {imageArray[1] && (
              
              
             
              <img
                alt="gallery"
                className="block object-center  h-[30vh] "
                src={imageArray[1]} />
            
              

            )}

      {imageArray[2] && (
              
              
             
              <img
                alt="gallery"
                className="block      object-center  h-[30vh]"
                src={imageArray[2]} />
           
              

            )}


{imageArray[3] && (
              
              
              
              <img
                alt="gallery"
                className="block      object-center h-[30vh]"
                src={imageArray[3]} />
            
              

            )}


{imageArray[4] && (
              
              
             
              <img
                alt="gallery"
                className="block      object-center h-[30vh]"
                src={imageArray[4]} />
            
              

            )}


  </div>


  <div
        className="
          absolute
          top-5
          right-5
        "
      >
        <HeartButton 
          listingId={id}
          currentUser={currentUser}
        />
      </div>

</div>


    
  </>

   );
}
 
export default ListingHead;