import React from "react";


const Weather = props => (
    <div className="weather__info">
    {
      props.city && props.country && <p className="weather__key"> Location:
        <span className="weather__value"> {props.city}, {props.country}</span>
        </p>
    }
    {
      props.temparature && <p className="weather__key"> Temperature:
        <span className="weather__value"> {props.temparature}</span>
        </p>
    }
    {
      props.tempMin && props.tempMax && <p className="weather__key"> Min-Max Temparature:
        <span className="weather__value"> {props.tempMin} Degree C, {props.tempMin} Degree C</span>
        </p>
    }
    {
      props.humidity && <p className="weather__key"> Humidity:
        <span className="weather__value"> {props.humidity}</span>
        </p>
    }
    {
      props.description && <p className="weather__key"> Conditions:
        <span className="weather__value"> {props.description}</span>
    </p>
    }
    {
      props.error && <p className="weather__error"> {props.error}</p>
    }
    </div>
);

export default Weather;
