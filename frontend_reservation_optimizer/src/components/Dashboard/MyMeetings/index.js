import React from 'react';
import { Typography, Box } from '@mui/material';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, globalizeLocalizer } from 'react-big-calendar'
import globalize from 'globalize'
import moment from 'moment'

const localizer = globalizeLocalizer(globalize)

const myEventsList =[
    {
      start: moment().toDate(),
      end: moment()
        .add(1, "days")
        .toDate(),
      title: "My first meeting"
    }
  ]

const MyCalendar = (props) => (
  <Box> 
    <div>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, Typography }}
      /> 
    </div>
  </Box>
)

export default MyCalendar;