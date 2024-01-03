import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [findCountries, setFindCountries] = useState('')
  const [countries, setCountries] = useState([])
  const [allCountries, setAllCountries] = useState(null)

  useEffect(() => {
    const url = 'https://studies.cs.helsinki.fi/restcountries/api/all'
    axios
      .get(url)
      .then(response => setAllCountries(response.data))
  }, [])

  const handleFindCountries = event => {
    const searchValue = event.target.value
    setFindCountries(searchValue)
    if (allCountries === null || searchValue === '') {
      setCountries([])
    } else {
      const countriesFiltered = allCountries.filter(countrie =>
        countrie.name.common.toLowerCase().includes(searchValue.toLowerCase())
      )
      console.log('countries filtered', countriesFiltered)
      setCountries(countriesFiltered)
    }

  }

  const countriesCount = countries.length

  return (
    <>
      <label htmlFor="findCountries">find countries</label>
      <input id="findCountries" value={findCountries} onChange={handleFindCountries} />
      {countriesCount === 0
        ? <p>No matches</p>
        : countriesCount > 10
          ? <p>Too many matches, specify another filter</p>
          : countriesCount > 1
            ? <CountriesList countries={countries} setCountries={setCountries} />
            : <CountryDetails countrie={countries[0]} />
      }
    </>
  )
}

const CountriesList = ({ countries, setCountries }) => (
  <ul>
    {countries.map(countrie =>
      <li key={countrie.tld}>{countrie.name.common}
        <button onClick={() => setCountries([countrie])}>show</button>
      </li>
    )}
  </ul>
)

const CountryDetails = ({ countrie }) => {

  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const url = 'https://api.openweathermap.org/data/2.5/weather'
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY

    axios
      .get(url, {
        params: {
          lat: countrie.capitalInfo.latlng[0],
          lon: countrie.capitalInfo.latlng[1],
          units: 'metric',
          appid: apiKey
        }
      })
      .then(response => {
        setWeather(response.data)
      })
  }, [])

  return <div>
    <h2>{countrie.name.common}</h2>
    <p>capital {countrie.capital[0]}</p>
    <p>area {countrie.area}</p>

    <h3>languages:</h3>
    <ul>
      {Object.values(countrie.languages).map(language => <li key={language}>{language}</li>)}
    </ul>
    <img alt={countrie.flags.alt} src={countrie.flags.png} />

    {weather
      ? <WeatherWidget weather={weather} countrie={countrie} />
      : null
    }

  </div>
}

const WeatherWidget = ({ weather, countrie }) => {

  const imgUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`

  return <div>
    <h3>Weather in {countrie.capital}</h3>
    <p>temperature {weather.main.temp} Celsius</p>
    <img alt={weather.weather[0].description} src={imgUrl} />
    <p>wind {weather.wind.speed} m/s</p>
  </div>
}

export default App
