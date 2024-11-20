import React, { useEffect, useState } from 'react'
import Videocard from '../Components/Videocard'
import { getVideoAPI } from '../../../services/allAPI'

function ViewVideo(addVideoResp) {


  const[allVideos,setallVideos]=useState([])


  const handleGetVideo=async()=>{
    console.log("Inside get video");
    
    const result=await getVideoAPI()
    console.log(result);
    setallVideos(result.data)
  }
  console.log(allVideos);
  

  useEffect(()=>{
    handleGetVideo()
  },[addVideoResp])



  return (
    <>
     <div className="col d-flex flex-wrap p-2" style={{ height:"650px"}}>
      {
        allVideos.map((item)=>(
          <Videocard videoDetails={item}/>
        ))
      }
     </div>
    </>
  )
}

export default ViewVideo