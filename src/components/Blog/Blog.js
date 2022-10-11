import React from "react";

const Blog = () => {
  return (
    <div>
      <section className=" text-gray-800">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-6 mt-10 md:mt-0 text-4xl font-bold leading-none text-center sm:text-5xl">
            Most Asked Interview Questions
          </h2>
          <p className="mb-24 text-lg font-medium tracking-wider text-center capitalize">
            Read and prepare yourself for upcoming Interviews👨‍💻
          </p>
          <div className="grid gap-10 md:gap-8 sm:p-3 lg:px-12 xl:px-32">
            <div>
              <h3 className="font-semibold text-2xl">
                What is the purpose of use React Router?
              </h3>
              <p className="mt-1 text-lg">
                React Router is a standard library for routing in React Js. It
                is mainly used for developing Single Page Web Applications
                (SPA). It enables navigation across multiple components in a
                react application without refreshing the web page. When a user
                types a specific URL into the browser, and if this URL path
                matches any 'route' then, the user will be redirected to that
                particular route.
                <br />
                <br />
                The Router in React JS uses a component-based architecture. It
                offers various routing components as required by the
                application. This Router decreases the amount of code an app
                requires to maintain and makes adding new features more
                accessible.
              </p>
            </div>
            {/* 1st question end here */}
            <div className="mt-6">
              <h3 className="font-semibold text-2xl">
                How does Context API work?
              </h3>
              <p className="mt-1 text-lg">
                Context is an API that is built into React, Context provides a
                way to share values between components, without having to
                explicitly pass a prop through every level of the tree. It's a
                great alternative to prop drilling. It allows us to share
                information with any component, by storing it in a central place
                and allowing access to any component that requests it
                <br />
                <br />
                There are two components in React context: Provider & Consumer.
                Provider allows us to declare the data that we want available
                throughout our component tree and Consumer allows any component
                in the tree that needs that data to be able to subscribe to it.
              </p>
            </div>
            {/* 2nd question end here */}
            <div className="mt-6">
              <h3 className="font-semibold text-2xl">
                What is useRef in React?
              </h3>
              <p className="mt-1 text-lg">
                The useRef Hook lets us create mutable variables inside
                functional components. It will return an object that you can use
                during the whole lifecycle of the component. The main use case
                for the useRef hook is accessing DOM nodes or React elements,
                also it’s handy for keeping any mutable value.
              </p>
            </div>
            {/* 3rd question end here */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
