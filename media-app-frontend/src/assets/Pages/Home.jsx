import React, { useState } from 'react'
import AddVideo from '../Components/AddVideo'
import ViewVideo from '../Components/ViewVideo'
import AddCategory from '../Components/AddCategory'
import { Link } from 'react-router-dom'
import { FaHistory } from "react-icons/fa";
import '../Pages/Home.css'

function Home() {

  const [addVideoResp,setAddVideoResp]=useState({})
  return (
<div style={{fontFamily:'poppins,serif', height:"auto", backgroundColor:"#222831", color:"white"}}>



<div className="row  d-flex">

  <div className="col-12 col-md-6 d-flex p-5">
    <h4 className='fw-bold'>Upload Video</h4> <AddVideo setAddVideoResp={setAddVideoResp}/>
  </div>
  <div className="col-12 col-md-6" >
    <Link to={'/WatchHistory'} style={{float:'right', color:"white"}} className='p-5 '>Watch History <FaHistory /></Link>
  </div>

</div>
  


  <div className="All row " style={{height:"auto"}}>
    <div className="col-12 col-md-9 " style={{height:"auto"}}>
      <h3 className='text-center'>All videos</h3>
     <div className="div ms-5" style={{overflow:"auto"}}>
     <ViewVideo addVideoResp={addVideoResp}/>

     </div>
    </div>





    <div className="Cat col-12 col-md-3 d-flex justify-content-center flex-column pt-5 pb-5 ms-4" style={{height:"100%"}}>
      <h3 className='text center'>Add Category</h3>
     <div className="div" style={{overflow:"auto"}}>
     <AddCategory/>
     </div>
    </div>
  </div>
</div>





  )
}

export default Home