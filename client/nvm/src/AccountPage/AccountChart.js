import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";
import { theme } from "../utils/Theme";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <ToolTipContainer className="custom-tooltip">
        <p className="label">
          {payload
            ? `Estimated Plots: ${numberWithCommas(payload[0].value)}`
            : 0}
        </p>
      </ToolTipContainer>
    );
  }

  return null;
};
function AccountChart(props) {
  return (
    <div>
      <div style={{ width: "100%", height: "100%" }}>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            width={1000}
            height={300}
            data={props.data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis
              dataKey="timestamp"
              axisLine={false}
              tickLine={false}
              tickFormatter={(str) => {
                const d = new Date(str);
                if (d.getTime() % 11 !== 0) {
                  return d.toLocaleDateString();
                }
                return "";
              }}
            />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="plots"
              stackId="1"
              stroke="#8884d8"
              fill="transparent"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AccountChart;
const ToolTipContainer = styled.div`
  display: flex;
  background: #d6e5de;
  color: gray;
  padding: 1rem;
  border-radius: 10px;
`;
