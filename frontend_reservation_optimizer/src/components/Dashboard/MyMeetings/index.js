import React, { useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, globalizeLocalizer } from 'react-big-calendar'
import globalize from 'globalize'
import moment from 'moment'
import { fetch } from '../../../redux/stateManagement/meetings';
import { useDispatch, useSelector } from 'react-redux';

const localizer = globalizeLocalizer(globalize)

const MyCalendar = (props) => {
  const meetings = useSelector(state => state.meeting.meeting);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch({}));
  }, []);

  const fetchFilteredMeetings = ({ start, end }) => {
    dispatch(fetch({ startTime: start, endTime: end }));
  }

  const myEventsList = meetings.map(meeting => ({
    start: moment(meeting.startTime).toDate(),
    end: moment(meeting.endTime).toDate(),
    title: meeting.title
  }))

  return (
    <Box>
      <div>
        <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, Typography }}
          onRangeChange={fetchFilteredMeetings}
        />
      </div>
    </Box>
  )
}

export default MyCalendar;