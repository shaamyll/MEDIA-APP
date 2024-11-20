import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { BiSolidUserCircle } from "react-icons/bi";


function Header() {
  return (
  
    <>
    <MDBNavbar light style={{fontFamily:"poppins, serif", fontWeight:"500", backgroundImage:"url('https://wisynco.com/wp-content/uploads/2014/12/footer-background-011.jpg')", color:"white"}}>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>
       <img src="../logo.png" alt="" width={'28px'} height={'25px'} className='mb-2'/>
         <h4 style={{color:"white"}}> Playbuzz</h4>
        </MDBNavbarBrand>
        <BiSolidUserCircle className='me-2' style={{fontSize:"35", color:"white"}}/>
      </MDBContainer>
    </MDBNavbar>
  </>

  );
}

export default Header