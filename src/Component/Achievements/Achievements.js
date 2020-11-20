import React from 'react';
import img1 from '../../images/happy@2x.png'
import img2 from '../../images/marketing@2x.png'
import img3 from '../../images/surface1@2x.png'
import img4 from '../../images/transportation@2x.png'
import './Acheivements.css'

const Achievements = () => {
    return (
        <div className="main-acheivements">
        <div className="container ">
            <div className="row">
                <div className="col-md-5 p-5 styledFont">
                    <h1>Our Achievements</h1>
                    <small className="text-secondary">It is a long established fact that a reader will be distracted by
                    the readable content of a page when looking at its layout. The
                    point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</small>
                </div>
                <div className="col-md-7">
                    <div class="row row-cols-1 row-cols-md-2">
                        <div class="col-md-6 mb-4">
                            <div class="row achievementStyleOne">
                                <div class="col-md-3 p-1 d-flex align-items-center">
                                    <img src={img1} class="box-image" alt="..." />
                                </div>
                                <div class="col-md-8 p-3 d-flex justify-content-center">
                                    <div>
                                        <h2 class="font-weight-bolder">700+</h2>
                                        <p>Happy Client</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-6 mb-4">
                            <div class="row achievementStyleTwo">
                                <div class="col-md-3 p-1 d-flex align-items-center">
                                    <img src={img2} class="ml-3 box-image" alt="..." />
                                </div>
                                <div class="col-md-8 p-3 d-flex justify-content-center">
                                    <div>
                                        <h2 class="font-weight-bolder">140+</h2>
                                        <p>Projects Completed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-4">
                            <div class="row achievementStyleTwo">
                                <div class="col-md-3 p-1 d-flex align-items-center">
                                    <img src={img3} class="ml-3 box-image" alt="..." />
                                </div>
                                <div class="col-md-8 p-3 d-flex justify-content-center">
                                    <div>
                                        <h2 class="font-weight-bolder">25+</h2>
                                        <p>Crazy Minds</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-4">
                            <div class="row achievementStyleOne">
                                <div class="col-md-3 p-1 d-flex align-items-center">
                                    <img src={img4} class="ml-3  box-image" alt="..." />
                                </div>
                                <div class="col-md-8 p-3 d-flex justify-content-center">
                                    <div>
                                        <h2 class="font-weight-bolder">75+</h2>
                                        <p>Running Projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Achievements;