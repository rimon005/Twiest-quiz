import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Rechart.css'

const Services = () => {
    const datas = useLoaderData()
    const data = datas.data;
    console.log(data);
    return (
        <div className='recharts'>
           <LineChart width={400} height={400} data={data} className="rechart">
                <XAxis dataKey="name" />
                <YAxis />
                <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Services;