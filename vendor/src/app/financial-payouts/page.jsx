"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const chartData = [
  { date: "01 July", value: 1950 },
  { date: "01 July", value: 1600 },
  { date: "01 July", value: 2300 },
  { date: "01 July", value: 1250 },
  { date: "01 July", value: 1800 },
  { date: "01 July", value: 1480 },
];

const statsData = [
  { label: "This Month", value: "$7,825", percentage: "65%", trend: "up" },
  { label: "This Month", value: "$7,825", percentage: "65%", trend: "up" },
  { label: "This Month", value: "$7,825", percentage: "65%", trend: "up" },
];

function CalendarIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#3D90BB]"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#3D90BB]"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function StatCard({ label, value, percentage, trend }) {
  return (
    <div className="bg-white rounded-xl px-5 py-8 border border-[#B3B3B3]">
      <div className="flex items-center justify-between">
        <span className="text-[#1A1A1A] text-sm font-semibold">{label}</span>
        <div className="flex items-center gap-3">
          <span className="text-[#1A1A1A] text-2xl font-regular">{value}</span>
          <span className="bg-[#6AFF92] text-black text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
            {percentage}
            {trend === "up" && (
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="18 15 12 9 6 15" />
              </svg>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function FinancialPayouts() {
  const [selectedPeriod, setSelectedPeriod] = useState("This Week");

  return (
    <div className=" min-h-screen p-6">
      <div className="flex gap-6">
        {/* Chart Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#B3B3B3] flex-1">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[#333] text-lg font-semibold">Last Week</h2>
            <button className="flex items-center gap-2 text-[#3D90BB] text-sm font-medium">
              <CalendarIcon />
              <span className="text-[#1A1A1A]">{selectedPeriod}</span>
              <ChevronDownIcon />
            </button>
          </div>

          {/* Chart */}
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartData}
                margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="0"
                  stroke="#0000004A"
                  horizontal={true}
                  vertical={false}
                />
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#1A1A1A", fontSize: 14 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#1A1A1A", fontSize: 14 }}
                  ticks={[500, 1000, 1500, 2000, 2500]}
                  domain={[0, 2500]}
                  dx={-10}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #E5E5E5",
                    borderRadius: "8px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                  labelStyle={{ color: "#1A1A1A", fontWeight: 400 ,fontSize:"14px"}}
                  itemStyle={{ color: "#3D90BB",fontSize:"14px" }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#3D90BB"
                  strokeWidth={2}
                  dot={{
                    fill: "#3D90BB",
                    stroke: "#3D90BB",
                    strokeWidth: 1,
                    r: 5,
                  }}
                  activeDot={{
                    fill: "#3D90BB",
                    stroke: "#fff",
                    strokeWidth: 1,
                    r: 7,
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Stats Section */}
        <div className="w-[320px] flex flex-col gap-4">
          {statsData.map((stat, index) => (
            <StatCard
              key={index}
              label={stat.label}
              value={stat.value}
              percentage={stat.percentage}
              trend={stat.trend}
            />
          ))}
        </div>
      </div>
    </div>
  );
}