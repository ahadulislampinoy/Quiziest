import React from "react";

const QuizOptions = ({ option }) => {
  return (
    <div>
      <div className="flex items-center  border-4 border-x-indigo-700 px-4 py-2 w-11/12">
        <input type="radio" name="quiz" />
        <label className="text-lg font-medium text-gray-900 ml-2 block">
          {option}
        </label>
      </div>
    </div>
  );
};

export default QuizOptions;
