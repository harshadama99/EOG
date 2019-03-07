import React from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import DroneDataDisplayComponent from "./DroneDataDisplayComponent";
import WeatherForecast from "./WeatherForecast";

class Dashboard extends React.Component {
  state = {
    interval: ""
  };
  componentDidMount() {
    const { fetchDroneData } = this.props;
    fetchDroneData();
    this.setState({ interval: setInterval(() => fetchDroneData(), 8000) });
  }

  render() {
    const { droneData, weather } = this.props;
    return (
      <React.Fragment>
        <DroneDataDisplayComponent droneData={droneData} weather={weather} />
        <WeatherForecast forecast={weather.data.consolidated_weather} />
      </React.Fragment>
    );
  }
}

export default connect(
  state => {
    const { Drone, weather } = state;
    return {
      droneData: Drone.data,
      weather
    };
  },
  dispatch => {
    return {
      fetchDroneData: () => {
        dispatch({ type: actions.FETCH_DRONE_DATA });
      },
      getWeatherData: (lat, long) =>
        dispatch({
          type: actions.FETCH_WEATHER,
          longitude: long,
          latitude: lat
        })
    };
  }
)(Dashboard);
