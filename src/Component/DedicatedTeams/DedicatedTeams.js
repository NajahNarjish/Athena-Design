import React, { useState } from 'react';
import DedicatedTeamCard from '../DedicatedTeamCard/DedicatedTeamCard';
import fakeData from '../fakeData/teams';
import './DedicatedTeam.css'

const DedicatedTeams = () => {
    const styleFont = {
        fontFamily: '"Yeseva One", sans-serif'
    }
    const fakethreeData = fakeData.slice(0, 10);
    const [teams] = useState(fakethreeData)
    return (
        <div className="teamContainer">
        <div className="container pt-5 pb-5 ">
            <h1 className="text-center mb-5" style={styleFont}>Choose Your Dedicated Team</h1>
            <div className="d-flex justify-content-center">
                <div className="card-deck">
                    {
                        teams.map(team => <DedicatedTeamCard team={team} key={team.key}></DedicatedTeamCard>)
                    }
                </div>
            </div>
        </div>
        </div>
    );
};

export default DedicatedTeams;