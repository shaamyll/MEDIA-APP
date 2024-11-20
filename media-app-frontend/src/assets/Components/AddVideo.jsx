import React from 'react'
import { RiUploadCloudFill } from "react-icons/ri";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addVideoAPI } from '../../../services/allAPI';
import Swal from 'sweetalert2'


function AddVideo(setAddVideoResp) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const [videoDetails,setvideoDetails]=useState({
    caption:"",
    imgUrl:"",
    link:""
  })

  console.log(videoDetails);



  
  const getEmbedLink=(e)=>{
    const {value}=e.target
    console.log(value);

    let ycode=value.slice(-31)
    console.log(ycode);
    
    let yLink=`https://www.youtube.com/embed/${ycode}`
    console.log(yLink);

    setvideoDetails({...videoDetails,link:yLink})
    
  }




  const handleAdd=async()=>{
    const{caption,imgUrl,link}=videoDetails
    console.log(videoDetails);

    if(!caption || !imgUrl || !link){
      Swal.fire({
        title: "ERROR",
        text: "Please fill the form",
        icon: "error"
      });
    }
    else{
      //API fetching
      const result=await addVideoAPI(videoDetails)
      console.log(result);


      if(result.status>=200 && result.status<300){
        
        Swal.fire({
          title: "Success",
          text: "Video added successfully",
          icon: "success"
        });
          
     
      handleClose()
      setAddVideoResp(result.data)
      setvideoDetails({
        caption:"",
        imgUrl:"",
        link:""
      })
      
      }
      else{
        alert(result.message)
        
      }




    }
  }

  return (
    <div style={{fontFamily:'poppins,serif'}}>
     <RiUploadCloudFill className='fs-2 ms-2' onClick={handleShow}/>
     <Modal show={show} onHide={handleClose} style={{fontFamily:'poppins,serif'}}>  
        <Modal.Header closeButton style={{backgroundColor:'#222831', color:'white'}}>
          <Modal.Title>Upload Videos</Modal.Title>
        </Modal.Header>
        <center><Modal.Body style={{backgroundColor:'#222831', color:'white'}}>Please fill the following details</Modal.Body></center>
        <Modal.Body style={{backgroundColor:'#222831'}}>
          <input onChange={e=>setvideoDetails({...videoDetails,caption:e.target.value})} type="text" className='form-control rounded shadow mb-3' placeholder='Video Caption'/>

          <input onChange={e=>setvideoDetails({...videoDetails,imgUrl:e.target.value})} type="text" className='form-control rounded shadow mb-3' placeholder='Video Image'/>

          <input onChange={getEmbedLink} type="text" className='form-control rounded shadow' placeholder='Video Url'/>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor:'#222831'}}>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button  onClick={handleAdd} variant="primary">
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddVideo