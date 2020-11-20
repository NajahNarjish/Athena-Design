import React from 'react';
import stayImage from '../../images/20 [Converted]@2x.png';
import  "./StayRunning.css";
import bg from '../../images/Group 46@2x.png'


const StayRunning = () => {
    return (
        <section className="stayRunning ">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className = "imageDiv">
                            <img className="img-fluid pt-5 mt-3" src={stayImage} alt="" />
                        </div>  
                    </div>
                    <div className="textBtn col-md-6 col-12  align-self-center">
                      <p className="heading">STAY RUNNING &amp; Project</p>
                        <p className="description text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p>
                        <button className="contactBtn mt-3">Contact Us</button>
                    </div>
                </div>
            </div>




        </section>
    );
};

export default StayRunning;