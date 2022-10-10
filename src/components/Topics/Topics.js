import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

const Topics = () => {
  const allTopics = useLoaderData();
  const topics = allTopics.data;
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-9 justify-center items-center px-12 py-14">
      {topics.map((topic) => (
        <Topic key={topic.id} topic={topic} />
      ))}
    </div>
  );
};

export default Topics;
