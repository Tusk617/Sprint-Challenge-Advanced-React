import React from 'react';
import ReactDOM from 'react-dom';
import {render, getByLabelText, fireEvent} from '@testing-library/react';
import PlayerSearch from './PlayerSearch';

test('Input should be visible', () => {
    const {getByLabelText} = render(<PlayerSearch />)

    const PlayerSearchInput = getByLabelText(/search/i)
})

test('Input should be able to take text', () => {
    const {getByPlaceholderText} = render(<PlayerSearch />)

    const searchInput = getByPlaceholderText("Player Search");

    fireEvent.change(searchInput, {target: {value: "alex"}});
    console.log(searchInput);
})