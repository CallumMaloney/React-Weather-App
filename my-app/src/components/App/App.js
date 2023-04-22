import cold5 from "../../assets/cold5.jpg";
import hot from "../../assets/hot.jpg";
import mild from "../../assets/mild.jpg";
import Descriptions from "../Descriptions/Descriptions";
import { useEffect, useState } from "react";
import getWeatherData from "./weatherData";

function App() {

  const [weather, setWeather] = useState(null) // handle all relevent weather data
  const [units, setUnits] = useState("metric") // metric or imperial
  const [cityChoice, setCityChoice] = useState("Liverpool") // city name
  const [background, setBackground] = useState(hot) // background image

  useEffect(() => {
    document.title = "Weather App"
  } )

  useEffect(() => { // fetch data when units or cityChoice changes
    const fetchWeatherData = async () => { 

      const data = await getWeatherData(cityChoice, units); // get weather data from weatherData.js
      setWeather(data)

      // setting dynamic background

      if( data.temp < (units === "metric" ? 10 : 50) ){   // if temp is less than 10C or 50F 
        setBackground(cold5)
      }else if( data.temp > (units === "metric" ? 20 : 68) ){  //  if temp is more than 20C or 68F 
        setBackground(hot)
      }else{ // if temp is between 10C and 20C or 50F and 68F 
        setBackground(mild)
      }

    } 
    fetchWeatherData();
  },[units, cityChoice])

  function handleUnitsClick(event){ // change units
    const btn = event.currentTarget; 
    const currentUnit = btn.innerText.slice(1) // currentUnit is = btn text without the °


    const isCelsius = currentUnit === "C"; 
    btn.innerText = isCelsius ? "°F" : "°C";
    setUnits(isCelsius ? "imperial" : "metric") // change units
  }

  function enterKeyPressed(event){ // enter key pressed
    if(event.keyCode === 13){
      setCityChoice(event.currentTarget.value)
      event.currentTarget.blur() // remove focus from input
    }
  }

  return (
    
    <div className="App" style={{ backgroundImage: `url(${background})` }}> {/* background image from background state which is dynamic*/}
      <div className="overlay">
        {
          weather && ( // && is checking if weather data is available
            <div className="container">
          <div className="section section__inputs">
            <input onKeyDown={enterKeyPressed}
              type="text"
              name="city"
              placeholder="Enter City Name"
            ></input>
            <button onClick={handleUnitsClick}>°C</button> {/* change units */}
          </div>
          <div className="section section__temperature">
            <div className="desc">
              <h3>{`${weather.name}, ${weather.country}`}</h3> {/* city name and country passed from API */}
              <img
                src={weather.iconURL} // icon url passed from API
                alt="Weather Icon"
              />
              <h3>{`${weather.description}`}</h3> {/* weather description passed from API */}
            </div>
            <div className="temprature">
              <h1>{`${weather.temp.toFixed()}°${units === "metric" ? "C" : "F"}`}</h1> {/* if units === "metric" is true, temp = "C", if false, temp = "F" */}
            </div>
          </div>

          {/* bottom description */}
          <Descriptions weather={weather} units={units}/> {/* pass weather data and units to Descriptions component */}
        </div>
         )
        }
      </div>
    </div>
  );
}

export default App;