import { createBrowserRouter } from "react-router-dom";
import Root from "../../layouts/Root";
import Blog from "../Blog/Blog";
import Error from "../Error/Error";
import Home from "../Home/Home";
import Quizzes from "../Quizzes/Quizzes";
import Statistics from "../Statistics/Statistics";
import Topics from "../Topics/Topics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
      },
      {
        path: "/home",
        element: <Home />,
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
      },
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
      },

      {
        path: "topics",
        element: <Topics />,
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
      },
      {
        path: "/quiz/:id",
        element: <Quizzes />,
        loader: ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
      },
      {
        path: "statistics",
        element: <Statistics />,
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
      },
      { path: "blog", element: <Blog /> },
    ],
  },
]);

export default router;
