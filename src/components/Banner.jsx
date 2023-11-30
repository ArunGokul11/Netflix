
import { useEffect } from "react";
import { useState } from "react";
import instance from "../instance";
import './Banner.css'
function Banner({fetchurl}){
    const [movie,setMovieBanner]=useState();
    const base_url = "https://image.tmdb.org/t/p/original";
   const fetchData=async()=>{
        const {data}=await instance.get(fetchurl);
        setMovieBanner(data.results[Math.floor(Math.random()*data.results.length)])
    }
    useEffect(()=>{
        fetchData();
    },[])
    console.log("movie banner")
    console.log(movie);
    return(
        <>
        <div style={{height:"700px",width:"100%", backgroundImage:`url(${base_url}${movie?.backdrop_path})`,backgroundSize:"cover"}}>
            <div className="banner-content">
                <h1 style={{color:'white'}}>{movie?.name}</h1>
                <button className="btn btn-danger" >Play<i class="fa-solid fa-play bg-transparent ms-2 fa-sm"></i></button>
                <button className="btn border-white ms-4 more">More info<i class="fa-solid fa-caret-down bg-transparent ms-2 fa-sm"></i></button>
                <h4 style={{color:'white'}}>{movie?.overview?.slice(0,200)}</h4>
            </div>
        </div>
        {/* <h1 style={{color:"white"}}>Banner</h1>
        <img alt="" src={`${base_url}${movie?.backdrop_path}`} /> */}
        </>
    )
}
export default Banner;