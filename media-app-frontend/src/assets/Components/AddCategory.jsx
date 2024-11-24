import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCategoryAPI, deleteCategoryAPI, getAVideo, getCategoryAPI, getVideoAPI, updateCategoryAPI } from '../../../services/allAPI';
import Swal from 'sweetalert2'
import { AiTwotoneDelete } from "react-icons/ai";


function AddCategory() {




const [categoryName,setCategoryName]=useState("")
const [categoryDetails,setCategoryDetails]=useState([])


const handleGetCategory=async()=>{

  try{
     
        const result=await getCategoryAPI()
        console.log(result);
        if(result.status>=200 && result.status<=400){
        setCategoryDetails(result.data)
      
      }
      else{
        console.log(result.message);
        
      }
  }
  catch(error){
    console.log(error);
    
  }

}
console.log(categoryDetails);//[]



useEffect(()=>{
  handleGetCategory()
},[])



  const handleDeleteCategory=async(id)=>{
    const result=await deleteCategoryAPI(id)
    console.log(result);
    handleGetCategory()
  }



const handleAddCategory=async()=>{
console.log(categoryName);
if(categoryName){
    try{
        const body={
          categoryName,
          allVideos:[]
        }

        const result=await addCategoryAPI(body)
        console.log(result);
        if(result.status>=200 && result.status<300){
        
          Swal.fire({
            title: "Success",
            text: "Video added successfully",
            icon: "success"
          });
            
       setCategoryName("")
        handleClose()
        }
        else{
          Swal.fire({
            title: "error",
            text: "Error Occured",
            icon: "error"
          });
            
        }
        
    }
    catch(error){
      console.log(error);
      
    }
}else{
  Swal.fire({
    title: "error",
    text: "Please fill the form",
    icon: "error"
  });
}
}


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  
  
const videoOver=(e)=>{
  console.log(e);
  console.log("Video Over");
  e.preventDefault()
}


const videoDrop=async(e,cId)=>{
    console.log(e);
    console.log("Video dropped at categoryID",+cId);
    let vId=e.dataTransfer.getData("videoId")
    console.log("videoId:"+vId);
  //Get video details of a particular id
    const {data}=await getAVideo(vId)
    console.log(data);
    //get a particular category
    const selectedCategory=categoryDetails.find((a)=>a.id==cId)
    console.log(selectedCategory);
    //Add video details into that array
    selectedCategory.allVideos.push(data)

    const result=await updateCategoryAPI(cId,selectedCategory)
    console.log(result);
    handleGetCategory()
    
}




  
  return (
    <div className='pe-4'>
      <button className='btn btn-dark container rounded shadow mt-4 text-center' onClick={handleShow}>Add category</button>
<div className=" row mt-3 ">
  {
    categoryDetails.length>0? categoryDetails.map((item)=>(
    <div>


        <div style={{backgroundColor:"black", border:"1px solid white", width:"260px"}} onDragOver={e=>videoOver(e)} onDrop={e=>videoDrop(e,item.id)} className=" col-12 col-md-6 justify-content-between rounded shadow ps-3 pt-4 pb-4 mt-3">
          <p className='fs-4'>{item.categoryName}   <p style={{marginTop:"-30px"}}><AiTwotoneDelete onClick={()=>handleDeleteCategory(item.id)} className='me-4 ' style={{float:"right"}} /></p></p>
        
        
        <div className="row pt-3" >
          { 
            item.allVideos.map(a=>(
              <p className=''>* {a.caption}</p>
            ))
          }
        </div>
        </div>
    </div>
    )):"No categories"
  }
</div>


      <Modal show={show} onHide={handleClose} style={{fontFamily:'poppins,serif'}}>  
        <Modal.Header closeButton style={{backgroundColor:'#222831', color:'white'}}>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <center><Modal.Body style={{backgroundColor:'#222831', color:'white'}}>Please fill the following details</Modal.Body></center>
        <Modal.Body style={{backgroundColor:'#222831'}}>
          <input onChange={e=>setCategoryName(e.target.value)}  type="text" className='form-control rounded shadow mb-3' placeholder='Category Name'/>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor:'#222831'}}>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>


  



    </div>
  )
}

export default AddCategory