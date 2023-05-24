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



    {/* <div className="
        w-full
        h-[60vh]
        overflow-hidden 
        rounded-xl
        relative
      "
    >
      
      
    


<Image
        src={imageArray[0]}
        fill
        className="object-cover w-full"
        alt="Image"
      />

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
 */}


<div className=" w-full
        h-[60vh]
        overflow-hidden 
        rounded-xl
        relative ">
  <div className="-m-1 flex flex-wrap md:-m-2 w-full h-[60vh]">
    <div className="flex w-1/2 flex-wrap">

    <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={imageArray[0]} />
      </div>

    
      
      
    
    </div>
    <div className="flex w-1/2 flex-col">
     
      <div className="w-1/2 p-1 md:p-2 flex-1">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={imageArray[1]} />
      </div>

      {imageArray[2] && (
              
              
              <div className="w-1/2 p-1 md:p-2 flex-1">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={imageArray[2]} />
            </div>
              

            )}


      
    


    </div>
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