import React from "react";
import { useForm } from "../Hooks/useForm";
import "./PlayerSearch.css"

export function PlayerSearch(props) {


    const [form, handleChange] = useForm();

    const submitHandler = (event) => {
        event.preventDefault();
        props.handleSearch(form)
    }
    return(
        <form onSubmit={submitHandler}>
            <label id="search" htmlFor="search">
                Search for player
            <input 
                name="search"
                onChange={handleChange}
                value={form.search}
                placeholder="Player Search"
                className="searchField"
            />
            </label>
            <input type="submit" placeholder="submitButton" className="submitButton"/>
        </form>
    )
}

export default PlayerSearch;