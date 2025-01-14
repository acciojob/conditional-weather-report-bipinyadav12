import React from 'react';

const WeatherDisplay = ({ weather }) => {
  const { temperature, conditions } = weather;

  const temperatureStyle = {
    color: temperature > 20 ? 'red' : 'blue',
  };

  return (
    <div>
      <p>
        Temperature: <span style={temperatureStyle}>{temperature}</span>
      </p>
      <p>Conditions: {conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
