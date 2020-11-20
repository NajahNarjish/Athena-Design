import React, { useState } from 'react';
import DedicatedTeamCard from '../DedicatedTeamCard/DedicatedTeamCard';
import fakeData from '../fakeData/teams';

const DedicatedTeams = () => {
    const fakethreeData = fakeData.slice(0, 10);
    const [teams] = useState(fakethreeData)
    return (
        <div className="container">
            <h1 className="text-center">Choose Your Dedicated Team</h1>
            <div className="d-flex justify-content-center">
                <div className="card-deck">
                    {
                        teams.map(team => <DedicatedTeamCard team={team} key={team.key}></DedicatedTeamCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default DedicatedTeams;