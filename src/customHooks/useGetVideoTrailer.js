import { useEffect } from 'react'
import { API_OPTIONS } from '../Utils/Constant'
import { addTrailerVideo } from '../Utils/Slice/movieSlice'
import { useDispatch } from 'react-redux'
const useGetVideoTrailer=(id)=>{
    const dispatch=useDispatch()
    const getMovieVideos=async ()=>{
        const data=await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
         API_OPTIONS);
         const json=await data.json()
         const filterData=json.results?.filter((videos)=>videos.type==="Trailer")
         const trailer=filterData.length?filterData[0]:json.results[0]
         dispatch(addTrailerVideo(trailer))
    }
    useEffect(()=>{
        getMovieVideos()
    },[])

}

export default useGetVideoTrailer