import React, {useState} from "react";

function HogTile({name,specialty,greased,weight,medal,image}){
    const [showDetail, setShowDetail] = useState(false) 

    function show(){
        if(showDetail === true){
            return (
                <div>
                    <h5>{specialty}</h5>
                    <h5>{greased ? "is greased" : "not greased"}</h5>
                    <h5>{weight}</h5>
                    <h5>{medal}</h5>
                </div>
            )
        }
    }

    return(
        <div className="ui card eight wide column pigTile">
            <h3>{name}</h3>
            <img onClick={() => setShowDetail((showDetail) => !showDetail)} src={image} alt={name}/>
            {show()}
        </div>
    )
}

export default HogTile;