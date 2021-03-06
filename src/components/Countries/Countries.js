
import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';



const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div >
            <h4>Countries in other File Detail.</h4>
            <h5>Total countries: {countries.length}</h5>
            {/* {
                countries.map(country => console.log(country))
            } */}
            <div className='country-container'>
                {
                    countries.map(country =>
                        <Country
                            country={country}
                            key={country.cca3}
                        >

                        </Country>)
                }
            </div>


        </div>
    );
};

// function Country(props) {
//     console.log(props)
//     return (
//         <div>
//             <h3>{props.name}</h3>
//         </div>
//     )
// }

export default Countries;