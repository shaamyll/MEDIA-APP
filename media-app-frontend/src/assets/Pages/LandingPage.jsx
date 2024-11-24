import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';
import Home from './Home';
import { Link } from 'react-router-dom';
import '../Pages/LandingPage.jsx'

function LandingPage() {


  return (
    <>
      {/* Main section */}
      <div id='first'
        className="d-flex justify-content-center align-items-center"
        style={{
          paddingTop:"100px",
          fontFamily: "Poppins, serif",
          color: "white",
          backgroundColor: "#222831",
        }}
      >


        <div
          className=" main d-flex flex-wrap rounded shadow"
          style={{
            backgroundColor:"black",
            width: "90%",
            maxWidth: "800px",
            backgroundImage: "url('https://i.gifer.com/origin/78/78270fde30bdca8fec52f86bfa7cab0c_w200.gif')",
            backgroundSize: "cover",
            padding: "20px",
          }}>



<div className="child col-12 col-md-6 p-3 text-center">
            <img
              className="w-75 img-fluid rounded shadow"
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/317b3233-97e7-4abe-b365-6d02b5862313/d277ol1-84f41fa1-3deb-4297-957d-5457456b32bb.png"
              alt="Media App"
              style={{ marginTop: "50px" }}
            />
          </div>


          <div className="child col-12 col-md-6 p-5 text-center text-md-start" >
            <h4>Welcome to Playbuzz</h4>
            <p style={{ fontSize: "medium" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolorem neque perferendis, nesciunt consectetur voluptas mollitia, magnam corrupti, ea animi repellat exercitationem? Nesciunt quam deserunt doloribus iste, quisquam harum impedit?
            </p>
            <Link to={'/Home'}><button className="btn btn-white rounded shadow mt-3 btn-lg" style={{ color: "black", fontWeight: "bold" }}>
              Get started
            </button></Link>
          </div>



          
        </div>
      </div>

      {/* Features section */}
      <div id='features' style={{ backgroundColor: "#222831" }}>
        <center>
          <h3 className="" style={{ fontFamily: "Poppins, serif", color: "white", paddingTop:"150px"}}>
            Features
          </h3>
        </center>
        <div className="container" >
          <div className="row g-4" >
          <div className="col-12 col-lg-4">
              <MDBCard className=" shadow">
                <MDBCardImage
                  src="https://i.pinimg.com/originals/bc/57/43/bc5743245f004c7ea45cd8a71991c661.gif"
                  position="top"
                  alt="Audio Quality"
                  className="img-fluid"
                  height={"300px"}
                />
                <center>
                  <MDBCardBody style={{ backgroundColor: "black", color: "white" }} >
                    <MDBCardTitle>Audio Quality</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                  </MDBCardBody>
                </center>
              </MDBCard>
            </div>


            <div className="col-12 col-md-6 col-lg-4">
              <MDBCard className=" shadow">
                <MDBCardImage
                  src="https://i.pinimg.com/originals/a8/d7/44/a8d7442365d1c506e65e55471b7970a1.gif"
                  position="top"
                  alt="Bass Boost"
                  className="img-fluid"
                  height={"0px"}
                />
                <center>
                  <MDBCardBody style={{ backgroundColor: "black", color: "white" }} >
                    <MDBCardTitle>Bass Boost</MDBCardTitle>
                    <MDBCardText>
                      Bass refers to the lower range of sound frequencies in music, typically ranging from about 20 Hz to 250 Hz.
                    </MDBCardText>
                  </MDBCardBody>
                </center>
              </MDBCard>
            </div>


            <div className="col-12 col-lg-4">
              <MDBCard className=" shadow">
                <MDBCardImage
                  src="https://i.pinimg.com/originals/bc/57/43/bc5743245f004c7ea45cd8a71991c661.gif"
                  position="top"
                  alt="Audio Quality"
                  className="img-fluid"
                  height={"300px"}
                />
                <center>
                  <MDBCardBody style={{ backgroundColor: "black", color: "white" }} >
                    <MDBCardTitle>Audio Quality</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                  </MDBCardBody>
                </center>
              </MDBCard>
            </div>
          </div>
        </div>
      </div>

      


      <div style={{fontFamily:"poppins, serif", backgroundColor:"#222831", paddingBottom:"200px", paddingTop:"200px"}}>
  <center>
  <div className="row main rounded shadow  w-75 d-flex flx wrap" style={{backgroundColor:"black",  color:"white"}}>
    <div className="col-12 col-md-6 p-5">
      <h5 style={{fontWeight:"bolder"}} className=''>SIMPLE FAST & POWERFULL</h5>
      <p><span style={{fontWeight:"bolder"}}>Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis animi distinctio, voluptatum molestias atque libero quos dignissimos</p>
      <p><span style={{fontWeight:"bolder"}}>Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis animi distinctio, voluptatum molestias atque libero quos</p>
      <p><span style={{fontWeight:"bolder"}}>Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis animi distinctio, voluptatum molestias atque libero quos dignissimos </p>
    </div>
    <div className="col-12 col-md-6 pb-3 pt-4 p-5" >
    <iframe className='rounded shadow mt-2 me-4' width="100%" height="368" src="https://www.youtube.com/embed/hOHKltAiKXQ" title="Hanumankind – Big Dawgs | Ft. Kalmi (Official Music Video) | Def Jam India" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
  </center>
</div>
    </>
  );
}

export default LandingPage;
