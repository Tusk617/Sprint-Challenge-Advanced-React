import React from "react";

export function PlayerCards(props) {
    return (
        <div>
        <h2>{props.item.name}</h2>
        <h3>{props.item.country}</h3>
        </div>
    )
}

// export default PlayerCards;