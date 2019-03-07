import React from "react";

const DroneDataDisplayComponent = props => {
  const { droneData, weather } = props;
  const timestamp = new Date(droneData.timestamp).toString();
  return (
    <React.Fragment>
      <div style={{ display: "flex" }}>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            margin: "30px",
            padding: "20px"
          }}
        >
          <h3>Drone Location :</h3>
          <div>
            <strong>Lattitude : </strong>
            <span>{droneData && droneData.latitude}</span>
          </div>
          <div>
            <strong>Longitude : </strong>
            <span>{droneData && droneData.longitude}</span>
          </div>
          <div>
            <strong>Timestamp : </strong>
            <span>{droneData && timestamp}</span>
          </div>
          <div>
            <strong>Accuracy : </strong>
            <span>{droneData && droneData.accuracy}</span>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            margin: "30px",
            padding: "20px"
          }}
        >
          <h3>Weather Information :</h3>
          <div>
            <strong>Location : </strong>
            <span>{weather && weather.name}</span>
          </div>
          <div>
            <strong>Weather state : </strong>
            <span>{weather && weather.weather_state_name}</span>
          </div>
          <div>
            <strong>Temperature in Celcius : </strong>
            <span>{weather && weather.temperatureinCelsius}</span>
          </div>
          <div>
            <strong>Temperature in Fahrenheit : </strong>
            <span>{weather && weather.temperatureinFahrenheit}</span>
          </div>
          <div>
            <strong>Timezone : </strong>
            <span>{weather && weather.data.timezone_name}</span>
          </div>
          <div>
            <strong>Sunrise : </strong>
            <span>{weather && weather.data.sun_rise}</span>
          </div>
          <div>
            <strong>Sunset : </strong>
            <span>{weather && weather.data.sun_set}</span>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            margin: "30px",
            padding: "20px"
          }}
        >
          <h3>Sources :</h3>
          {weather.data.sources &&
            weather.data.sources.map(source => {
              return <div>{source.title}</div>;
            })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default DroneDataDisplayComponent;
