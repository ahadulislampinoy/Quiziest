import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./Statistics.css";

const Statistics = () => {
  const allTopics = useLoaderData();
  const topics = allTopics.data;
  return (
    <div className="pt-[7.5rem]">
      <div className="div-container font-semibold">
        <ResponsiveContainer>
          <BarChart
            width={600}
            height={300}
            data={topics}
            margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" stroke="#000" />
            <YAxis stroke="#000" />
            <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#fff" }} />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="total" fill="#473dbf" barSize={90} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
