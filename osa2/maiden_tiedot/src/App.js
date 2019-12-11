import React, { useState, useEffect } from 'react'
//import axiosService from './services/axiosService'
import axios from 'axios'


const ShowCountries = ({countriesToShow, setCountriesToShow}) => {
  if (countriesToShow.length > 10) {
    return <div>Too many matches, specify another filter</div>

  } else if (countriesToShow.length > 1) {
    return <ShowNameOfCountries countriesToShow={countriesToShow} setCountriesToShow={setCountriesToShow} />

  } else if (countriesToShow.length === 0) {
    return <div>no countries to show, check filter</div>
  }

  return (
    <ShowCountryInfo country={countriesToShow[0]} />
  )
}

const CountryName = ({country, setCountriesToShow}) => {
  return <li>{country.name} <button onClick={() => handleCountryClick({country, setCountriesToShow})}>show</button></li>
}

const handleCountryClick = ({country, setCountriesToShow}) => {
      setCountriesToShow([country])
      //console.log('counrty button clicked')
}

const ShowNameOfCountries = ({countriesToShow, setCountriesToShow}) => {
  const rows = () => countriesToShow.map(country =>
    <CountryName 
      key={country.name}
      country={country} 
      setCountriesToShow={setCountriesToShow}
    />
  )
  return <ul>{rows()}</ul>
}

const Language = ({language}) => {
  return <li>{language}</li>
}

const Languages = ({languages}) => {
  return (
    languages.map(language =>
      <Language 
          key={language.name}
          language={language.name}
      />
      )
  )
}


const ShowCountryInfo = ({country}) => {
  

  const name = country['name']
  const capital = country['capital']
  const population = country['population']
  const languages = country['languages']
  const flagUrl = country['flag']

  return (
    <>
    <h1>{name}</h1>
    <div>capital {capital} </div>
    <div>population {population} </div>
    <h2>languages</h2>
    <ul>
      <Languages languages={languages} />
    </ul>
    <img src={flagUrl} alt="Counrty flag" height="100"></img>
    </>
  )
}


const App = () => {
  const [ allCountries, setAllCountries ] = useState([])
  const [ newFilter, setNewFilter ] = useState('')
  const [ countriesToShow, setCountriesToShow ] = useState(allCountries)

  const baseUrl = 'https://restcountries.eu/rest/v2/all'

  useEffect(() => {
    // console.log('effect')
    axios
    .get(baseUrl)
    .then(response => {
      // console.log('promise fulfilled')
      setAllCountries(response.data)
    })
  }, [])

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    setCountriesToShow(allCountries.filter(country => country['name'].toLowerCase().includes(event.target.value.toLowerCase())))
  }

  //const countriesToShow = allCountries.filter(country => country['name'].toLowerCase().includes(newFilter.toLowerCase()))

  return (
    <>
    <div>
      find countries  <input 
        value={newFilter} 
        onChange={handleFilterChange}
      />
    </div>
    <div>
      <ShowCountries 
        countriesToShow={countriesToShow} 
        setCountriesToShow={setCountriesToShow}
      />
    </div>
    </>
  )

}

export default App
