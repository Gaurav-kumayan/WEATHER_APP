import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  let GEO_URL = "http://api.openweathermap.org/geo/1.0/direct"
  const API_KEY = "85744575cce29b85db05497889f1864d"
  let APP_URL = "https://api.openweathermap.org/data/2.5/weather"
  let getWeatherInfo = async () => {
    try {
      let response = await fetch(`${GEO_URL}?q=${city}&appid=${API_KEY}`);
      let { lat, lon } = (await response.json())[0];
      console.log(lat, lon);
      let data = await fetch(`${APP_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
      let datajson = await data.json();
      let result = {
        city: city,
        temp: datajson.main.temp,
        tempMin: datajson.main.temp_min,
        tempMax: datajson.main.temp_max,
        humidity: datajson.main.humidity,
        feelsLike: datajson.main.feels_like,
        weather: datajson.weather[0].description
      }
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }

  }

  let handleChange = (event) => {
    setCity(event.target.value);
  }
  let handalSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      let newinfo = await getWeatherInfo();

      updateInfo(newinfo);
      setCity("");
    } catch (err) {
      setError(true);
      const timer = setTimeout(() => setError(false), 2000); 
      return () => clearTimeout(timer); // Cleanup to avoid memory leaks

    }
  }
  return (

    <div className='SearchBox'>
      <form onSubmit={handalSubmit} action="">
        <TextField onChange={handleChange} value={city} id="city" label="City Name" required variant="outlined" />
        <br />  <br />   <Button variant="contained" type='submit' >Search</Button>
        {error && <p style={{ color: "red" }} >No such palce exists! </p>}
      </form>

    </div>
  )
}