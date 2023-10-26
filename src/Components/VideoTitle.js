import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
export const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[10%] px-14 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='py-6 text-md w-1/4'>{overview}</p>
        <div>
           
            <button className='bg-white  text-black p-2 px-10 text-md hover:bg-opacity-80 rounded-lg'><FontAwesomeIcon icon={faPlay} /> Play</button>
            <button className='mx-2 bg-gray-500 text-white p-2 px-10 text-md bg-opacity-50 rounded-lg'> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
