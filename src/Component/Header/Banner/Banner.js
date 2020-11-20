import React from 'react';
import banner from '../../../images/16 [Converted]@2x.png'
import './Banner.css'
const Banner = () => {
    return (
        <div className="container banner py-5">
                <div className="row d-flex align-items-center" >
                    <div className="col-md-6 ">
                        <h1 className="pb-3">Florence <br/> agency</h1>
                        <small className="text-secondary"> Lorem Ipsum has been the industry's standerd dummy text ever sence the 1500's when an unknown printer took a galley of type and scrambled it to make a type specimen book. </small> <br/>
                        <button className="btn-curved mt-3">See Pricing</button>                    
                    </div>
                    <div className="col-md-6 mt-5 mt-md-0">
                        <img className="img-fluid" src={banner} alt=""/>
                    </div>
                </div>
            </div>
    );
};

export default Banner;