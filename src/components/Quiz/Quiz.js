import { EyeIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

import QuizOptions from "../QuizOptions/QuizOptions";

const Quiz = ({ quiz, index }) => {
  const [answer, setAnswer] = useState([]);
  const { question, options, correctAnswer } = quiz;
  return (
    <div>
      <section className="mt-16 flex flex-col max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl md:flex-row">
        {/* left part (question) started */}
        <div className="md:flex md:items-center md:justify-center md:w-1/2 bg-gradient-to-l from-gray-900 to-indigo-700 relative">
          <button onClick={() => setAnswer(correctAnswer)}>
            <EyeIcon className="h-6 w-6 text-white absolute top-4 left-4" />
          </button>
          <span className="text-white text-xl font-medium absolute top-4 right-4">
            {index + 1}
          </span>

          {/* <div className="px-6 py-6 md:px-8 md:py-7"> */}
          <div className="p-6 sm:p-8">
            <p className="mt-2 text-xl font-medium text-white leading-10">
              {question.replace(/(<([^>]+)>)/gi, " ")}
            </p>
            <p
              className={`mt-2 ${
                answer.length === 0 ? "hidden" : "block"
              } text-xl font-medium bg-gradient-to-t from-gray-900 to-indigo-700 text-white border rounded ring-2 ring-indigo-500 ring-offset-2 px-2 leading-10`}
            >
              Answer: {`${answer}`}
            </p>
          </div>
        </div>
        {/* left part (question) end */}

        {/* rigth part (answer) started */}
        <div className="grid items-center pl-4 py-6 md:w-1/2">
          <form>
            <div className="overflow-hidden rounded-lg grid grid-cols-1 gap-4">
              {options.map((option, index) => (
                <QuizOptions
                  key={index}
                  option={option}
                  correctAnswer={correctAnswer}
                />
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
