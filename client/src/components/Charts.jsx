import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip,CartesianGrid } from "recharts";

function Charts() {
  const data = [
    {
      attendance: 0,

    },
    {
    weekName: "first",
    attendance: 5,
  },
  {
    weekName: "second",
    attendance: 2,
  },
  {
    weekName: "third",
    attendance: 6,
  },
  {
    weekName: "Fourth",
    attendance: 1,
  },
  {
    weekName: "Fifth",
    attendance: 5,
  }];

  return (
    <div className='border
    w-1/4 h-auto'>
      <h3 className='text-lg font-bold mb-4'>
        Attendance chart of {" "}
        <span className='text-black'>Nabin japrel</span>
      </h3>

      <ResponsiveContainer  aspect={2}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray='3 3'/>
          <XAxis dataKey="weekName" />
          <YAxis />
          <Line dataKey="attendance" className=''  type="monotone" stroke="#90EE90"/>
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Charts;
