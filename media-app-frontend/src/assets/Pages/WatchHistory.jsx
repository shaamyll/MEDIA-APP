import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { AiTwotoneDelete } from "react-icons/ai";
import {deleteWatchHistoryAPI, getWatchHstoryAPI } from '../../../services/allAPI';
import '../Pages/WatchHistory.css'

function WatchHistory() {

  const [watchDetails,setWatchDetails]=useState([])

  const getWatchHstory=async()=>{
    try{
      const result=await getWatchHstoryAPI()
      console.log(result);
      setWatchDetails(result.data)
    }
    catch(error){
      console.log(error);
      
    }
  }
console.log(watchDetails);



  useEffect(()=>{
    getWatchHstory()
  },[])


  const handleDelete=async(id)=>{
    try{
      const result=await deleteWatchHistoryAPI(id)
      console.log(result);
      getWatchHstory()
      
    }
    catch(error){
      console.log(error);
      
    }
  }


  return (
    <div className='row container-fluid mt-5' style={{fontFamily: "Poppins, serif"}}>
    
   <center> <h4 >Watch History</h4></center>
   <Link to={'/Home'} className='mb-4 fs-5'  style={{float:"right", color:"black"}}>Back to home</Link>



    <div className='col-12 col-md-6 table-responsive container-fluid' style={{ width:"1200px"}} >
    <Table  striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Sl.no</th>
          <th>ID</th>
          <th>Caption</th>
          <th>Url</th>
          <th>Timestamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        
       {
        watchDetails.length>0? watchDetails.map((item,index)=>(
          <tr>
          <td>${index+1}</td>
          <td>${item.id}</td>
          <td>${item.caption}</td>
          <td>${item.link}</td>
          <td>${item.timestamp}</td>
          <td><center><AiTwotoneDelete onClick={handleDelete} className='fs-5'/></center></td>
        </tr>
        )):"No data"
       
       }
       
      </tbody>
    </Table>
    </div>


    
    </div>
  )
}

export default WatchHistory