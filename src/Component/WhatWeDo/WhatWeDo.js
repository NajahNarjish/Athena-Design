import React from 'react';
import "./WhatWeDo.css";
import experience from "../../images/Group 65@2x.png";
import inter from "../../images/Group 66@2x.png";
import prototyping from "../../images/Group 69@2x.png";
import illustration from "../../images/Group 72@2x.png";



const WhatWeDo = () => {
    return (
        <section className = "whatWeDo">
            <div className ="container text-center">
                <p className ="main_heading pt-5">What We Do</p>
                <p className ="main_description">Our main focus is to make the User Experience very<br></br> 
                simple and easy. Simplicity is our Strength.</p>
                <div className="row py-5">
                    <div className="col-md-3 col-12">
                        <div className='whatWeDoCard'>
                            <img className ="img-fluid  pt-5 pb-3" src={experience} alt="experience"></img>
                            <p className ="card_heading">Experience Design</p>
                            <p className ="card_description"> The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                        </div>
                    </div>

                    <div className="col-md-3 col-12">
                        <div className='whatWeDoCard'>
                            <img className ="img-fluid  pt-5 pb-3" src={inter} alt="experience"></img>
                            <p className ="card_heading">Interface Design</p>
                            <p className ="card_description"> The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                        </div>
                    </div>

                    <div className="col-md-3 col-12">
                        <div className='whatWeDoCard'>
                            <img className ="img-fluid pt-5 pb-3" src={prototyping} alt="experience"></img>
                            <p className ="card_heading">Prototyping</p>
                            <p className ="card_description"> The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                        </div>
                    </div>

                    <div className="col-md-3 col-12">
                        <div className='whatWeDoCard'>
                            <img className ="img-fluid pt-5 pb-3" src={illustration} alt="experience"></img>
                            <p className ="card_heading">Illustration</p>
                            <p className ="card_description"> The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                        </div>
                    </div>
                </div>
            </div>   
        </section>
    );
};

export default WhatWeDo;