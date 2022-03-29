
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip, ResponsiveContainer
} from "recharts";
import styled from  'styled-components'
import {theme} from '../../utils/Theme'
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

export default function App(props) {
//   console.log(
// props.data)

  return (
    <div style={{width: '100%',height: '100%'}}>
    <ResponsiveContainer width="100%" height={400}>
    <AreaChart
      width={1000}
      height={300}
      data={props.data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
     
      <XAxis dataKey="date" 
         tickFormatter={
          (str)=>{
            
            const d = new Date(str)
            if(d.getTime()%11!==0){
              return d.toLocaleDateString()
            }
            return ""
          }
        }
      />
      <YAxis />
      <Tooltip content={<CustomTooltip units = {props.data.length >0 ?props.data.slice(-1)[0].poolSpaceUnit:''} />} />
    
      <Area
        type="monotone"
        dataKey="poolSpace"
        stackId="1"
        stroke={`${theme.colors.primary}`}
        fill="transparent"
      />
      {/* <Area
        type="monotone"
        dataKey="euPoolNetSpaceTiB"
        stackId="1"
        stroke="#82ca9d"
        fill="#245b40"
      />
      <Area
        type="monotone"
        dataKey="asiaPoolNetSpaceTiB"
        stackId="1"
        stroke="#ffc658"
        fill="#183c2b
        "
      /> */}
    </AreaChart></ResponsiveContainer></div>
  );
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const ToolTipContainer = styled.div`
display: flex;
background:#d6e5de;
color: gray;
padding:1rem;
border-radius:10px;
`

const CustomTooltip = (props) => {

	if (props.active) {
		return (
			<ToolTipContainer className="custom-tooltip">
				<p className="label">{`Pool Space: ${numberWithCommas(props.payload[0].value)} ${props.units}`}</p>
				
			</ToolTipContainer>
		);
	}

	return null;
};