import React from 'react';
import './DedicatedTeamCard.css'
const DedicatedTeamCard = (props) => {
    const {key,price,type,features} = props.team;
    return (
        <div className="m-3 team-card">
            <div className="card pl-5 pr-5">
                <div className="card-body text-center">
                    <h2 className="card-title font-weight-bolder">${price}</h2>
                    <p className="card-text text-secondary">{type}</p>
                    <hr class="hide-line"/>
                    <div className="card-text">
                        {
                            features.map(feature =><p>{feature}</p>)
                        }
                    </div>
                    <div className='d-flex justify-content-center'>
                         <button className="hidden-button">Order Now</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default DedicatedTeamCard;