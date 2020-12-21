import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'January', hours: 4000, amt: 2400,
  },
  {
    name: 'February', hours: 3000, amt: 2210,
  },
  {
    name: 'March', hours: 2000,  amt: 2290,
  },
  {
    name: 'April', hours: 2780, amt: 2000,
  },
  {
    name: 'May',  hours: 1890, amt: 2181,
  },
  {
    name: 'June', hours: 2390, amt: 2500,
  },
  {
    name: 'July', hours: 3490, amt: 2100,
  },
  {
    name: 'August', hours: 3490, amt: 2100,
  },
  {
    name: 'September', hours: 3490,amt: 2100,
  },
  {
    name: 'October', hours: 3490, amt: 2100,
  },
  {
    name: 'November', hours: 3490,amt: 2100,
  },
  {
    name: 'December', hours: 3490,amt: 2100,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    return (
      <BarChart
        width={1100}
        height={500}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Legend />
        <Tooltip />
        <Bar dataKey="hours" fill="#8884d8" />
      </BarChart>
    );
  }
}