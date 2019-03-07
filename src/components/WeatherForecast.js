import React from "react";

const WeatherForecast = props => {
  const { forecast } = props;
  return (
    <React.Fragment>
      <h3 style={{ margin: "0px 0px 0px 30px" }}>Forecast :</h3>
      <div style={{ display: "flex", flex: 1 }}>
        {forecast &&
          forecast.map(cast => {
            return (
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  margin: "20px",
                  padding: "10px"
                }}
              >
                <div>
                  <strong>Date : </strong>
                  <span>{cast.applicable_date}</span>
                </div>
                <div>
                  <strong>Weather state : </strong>
                  <span>{cast.weather_state_name}</span>
                </div>
                <div>
                  <strong>Wind Direction Compass : </strong>
                  <span>{cast.wind_direction_compass}</span>
                </div>
                <div>
                  <strong>Minimum Temperature : </strong>
                  <span>{cast.min_temp}</span>
                </div>
                <div>
                  <strong>Maximum Temperature : </strong>
                  <span>{cast.max_temp}</span>
                </div>
                <div>
                  <strong>Wind Speed : </strong>
                  <span>{cast.wind_speed}</span>
                </div>
                <div>
                  <strong>Wind Direction : </strong>
                  <span>{cast.wind_direction}</span>
                </div>
                <div>
                  <strong>Air Pressure : </strong>
                  <span>{cast.air_pressure}</span>
                </div>
                <div>
                  <strong>Humidity : </strong>
                  <span>{cast.humidity}</span>
                </div>
                <div>
                  <strong>Visibility : </strong>
                  <span>{cast.visibility}</span>
                </div>
                <div>
                  <strong>Predictability : </strong>
                  <span>{cast.predictability}</span>
                </div>
              </div>
            );
          })}
      </div>
    </React.Fragment>
  );
};
export default WeatherForecast;
