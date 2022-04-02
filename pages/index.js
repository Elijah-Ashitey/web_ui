/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image'

import ChatUI from './firebase-chat/chat'
function cn(...classes){
  return classes.filter(Boolean).join(' ');
}

export default function Gallery (){

  return (
    <>
        <ChatUI />
      </>
    // <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

    //   <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
       
    //     <BlurImage/>
     
    //   </div>
    // </div>
  )

}

function BlurImage(){
  const [isLoading, setLoading]= React.useState(true)
  return (
    <a href="#" className="group">
      <div  className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
      
        <Image
        alt=''
        src='https://bit.ly/placeholder-img'
        className= {cn("group-hover:opacity-75 duration-700 ease-in-out",
        isLoading?'grayscale blur-2xl scale-110':'grayscale-0 blur-0 scale-100'
        )}
        layout='fill'
        objectFit='cover'
        onLoadingComplete={()=>setLoading(false)}
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">Elijah Ashitey</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">@elijahashitey</p>
    </a>
  )
}