import React from 'react';
import './Contact.css'
import logo from '../../images/Group 86.png'
import facebook from '../../images/facebook-logo-in-circular-shape@2x.png'
import db from '../../images/dribbble (1)@2x.png'
import lin from '../../images/linkedin (2)@2x.png'
import tweet from '../../images/twitter (4)@2x.png'

const Contact = () => {
    return (
        <div className="contact-main">
        <div className="container">
            <h1 className="text-center styledFont">Get your design right, right now</h1>
            <p className="text-secondary text-center">Be the first know our latest offers and updates!
        </p>
            <div className="d-flex justify-content-center" >
            <div class="d-flex justify-content-between mb-3 col-md-8 p-1 " style={{boxShadow: ' 0px 0px 10px 0px rgb(149, 168, 182)'}}>
                <input type="text" class="form-control" placeholder="Enter Your Email Address" style={{border:"none"}}/>
                   <button class="input-group-text contact-btn" >Get Started</button>
            </div>
            </div>
            <div class="row mt-5">
                <div class="col-md-7">
                    <div class="row pb-5">
                        <div className="col-md-12 contact-logo">
                            <img src={logo} className="w-25 p-3" alt=""></img>
                        </div>
                        <div className="col-md-12 contact-logo">
                            <div className="d-flex">
                            <img src={facebook}  className="p-1" alt=""></img>
                            <img src={tweet}  className="p-1" alt=""></img>
                            <img src={lin}  className="p-1" alt=""></img>
                            <img src={db}  className="p-1" alt=""></img>
                            {/* <img src={logo} alt=""></img> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row">
                        <div class="col-md-4 mb-4">
                            <p className="contact-text">Features</p>
                            <p className="contact-text">Enterprise</p>
                            <p className="contact-text">Pricing</p>
                        </div>
                        <div class="col-md-4 mb-4">
                            <p className="contact-text">Blog</p>
                            <p className="contact-text">Help Center</p>
                            <p className="contact-text">Contact Us</p>
                            <p className="contact-text"> Status</p>
                        </div>
                        <div class="col-md-4 mb-4">
                            <p className="contact-text">About Us</p>
                            <p className="contact-text">Terms of Service</p>
                            <p className="contact-text">Security</p>
                            <p className="contact-text">Login</p>
                        </div>
                    </div>
                </div>

            </div>
            </div>
            
            </div>
    );
};

export default Contact;