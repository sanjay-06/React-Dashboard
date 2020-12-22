import React from 'react';
import { Calendar} from 'react-big-calendar';
import moment from 'moment';

export default function calendar() {

        const holidaysList = []
        holidaysList.push({id:2,occasion:"Abbc",is_restricted:"false",for_date:"2019-11-22",color: "#ff0000" })
        const absentiesList = []
        absentiesList.push({id:2,username:"dhruvil",start_at: "Tue Nov 19 05:30:00 GMT+0503(India standard Time){}", end_at: "Tue Nov 19 05:30:00 GMT+0503(India standard Time){}",is_sandwich:"false",color:"fff600"})
        const holidays = []

       holidaysList.forEach((holiday) => {

           let start = moment(holiday.for_date).toDate()

           holidays.push({ id: holiday.id, title: holiday.occasion, start: start, end: start, color: holiday.color, resource: holiday.is_restricted, type: 'holiday', allDay: 'true' })
       })

       const leaves = []

       absentiesList.forEach((leave) => {

           let start_at = (new Date(leave.start_at))

           let end_at = (new Date(leave.end_at))

           leaves.push({ id: leave.id, title: leave.username, start: start_at, end: end_at, color: leave.color, type: 'leave', allDay: 'true' })

       })

       const list = [...holidays, ...leaves]
       return (
        <Calendar

        events={list}

        startAccessor="start"

        endAccessor="end"

        defaultDate={moment().toDate()}

        eventPropGetter={event => {

            const eventData = list.find(ot => ot.id === event.id);

            const backgroundColor = eventData && eventData.color;

            return { style: { backgroundColor } };

        }}

    />
    )
}