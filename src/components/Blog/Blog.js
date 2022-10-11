import React from "react";

const Blog = () => {
  return (
    <div>
      <section className=" text-gray-800">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-6 mt-4 md:mt-0 text-3xl font-bold leading-none text-center sm:text-4xl">
            Most Asked Interview Questions
          </h2>
          <p className="mb-16 text-sm font-medium tracking-wider text-center uppercase">
            Read and prepare yourself for upcoming Interviews 🧑‍💻
          </p>
          <div className="grid gap-10 md:gap-8 sm:p-3 lg:px-12 xl:px-32">
            <div>
              <h3 className="font-semibold text-xl">
                Lorem ipsum dolor sit amet.
              </h3>
              <p className="mt-1 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum
                ipsum voluptatem consequatur ratione, doloremque debitis? Fuga
                labore omnis minima, quisquam delectus culpa! Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Ratione, fugit?
                Aspernatur, ullam enim, odit eaque quia rerum ipsum voluptatem
                consequatur ratione, doloremque debitis? Fuga labore omnis
                minima, quisquam delectus culpa!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
