import React from 'react';
import { IoArrowDown, IoArrowUp, IoCompassSharp } from 'react-icons/io5';
import {FiWind} from 'react-icons/fi';
import {ImHappy} from 'react-icons/im';
import {MdOutlineWaterDrop} from 'react-icons/md';
import './Descriptions.css';

function Descriptions({weather,units}){ // weather data and units from App.js

    const tempUnit = units === "metric" ? "C" : "F"; // if units is metric then tempUnit is C else tempUnit is F

    const windUnit = units === "metric" ? "m/s" : "m/h"; //  if units is metric then windUnit is m/s else windUnit is m/h

    const cards = [ // array of objects with relevent data
        {
          id: 1,
          icon: <IoArrowDown />,
          title: "min",
          data: weather && weather.temp_min?.toFixed(), // if weather is true then return temp_min else return null
          unit: tempUnit,
        },
        {
          id: 2,
          icon: <IoArrowUp />,
          title: "max",
          data: weather && weather.temp_max?.toFixed(),
          unit: tempUnit,
        },
        {
          id: 3,
          icon: <ImHappy />,
          title: "feels like",
          data: weather && weather.feels_like?.toFixed(),
          unit: tempUnit,
        },
        {
          id: 4,
          icon: <IoCompassSharp />,
          title: "pressure",
          data: weather && weather.pressure,
          unit: "hPa",
        },
        {
          id: 5,
          icon: <MdOutlineWaterDrop />,
          title: "humidity",
          data: weather && weather.humidity,
          unit: "%",
        },
        {
          id: 6,
          icon: <FiWind />,
          title: "wind speed",
          data: weather && weather.speed?.toFixed(),
          unit: windUnit,
        },
      ];

      return (
        <div className="section section__descriptions">
          {cards.map(({ id, icon, title, data, unit }) => { // map through cards array and return a card for each object with data from cards array
            return (
              <div key={id} className="card">
                <div className="description__card-icon">
                  {icon}
                  <small>{title}</small>
                </div>
                <h2>{`${data} ${unit}`}</h2>
              </div>
            );
          })}
        </div>
      );
};

export default Descriptions;