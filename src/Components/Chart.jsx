import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";
import Title from "./Title";

// Generate Sales Data
// function createData(time, amount) {
//   return { time, amount };
// }

// const data = [
//   createData("Desember", 23629579),
//   createData("Januari", 4680641),
//   createData("Februari", 5732484),
//   createData("Maret", 215199183),
//   createData("April", 59790720),
//   createData("Mei", 113743000),
//   createData("Juni", 39094700),
//   createData("Juli", 0),
//   createData("Agustus", undefined),
// ];
const data = [
  { month: "Desember", value: 23629579 },
  { month: "Januari", value: 4680641 },
  { month: "Februari", value: 5732484 },
  { month: "Maret", value: 215199183 },
  { month: "April", value: 59790720 },
  { month: "Mei", value: 113743000 },
  { month: "Juni", value: 39094700 },
  { month: "Juli", value: 0 },
];
// const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];

const Chart = () => {
  const theme = useTheme();
  return (
    <>
      <Title>Data Penjualan Perbulan</Title>
      <ResponsiveContainer>
        {/* <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: "middle",
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            ></Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart> */}
        <BarChart width={300} height={250} data={data}>
          <XAxis dataKey="month" stroke="#8884d8" />
          <YAxis
            width={100}
            type="number"
            domain={["auto", "auto"]}
            padding={{ top: 10 }}
            // tick={{ stroke: "red", strokeWidth: 0.5 }}
          />

          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar
            dataKey="value"
            fill="#8884d8"
            barSize={30}
            label={{ position: "top" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;
