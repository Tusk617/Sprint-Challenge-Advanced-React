import React from "react";
import { useForm } from "../Hooks/useForm";

export function PlayerSearch(props) {


    const [form, handleChange] = useForm();

    const submitHandler = (event) => {
        event.preventDefault();
        props.handleSearch(form)
    }
    return(
        <form onSubmit={submitHandler}>
            <label id="search" htmlFor="search">
                Search here for a player
            <input 
                name="search"
                onChange={handleChange}
                value={form.search}
                placeholder="Player Search"
            />
            </label>
            <input type="submit"/>
        </form>
    )
}