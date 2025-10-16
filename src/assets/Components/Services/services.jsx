import React from "react";
import './services.css'
import ser1 from '../../Components/Images/ser-img1.png'
import ser2 from '../../Components/Images/ser-img2.png'
import ser3 from '../../Components/Images/ser-img3.png'
import ser4 from '../../Components/Images/ser-img4.png'
import ser5 from '../../Components/Images/ser-img5.png'

import estate1 from '../../Components/Images/Estate.png.jpg'
import estate2 from '../../Components/Images/Education.png.jpg'
import estate3 from '../../Components/Images/Commerce.png.jpg'
import estate4 from '../../Components/Images/Hospitality.png.jpg'
import estate5 from '../../Components/Images/Health-Care.png.jpg'
import estate6 from '../../Components/Images/Fintech.png.jpg'




const Services = () => {
    return (

        <>

            <h1 className="h">We <span> Provide </span> the best</h1>
            <h1 className="h">Services With <span> Our</span></h1>
            <h1 className="h"><span> Developers</span></h1>




            <div className="a123">

                <div className="a1"><h1 className="head1">Digital Marketing</h1>
                    <img style={{ display: 'flex', justifyContent: 'center' }} src={ser1} alt="" />
                    <p className="para00">The Digital Impact have<br />
                        compiled a list of the best<br />
                        digital marketing companies in <br />
                        the world.</p>
                </div>


                <div className="a2"><h1 className="head1">Web Development</h1>
                    <img className="img-ser" src={ser2} alt="" />
                    <p className="para00">Web design services comprise<br />
                        the process of user interface <br />
                        (UI) and user experience (UX) <br />
                        design of any web-based <br />
                        solution.</p>
                </div>


                <div className="a3"><h1 className="head1">Graphic Design</h1>
                    <img src={ser3} alt="" />
                    <p className="para00">Create visual concepts to<br />
                        communicate ideas that<br />
                        inspire and captivate<br />
                        consumers, creative thinking,<br />
                        an aptitude towards art and<br />
                        design</p>
                </div>

            </div>
            <br />
            <br />
            <div className="a45">
                <div className="a4"><h1 className="head1">SEO Services</h1>
                    <img src={ser4} alt="" />
                    <p className="para00">That content can include blog<br />
                        posts, video or podcast scripts,<br />
                        ebooks or whitepapers, press<br />
                        releases, product category <br />
                        descriptions, landing page or <br />
                        social media</p>
                </div>


                <div className="a5"><h1 className="head1">Content Writing</h1>
                    <img src={ser5} alt="" />
                    <p className="para00">Help search engines find,<br />
                        crawl, and index your content <br />
                        efficiently. The website can<br />
                        become easily findable, more<br />
                        relevant and popular towards<br />
                        user search queries.</p>

                </div>

            </div>

            <div>
                <h1 className="h1p">Industries We</h1><h1 className="h1p"><span>Work With</span></h1>
                <p className="h1pa">We work as a technology partner for various industries<br />
                    Our expertise can be applied to the specific demands<br />
                    and nuances in your industry</p>

            </div>

            <div className="estate1">
                <img style={{ width: '240px', height: '240px' }} src={estate1} alt="" />
                <img style={{ width: '240px', height: '240px' }} src={estate2} alt="" />
                <img style={{ width: '240px', height: '240px' }} src={estate3} alt="" />
            </div>
            <div className="real">
                <h5>REAL ESTATE</h5>
                <h5>EDUCATION</h5>
                <h5>COMMERENCE</h5>


            </div>
            <div className="estate2">
                <img style={{ width: '240px', height: '240px' }} src={estate4} alt="" />
                <img style={{ width: '240px', height: '240px' }} src={estate5} alt="" />
                <img style={{ width: '240px', height: '240px' }} src={estate6} alt="" />
            </div>
            <div className="real2">
                <h4>HOSPITALITY</h4>
                <h4>HEALTHCARE</h4>
                <h4>FINTECH</h4>
            </div>
        </>
    )
}

export default Services;
