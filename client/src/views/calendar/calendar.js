import React from 'react';
import { Calendar,momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
const localizer = momentLocalizer(moment)
export default function calendar() 
{
       return  (
        <div style={{ height: 700 }}>
            <Calendar
 
            style={{ height: 700 }}

            localizer={localizer}

            startAccessor="start"

            endAccessor="end"

            defaultDate={moment().toDate()}
            events={[
                {
                  'title': 'Alec Thompson',
                  'allDay': true,
                  'start': new Date(2020, 11, 12, 10, 0), // 10.00 AM
                  'end': new Date(2020, 11, 12, 12, 0), // 2.00 PM
                },
                {
                    'title': 'Carry wood',
                    'allDay': true,
                    'start': new Date(2020, 11, 10, 10, 0), // 10.00 AM
                    'end': new Date(2020, 11, 10, 12, 0), // 2.00 PM 
                },
                {
                    'title': 'Stephen Wood',
                    'allDay': false,
                    'start': new Date(2020, 11, 15, 10, 0), // 10.00 AM
                    'end': new Date(2020, 11, 15, 12, 0), // 2.00 PM 
                },
                {
                    'title': 'Roger fed',
                    'allDay': false,
                    'start': new Date(2020, 11, 10, 10, 0), // 10.00 AM
                    'end': new Date(2020, 11, 10, 12, 0), // 2.00 PM 
                },
                {
                    'title': 'Roger',
                    'allDay': false,
                    'start': new Date(2020, 10, 10, 10, 0), // 10.00 AM
                    'end': new Date(2020, 10, 10, 12, 0), // 2.00 PM 
                }
              ]}
              step={60}
              min={new Date(2020, 0, 1, 8, 0)} // 8.00 AM
              max={new Date(2020, 0, 1, 18, 0)} // Max will be 6.00 PM!
            />
        </div>
        )
}