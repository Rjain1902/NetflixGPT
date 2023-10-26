import React from 'react'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/Constant";
import { addUpcomingMovies } from '../Utils/Slice/movieSlice';

const useUpcomingMovies = () => {
    const dispatch=useDispatch()
    const getUpcomingMovies=async ()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
        const json=await data.json()
        dispatch(addUpcomingMovies(json.results))
      }
    
      useEffect(()=>{
        getUpcomingMovies()
      },[])
}

export default useUpcomingMovies