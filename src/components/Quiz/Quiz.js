import React from "react";
import QuizOptions from "../QuizOptions/QuizOptions";

const Quiz = ({ quiz }) => {
  const { question, options } = quiz;
  return (
    <div>
      <section className="mt-16 flex flex-col max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl md:flex-row">
        {/* left part (question) started */}
        <div className="md:flex md:items-center md:justify-center md:w-1/2 bg-gradient-to-l from-gray-900 to-indigo-700 ">
          <div className="px-6 py-6 md:px-8 md:py-0">
            <p className="mt-2 text-xl font-medium text-white leading-10">
              {question.split("<p>")[1].split("</p>")[0]}
            </p>
          </div>
        </div>
        {/* left part (question) end */}

        {/* rigth part (answer) started */}
        <div className="grid items-center pl-4 py-6 md:w-1/2">
          <form>
            <div className="overflow-hidden rounded-lg grid grid-cols-1 gap-4">
              {options.map((option, index) => (
                <QuizOptions key={index} option={option} />
              ))}
            </div>
          </form>
        </div>
        {/* right part (answer) end */}
      </section>
    </div>
  );
};

export default Quiz;
