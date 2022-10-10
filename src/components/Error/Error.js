import React from "react";

const Error = () => {
  return (
    <section className="flex items-center h-screen p-13 sm:p-16 bg-light-gray text-gray-800">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-gray-500">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-10">
            Sorry, we couldn't find this page.
          </p>
          <a
            rel="noopener noreferrer"
            href="/"
            className="px-6 py-3 font-semibold rounded bg-indigo-700 hover:bg-indigo-600 text-gray-50"
          >
            Back to topics
          </a>
        </div>
      </div>
    </section>
  );
};

export default Error;
