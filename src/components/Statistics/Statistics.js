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
    <div>
      <div className="flex flex-col items-center mx-8 mt-8 mb-14">
        <h1 className="text-3xl font-medium text-center text-gray-800 capitalize">
          Statistics of total quizzes
        </h1>
        <div className="mt-4">
          <span className="inline-block w-40 h-1 bg-indigo-600 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-indigo-600 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-indigo-600 rounded-full"></span>
        </div>
      </div>
      {/* header end */}
      <div className="div-container font-semibold mt-5">
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
