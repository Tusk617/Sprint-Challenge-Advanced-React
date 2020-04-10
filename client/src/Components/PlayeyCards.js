import React from "react";

export function PlayerCards(props) {
    return (
        <div>
        <label> Player:
            <h2 data-testid = "nameRender">{props.item.name}</h2>
        </label>
        <h3>{props.item.country}</h3>
        </div>
    )
}

export default PlayerCards;