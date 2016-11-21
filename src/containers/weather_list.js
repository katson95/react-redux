import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/sparkline-chart'
import GoogleMap from '../components/google-map'
class WeatherList extends Component{

  renderWeather(cityData){

    const name = cityData.city.name;
    const temperatures = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const lon = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;

    console.log(temperatures);

    return(
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td>
          <Chart data={temperatures} color="green" units="K"/>
        </td>
        <td>
          <Chart data={pressures} color="orange" units="hPa"/>
        </td>
        <td>
          <Chart data={humidities} color="black" units="%"/>
        </td>
      </tr>
    );
  }

  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
            {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function matchStateToProps({weather}){
  return {weather: weather};
}

export default connect(matchStateToProps)(WeatherList);
