import "./InfoBox.css"
import * as React from 'react';
import Card from '@mui/material/Card';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import SunnyIcon from '@mui/icons-material/Sunny';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox({ info }) {
    let HOT_URL = "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let COLD_URL = "https://images.unsplash.com/photo-1616951849649-74dd2dd7e662?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    let RAIN_URL = "https://images.unsplash.com/photo-1438449805896-28a666819a20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    return (
        <div className="InfoBox">
            {/* <h1>WeatherInfo</h1> */}
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} &nbsp; {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <SunnyIcon /> : <AcUnitIcon />}
                        </Typography>
                        <Typography variant="body2" component={"span"} sx={{ color: 'text.secondary' }}>
                            <p>Temperature: {info.temp}&deg;C</p>
                            <p>Humidity: {info.humidity}%</p>
                            <p>Min Temperature: {info.tempMin}&deg;C</p>
                            <p>Max Temperature: {info.tempMax}&deg;C</p>
                            <p>The weather is described <i> {info.weather} </i> and feels like {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>

                </Card>
            </div>
        </div>
    )
}
