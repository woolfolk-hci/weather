import './App.css';
import WeatherDay from './components/weather-day/WeatherDay';
import { AcUnit, Thunderstorm, WaterDrop, WbCloudy, WbSunny } from '@mui/icons-material';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';

const weathers = ['sunny', 'cloudy', 'rainy', 'thunder', 'snowy'];
const weathersIcons = [<WbSunny/>, <WbCloudy/>, <WaterDrop/>, <Thunderstorm/>, <AcUnit/>];
const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

function App() {

  const [daysValues] = useState(days.map(day => {
    const weatherIndex = Math.floor(Math.random() * weathers.length);
    const weather = weathers[weatherIndex];
    const icon = weathersIcons[weatherIndex];
    const temp = Math.floor(Math.random() * 40);
    const min = temp - 5;
    const max = temp + 5;

    return {
      name: day,
      weather: weather,
      icon: icon,
      temp: temp,
      min: min,
      max: max,
    }

  }));

  const [today, setToday] = useState(new Date().getDay() - 1);

  const todayValues = daysValues[today];

  return (
    <div className={"App " + (todayValues.weather)}>
      <Box className='today-icon'>
        {todayValues.icon}
      </Box>
      <Box className='today-name'>{todayValues.name}</Box>
      <Box className='today-values'>
        <Typography>{todayValues.temp}° C</Typography>
        <Box className='row'>
          <Typography>min</Typography>
          <Typography>{todayValues.min}° C</Typography>
        </Box>
        <Box className='row'>
          <Typography>max</Typography>
          <Typography>{todayValues.max}° C</Typography>
        </Box>
      </Box>
      <h1 className='message'>Good Evening!</h1>
      <div className='days-container'>
        {
          daysValues.map((day, index) => (
            <WeatherDay key={index} data={day} isToday={index === today} onClick={() => setToday(index)}/>
          ))
        }
      </div>

    </div>
  );
}

export default App;
