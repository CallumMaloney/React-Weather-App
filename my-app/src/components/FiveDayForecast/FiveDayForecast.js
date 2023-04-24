import React from 'react';
import './FiveDayForecast.css';

function FiveDayForecast(){

    const forecastCards = [
        {
            id: 1,
            day: "Monday",
            icon: "https://openweathermap.org/img/wn/03d@2x.png",
            tempMax: "12",
            tempMin: "3",
            unit: "C"
        },
        {
            id: 2,
            day: "Tuesday",
            icon: "https://openweathermap.org/img/wn/03d@2x.png",
            tempMax: "12",
            tempMin: "3",
            unit: "°C"
        },
        {
            id: 3,
            day: "Wednesday",
            icon: "https://openweathermap.org/img/wn/03d@2x.png",
            tempMax: "12",
            tempMin: "3",
            unit: "°C"
        },
        {
            id: 4,
            day: "Thursday",
            icon: "https://openweathermap.org/img/wn/03d@2x.png",
            tempMax: "12",
            tempMin: "3",
            unit: "°C"
        },
        {
            id: 5,
            day: "Friday",
            icon: "https://openweathermap.org/img/wn/03d@2x.png",
            tempMax: "12",
            tempMin: "3",
            unit: "°C"
        }
    ]

    return(
        <div className="section section_forecast">
            <div className="forecast-cards">
            {forecastCards.map(({id, day, icon, tempMax, unit, tempMin}) => {

                return(
                    <div key={id} className="forecast-card">
                        <small>{day}</small>
                        <div className="forecast-card-icon">
                        <img src={icon} alt="Weather Icon" />
                        </div>
                        <div className = "forecast-card-temp">

                            <h3 >{`${tempMax} ${unit}`}</h3>
                            <h3>{`${tempMin} ${unit}`}</h3>

                        </div>
                    </div>
                )
            })}

            </div>
        </div>
    )
}
export default FiveDayForecast;