import React from "react";
import HogTile from "./HogTile";

function HogContainer({hogData}) {
    let hogTile = hogData.map((hog) => {
        return(
            <HogTile
                key={hog.name}
                name={hog.name}
                specialty={hog.specialty}
                greased={hog.greased}
                weight={hog.weight}
                medal={hog["highest medal achieved"]}
                image={hog.image}
            />
        )
    })
    return(
        <div className="ui three stackable cards">
            {hogTile}
        </div>
    )
}

export default HogContainer;