import React from 'react'
import './WeatherDay.css';
import { WbSunny } from '@mui/icons-material';
import { Box } from '@mui/material';

function WeatherDay({data, isToday, onClick}) {

    const {name, temp, icon} = data;

    return (
        <Box className={'weather-day' + (isToday ? ' is-today' :'')} onClick={onClick}>
            {name}
            {icon}
            {temp}
        </Box>
    )
}

export default WeatherDay;