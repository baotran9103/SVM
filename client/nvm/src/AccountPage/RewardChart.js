import React from 'react'
import {} from 'recharts'
import {theme} from '../utils/Theme'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function RewardChart({data}) {
    
    return (
        <div style={{width: '100%',height: '100%'}}>
        <ResponsiveContainer width="100%" height={400}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill={theme.colors.primary} />
         
        </BarChart>
      </ResponsiveContainer>
      </div>
    )
}



export default RewardChart
