import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type ChartData = {
  name: string;
  value: number;
}[];

interface ChartsProps {
  data: ChartData;
  tooltipLabel?: string;
  tooltipDetailLabel?: string;
  tooltipDetailLabelHead?: string;
  title?: string;
}

export default function Charts({ data, tooltipLabel, tooltipDetailLabel, tooltipDetailLabelHead }: ChartsProps) {
  return (
    <div className="w-full h-64 bg-white p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid
            stroke="#cfcfcf"        // warna grid
            strokeDasharray="3 3"   // garis putus-putus
            vertical={false}         // jika hanya horizontal, bisa set vertical={false}
          />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={{ stroke: "#ccc" }}
            interval="preserveStartEnd"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={{ stroke: "#ccc" }}
          />
          <Tooltip
            formatter={(value: number) => [
              `${tooltipDetailLabelHead || ""} ${value.toLocaleString("id-ID")}`,
              `${tooltipDetailLabel || ""}`,
            ]}
            labelFormatter={(label) => `${tooltipLabel || ""} ${label}`}
          />
          <Line
            type="linear"
            dataKey="value"
            stroke="#3dc8b2"
            strokeWidth={3}
            dot={{ r: 4, fill: "#00783e" }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
