
import React from 'react';
import './Country.css'


const Country = (props) => {
    // console.log(props.country);
    const { area, population, region, name, flags } = props.country;

    return (
        <div className='country bg-info
        '>
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <p>Region: {region}</p>

        </div>
    );
};

export default Country;