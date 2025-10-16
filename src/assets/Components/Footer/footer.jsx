import React from "react";
import './footer.css'
import america from '../../Components/Images/USA Flag.png.jpg'
import UK from '../../Components/Images/UK Flag.png.jpg'
import Canada from '../../Components/Images/Canada Flag.png.jpg'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="m">

          <h1 >Feel Free To <span>Contact</span> Us By Submitting<br />
            <span>Form Or Contact Live Support</span></h1>
        </div>




        <div className="info-box">
          <br />
          <br />
          <div className="name">
            <form>
              <label htmlFor="name">Name:</label><br /><br />
              <input className="n-n" id="name " type="text" placeholder="your name" /><br /><br />
            </form>
          </div>

          <div className="name">
            <form>
              <label htmlFor="name">Surname:</label><br /><br />
              <input className="n-n" id="name " type="text" placeholder="your surname" /><br /><br />
            </form>
          </div>

          <div className="name">
            <form>
              <label htmlFor="name">Email:</label><br /><br />
              <input className="n-n" id="name " type="text" placeholder="your email address" /> <br /><br />
            </form>
          </div>

          <div className="name">
            <form>
              <label htmlFor="name">Contact:</label><br /><br />
              <input className="n-n" id="name " type="text" placeholder=" your Contact number" /><br /><br />
            </form>
          </div>
          <br />
          <br />
          <div className="sub">
            <button className="submit">Submit</button>
          </div>

          <div className="map">
            <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13608.53129291646!2d74.2294343866831!3d31.49303273479852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391902686a66d6a1%3A0xd126df77dd9ca0d!2sThokar%20Niaz%20Baig%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1758852819186!5m2!1sen!2s"
             width="600" height="450" style={{border:0 }}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>




        </div>
        <br />
        <br />


        <div className="ak"><br /><br />


          <div className="foot1">
            <div>
              <h2 className="com">Company</h2><br />
              <ul>
                <li><a className="herf" href="https://the-digital-impacts.netlify.app/">About Us</a></li><br /><br />
                <li><a className="herf" href="https://the-digital-impacts.netlify.app/">Why Choose Us</a></li><br /><br />
                <li><a className="herf" href="https://the-digital-impacts.netlify.app/">Team</a></li><br /><br />
                <li><a className="herf" href="https://the-digital-impacts.netlify.app/">Pricing & Plan</a></li><br /><br />
                <li><a className="herf" href="https://the-digital-impacts.netlify.app/">Contact us</a></li><br /><br />
                <li><a className="herf" href="https://the-digital-impacts.netlify.app/">Investers</a></li><br />
              </ul>
            </div>

            <div>
              <h2 className="com">Services</h2><br />
              <ul>
                <li><a className="herf" href="https://the-digital-impacts.netlify.app/">Web Design & Development</a></li><br /><br />
                <li><a className="herf" href="https://the-digital-impacts.netlify.app/">Why Choose Us</a></li><br /><br />
                <li><a className="herf" href="https://the-digital-impacts.netlify.app/">Specialized SEO Services</a></li><br /><br />
                <li><a className="herf" href="https://the-digital-impacts.netlify.app/">Specialized Social Services</a></li><br /><br />
                <li><a className="herf" href="https://the-digital-impacts.netlify.app/">Specialized Graphic Services</a></li><br /><br />
                <li><a className="herf" href="https://the-digital-impacts.netlify.app/">Investors</a></li>
              </ul>
            </div>

            <div>
              <h2 className="com">RESOURCES</h2><br />

              <ul>
                <li><a className="herf" href="https://the-digital-impacts.netlify.app/">Portfolio</a></li><br /><br />
                <li><a className="herf" href="https://the-digital-impacts.netlify.app/">Term of services</a></li><br /><br />
                <li><a className="herf" href="https://the-digital-impacts.netlify.app/">Help & FAQ</a></li><br /><br />
                <li><a className="herf" href="https://the-digital-impacts.netlify.app/">Contact Us</a></li><br /><br />
                <li><a className="herf" href="https://the-digital-impacts.netlify.app/">Site Map</a></li><br /><br />

              </ul>
              <button className="follow-button">Follow Us</button>
              <div className="face">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-whatsapp"></i>
                <i class="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>


          <div className="flags">
            <div >
              <img className="amer" src={america} alt="" />
              <h2 className="uk">USA:</h2>
              <h4 className="uk">1st Avenue, SW, Hickory,NC, USA<br />

                Email: info@thedigitalimpacts.com</h4>
            </div>

            <div >
              <img className="amer" src={UK} alt="" />
              <h2 className="uk">UK:</h2>
              <h4 className="uk">Oldham Greater Manchester, United Kingdom  <br />

                Email: info@thedigitalimpacts.com</h4>
            </div>

            <div >
              <img className="amer" src={Canada} alt="" />
              <h2 className="uk">Canada:</h2>
              <h4 className="uk">92 Avenue, Surrey, BC, Canada<br />

                Email: info@thedigitalimpacts.com</h4>
            </div>
          </div>
          <hr className="hr0"></hr>

          <br />
          <br />

          <p className="last">Copyright © 2022 The Digital Impacts. All rights reserve</p>

          <br />
          <br />

        </div>
      </footer>
    </>
  );
};

export default Footer;
