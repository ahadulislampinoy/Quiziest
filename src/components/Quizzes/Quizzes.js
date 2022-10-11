import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const Quizzes = () => {
  const quiz = useLoaderData();
  const { name, questions } = quiz.data;
  return (
    <div>
      <div className="flex flex-col items-center mx-8 mt-10">
        <h1 className="text-3xl font-medium text-gray-800 capitalize lg:text-4xl">
          The quiz of {name}
        </h1>
        <div className="mt-4">
          <span className="inline-block w-40 h-1 bg-indigo-600 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-indigo-600 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-indigo-600 rounded-full"></span>
        </div>
      </div>
      <div className="pb-16 sm:mx-12 mx-6">
        {questions.map((quiz, index) => (
          <Quiz key={quiz.id} quiz={quiz} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Quizzes;
