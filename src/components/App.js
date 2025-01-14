import React, { useEffect, useState } from 'react';
import WeatherDisplay from './Weather';

const App = () => {
  const [weather, setWeather] = useState({ temperature: 0, conditions: '' });

  useEffect(() => {
    const weatherInput = { temperature: 25, conditions: 'Sunny' };
    setWeather(weatherInput);
  }, []);

  return (
    <div>
      <h1>Weather Report</h1>
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;
