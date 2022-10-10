import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const { id, name, logo, total } = topic;
  return (
    <div className="max-w-xs overflow-hidden bg-gradient-to-r from-gray-900 to-indigo-700 rounded-lg shadow-lg ">
      <div className="px-4 py-2">
        <h1 className="text-3xl font-bold text-white uppercase ">{name}</h1>
        <p className="mt-1 text-lg text-white font-medium">Quizzes: {total}</p>
      </div>

      <img
        className="object-cover w-full h-62 mt-2"
        src={logo}
        alt="NIKE AIR"
      />

      <Link
        to={`/quiz/${id}`}
        className="w-full flex items-center justify-center font-semibold text-black uppercase transition-colors duration-300 transform bg-white px-4 py-2 "
      >
        Start now
        <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2 text-black" />
      </Link>
    </div>
  );
};

export default Topic;
