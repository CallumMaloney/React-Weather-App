const apiKey = "9eb5bf2d4b408c813b3d85664a77c25d"; // API key from openweathermap.org

const makeIconUrl = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png` // make icon url with dynamic icon id

const getWeatherData = async (city, units="metric") =>{ // get weather data from API

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}` // API url with dynamic city, API key and units

  const response = await fetch(url);
  const data = await response.json();

  const {weather, main:{temp, feels_like, temp_min, temp_max, pressure, humidity}, // destructuring data
   wind:{speed}, 
   sys:{country}, name} = data;

   const {description, icon} = weather[0]; 

   return { // return object with new, relevent data
    description,
    iconURL: makeIconUrl(icon),
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    country,
    name,
  };
};

export default getWeatherData;