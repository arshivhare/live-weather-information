import React from "react";


import Form from './components/Form';
import Weather from './components/Weather';
import Titles from './components/Titles';


const API_KEY = "406e2a19e43594389765a866bcc12459";

class App extends React.Component {
  state = {
    temparature: undefined,
    tempMin: undefined,
    tempMax: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if(city && country){
      this.setState({
        temparature: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.tempMax,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temparature: undefined,
        tempMin: undefined,
        tempMax: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "kindly Enter the correct Country and City."
      });
    }
  }

  render(){
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temparature={this.state.temparature}
                    tempMin={this.state.tempMin}
                    tempMax={this.state.tempMin}
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
