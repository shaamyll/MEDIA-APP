import React from 'react'
import { deleteVideoAPI, watchHistoryAPI } from '../../../services/allAPI';
import { RiDeleteBin5Fill } from "react-icons/ri";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple
} from 'mdb-react-ui-kit';
import Swal from 'sweetalert2'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../Components/Videocard.css'



function Videocard({videoDetails}) {
 console.log(videoDetails);
 

 const [show, setShow] = useState(false);

 const handleClose = () => setShow(false);

 const handleShow = async() =>{
   setShow(true);

   const {caption,link}=videoDetails
   let today=new Date()
   console.log(today);
   let timestamp= Intl.DateTimeFormat('en-us',{year:'2-digit',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit'}).format(today)
   console.log(timestamp);
   const body={
    caption,link,timestamp
   }
   const result=await watchHistoryAPI(body)
   console.log(result);
   
 }

const handleDelete=async(id)=>{
  try{
    const result=await deleteVideoAPI(id)
  console.log(result);
  Swal.fire({
    title: "Delete success",
    text: "Video deleted successfully",
    icon: "success"
  });
  setTimeout(()=>{
    window.location.reload()
  },2000)
  }
  catch(error){
    console.log(error);
    Swal.fire({
      title: "ERROR",
      text: "Failed to fetch",
      icon: "error"
    });
  }
  
}


const videoDragtart=(e,vId)=>{
  console.log("Video drag started...");
  console.log(e);
  console.log(vId);
  e.dataTransfer.setData("videoId",vId)
}


  return (
     <>
      {
        // allVideos.map(video=>(
          <div className=" m-2 ms-3 mb-5" style={{ height:"280px", width:"250px", color:"#222831"}} >



    <MDBCard id='fetch' draggable={true} onDragStart={e=>videoDragtart(e,videoDetails.id)}  style={{backgroundColor:"black" }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage style={{height:"180px", width:"100%"}}  src={videoDetails.imgUrl} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody style={{backgroundColor:"black", color:"white" }}className='rounded'>
        
        <MDBCardText>
          {videoDetails.caption}
       

          <RiDeleteBin5Fill onClick={()=>handleDelete(videoDetails.id)} className='fs-bold' style={{float:'right'}} />
        </MDBCardText>
        <button  className='btn btn-success' onClick={handleShow}>watch now</button>
      </MDBCardBody>
    </MDBCard>







    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="470" height="315" src={videoDetails.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
        // ))
        }



      
     </>


    // </div>


    
  

  )
}

export default Videocard