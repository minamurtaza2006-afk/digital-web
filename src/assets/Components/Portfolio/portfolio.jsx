import React from "react";
import './portfolio.css'

import port1 from '../../Components/Images/port-img2.png'
import port2 from '../../Components/Images/portfolio-img1.png'
import port3 from '../../Components/Images/port-img3.png'
import port4 from '../../Components/Images/port-img6.png'

const Portfolio = () => {
    return (
        <>
            <div>
                <h1 className="folio">Projects We've Deliverd</h1>
                <p className="ff">Over the past 10 years, we have designed and built a wide range of high-quality products from scratch. Our team has finished<br />
                    various web and mobile apps related to various spheres including e-learning, healthcare, e-commerce, advertising, augmented <br />
                    reality, action sports, finance and sharing economy.</p>
            </div>



            <div className="lap1">
                <div>
                    <span>INDUSTRY</span>
                    <span><h1>REVIVE</h1></span>
                    <span><p>Revive Beauty Salon & Institute</p></span>
                    <span><div className="qua"><p><i class="fa-regular fa-address-card"></i>            WEB DEVELOPMENT</p></div></span>
                    <span><div className="qua1"><p><i class="fa-regular fa-address-card"></i>          QUALITY ASSURANCE</p></div></span>
                     <div className="i">
                     <div><i className="icon1" class="fa-brands fa-react"></i></div>
                      <div><i class="fa-brands fa-aws"></i></div>
                      </div>
                </div>
                <div>
                    <img className="port1" src={port1} alt="" />
                </div>

               
            </div>
<br/>
<br/>
            <div className="lap1">
                <div>
                    <img className="port1" src={port2} alt="" />
                </div>
                <div>
                    <span>INDUSTRY</span>
                    <span><h1>REVIVE</h1></span>
                    <span><p>Revive Beauty Salon & Institute</p></span>
                    <span><div className="qua"><p><i class="fa-regular fa-address-card"></i>            WEB DEVELOPMENT</p></div></span>
                    <span><div className="qua1"><p><i class="fa-regular fa-address-card"></i>          QUALITY ASSURANCE</p></div></span>
               <div className="i">
                     <div><i className="icon1" class="fa-brands fa-react"></i></div>
                      <div><i class="fa-brands fa-aws"></i></div>
                      </div>
               
                </div>

            </div>
<br/>
<br/>
            <div className="lap1">

                <div>
                    <span>INDUSTRY</span>
                    <span><h1>REVIVE</h1></span>
                    <span><p>Revive Beauty Salon & Institute</p></span>
                    <span><div className="qua"><p><i class="fa-regular fa-address-card"></i>            WEB DEVELOPMENT</p></div></span>
                    <span><div className="qua1"><p><i class="fa-regular fa-address-card"></i>          QUALITY ASSURANCE</p></div></span>
               <div className="i">
                     <div><i className="icon1" class="fa-brands fa-react"></i></div>
                      <div><i class="fa-brands fa-aws"></i></div>
                      </div>
               
                </div>
                  <div>
                    <img className="port1" src={port3} alt="" />
                </div>
               
            </div>
<br/>
<br/>
            <div className="lap1">
                <div>
                    <img className="port1" src={port4} alt="" />
                </div>
                <div>
                    <span>INDUSTRY</span>
                    <span><h1>REVIVE</h1></span>
                    <span><p>Revive Beauty Salon & Institute</p></span>
                    <span><div className="qua"><p><i class="fa-regular fa-address-card"></i>            WEB DEVELOPMENT</p></div></span>
                 
                    <span><div className="qua1"><p><i class="fa-regular fa-address-card"></i>          QUALITY ASSURANCE</p></div></span>
               <div className="i">
                     <div><i className="icon1" class="fa-brands fa-react"></i></div>
                      <div><i class="fa-brands fa-aws"></i></div>
                      </div>
                </div>
               
            </div>



        </>
    );
};

export default Portfolio;


