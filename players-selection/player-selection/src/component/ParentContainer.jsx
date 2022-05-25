import React from 'react';
import PlayerContainer from './PlayerContainer';
import PlayerDetail from './PlayerDetail';
import TeamContainer from './TeamContainer';

const ParentContainer = () => {
    return (
        <div>
            <h4> Player selection </h4>

            <div className="container" >

                <PlayerContainer/>
                <TeamContainer/>

            </div>

            <PlayerDetail/>

        </div>
    );
}

export default ParentContainer;
