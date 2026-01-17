import React from 'react';
import { IconoSearch } from '../Iconos/IconoSearch';
import './SearchBarInicio1.css';

const SearchBarInicio1 = () => {
    return (
        <div id="SearchBarInicio1" className="SearchBarInicio1_contenedor">
            <IconoSearch className="SearchBarInicio1_icono" />
            <input
                type="text"
                className="SearchBarInicio1_input"
                placeholder="Search casinos or machines..."
            />
        </div>
    );
};

export default SearchBarInicio1;
