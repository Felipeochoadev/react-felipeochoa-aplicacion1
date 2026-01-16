import React from 'react';
import './SearchBarInicio1.css';

const SearchBarInicio1 = () => {
    return (
        <div id="SearchBarInicio1" className="SearchBarInicio1_contenedor">
            <span className="material-symbols-outlined SearchBarInicio1_icono">search</span>
            <input
                type="text"
                className="SearchBarInicio1_input"
                placeholder="Search casinos or machines..."
            />
        </div>
    );
};

export default SearchBarInicio1;
