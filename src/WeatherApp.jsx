import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"
export default function WeatherApp ( ){
    let [weatherInfo , setWeatherInfo ] = useState({ 
        city: "Wonderland",
        temp: 23.4,
        tempMin: 24.23,
        tempMax: 13.43,
        humidity: 23.4,
        feelsLike: 32,
        weather: "haze",
  });

  let updateInfo = (newinfo) => {
    setWeatherInfo(newinfo);
  }
    return (
        
        <div style={{textAlign : "center"}} >
            <h1>Weather App </h1>
            <SearchBox updateInfo = {updateInfo} />
            <InfoBox info = {weatherInfo}/>
        </div>
    )
}