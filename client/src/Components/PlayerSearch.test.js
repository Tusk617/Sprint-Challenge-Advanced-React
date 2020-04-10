import React from 'react';
import ReactDOM from 'react-dom';
import {render, getByLabelText} from '@testing-library/react';
import PlayerSearch from './PlayerSearch';

test('Input should be visible', () => {
    const {getByLabelText} = render(<PlayerSearch />)

    const PlayerSearchInput = getByLabelText(/search/i)
})