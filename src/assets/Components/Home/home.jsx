import React from "react";
import './home.css'
import homeimg from '../../Components/Images/digital-home-img.png'


const Home = () => {
  return (
    <>
      <div className="home-box">

        <div>
          <img className="homeimg1" src={homeimg} alt="Home" />
        </div>
        <div>
          <h1 className="we">We are full Services</h1>
          <h1 className="digital">Digital Marketing Agency</h1>
          <h2 className="wel">Welcome to the Digital Impacts</h2>
          <div><hr className="hr1"></hr></div>
          <p>We partner with our clients with a team of professionals, we are able to provide<br />
            the best on our side. We strive to be leaders in digital marketing services worldwide<br />
            by revolutionizing the industry and setting new standards of professionalism and success.</p>
        </div>



      </div>
      <button className="butt1">Message Us Now</button>


      {/* <div> */}
{/*         
        <h1 className="m">Feel Free To <span>Contact</span> Us By Submitting<br />
          <span>Form Or Contact Live Support</span></h1>
      </div>
<div className="ak47">
<h1>my</h1>
</div> */}








    </>

  )
}

export default Home;
