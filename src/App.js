import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import Person from './components/Person/Person';


function App() {
  return (
    <div className="App">
      {/* <LoadCountries></LoadCountries> */}
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>

      {/* <Person></Person>   */}


    </div>
  );
}





// function LoadCountries() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       .then(data => setCountries(data))
//   }, [])
//   return (
//     <div>
//       <h3>Visiting Every Countrties of the world!!</h3>
//       <h3>Available Countries: {countries.length}</h3>
//       {
//         countries.map(country => <Country flag={country.flags.svg}></Country>)
//       }

//     </div>
//   )
// }

// function Country(props) {
//   console.log(props)
//   return (
//     <div>
//       {props.flag}
//     </div>
//   )
// }

export default App;
