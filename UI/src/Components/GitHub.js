import React from "react";

import PPImage from "../util/PP.png";

function GitHub()
{
    return (
        <div className="github">
            <a href="https://github.com/MeisterSchwarz">
                <img src={PPImage} alt="profile picture" height={200}/>
            </a>
        </div>
    )
}

export default GitHub;