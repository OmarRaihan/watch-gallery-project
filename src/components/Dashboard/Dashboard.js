
import React from 'react';
import MyAreaChart from '../MyAreaChart/MyAreaChart';
import MyLineChart from '../MyLineChart/MyLineChart';

const Dashboard = () => {
    return (
        <div>
            <div className='my-24 ml-10'>
                <h1 className='text-2xl text-purple-500 font-semibold mr-auto'>Investment VS Revenue</h1>
            <MyLineChart></MyLineChart>
            </div>
            <div className='my-24 ml-10'>
            <h1 className='text-2xl text-orange-500 font-semibold mr-auto'>Investment VS Revenue</h1>
                <MyAreaChart></MyAreaChart>
            </div>
        </div>
    );
};

export default Dashboard;