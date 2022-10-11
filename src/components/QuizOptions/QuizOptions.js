import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuizOptions = ({ option, correctAnswer, answer }) => {
  const handlerAnswerCheck = (answer) => {
    if (answer === correctAnswer) {
      return toast.success("Correct!", {
        position: "top-center",
        autoClose: 500,
      });
    } else {
      return toast.error("Wrong!", {
        position: "top-center",
        autoClose: 500,
      });
    }
  };

  return (
    <div>
      <div className="flex items-center border-4 border-x-indigo-700 px-4 py-2 w-[96%] hover:bg-[#e9e9e9]">
        <label className="text-lg font-medium text-gray-900 flex items-center">
          <input
            onClick={(e) => handlerAnswerCheck(e.target.value)}
            value={option}
            type="radio"
            name="quiz"
            className="block mr-4"
          />
          {option}
          <ToastContainer />
        </label>
      </div>
    </div>
  );
};

export default QuizOptions;
