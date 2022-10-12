import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import BannerImg from "../../assets/banner.png";
import Topic from "../Topic/Topic";

const Home = () => {
  const allTopics = useLoaderData();
  const topics = allTopics.data;
  return (
    <div>
      <div className="container px-6 md:pt-8 lg:pt-11 xl:pt-16 pb-8 mt-16 mx-auto text-center">
        <div className="mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl capitalize ">
            Quiziest presents RJCG quiz contest
          </h1>
          <p className="mt-6 mb-14 text-gray-900 text-lg sm:text-xl">
            Take quizzes on React, JavaScript, CSS, Git and know how skilled
            you're!
          </p>
          <Link
            to="/topics"
            className="px-6 py-3 mt-6 text-lg font-medium leading-5 text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 lg:mx-0 lg:w-auto focus:outline-none"
          >
            Let's started
          </Link>
        </div>

        <div className="flex justify-center mt-12 sm:mt-14">
          <img
            className="object-cover w-full h-96 rounded-xl lg:w-full"
            src={BannerImg}
            alt=""
          />
        </div>
      </div>
      <div>
        {/* banner end here */}
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-9 justify-center items-center px-12 py-14">
          {topics.map((topic) => (
            <Topic key={topic.id} topic={topic} />
          ))}
        </div>
        {/* topics end here */}
      </div>
    </div>
  );
};

export default Home;
