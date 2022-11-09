import React, { Suspense } from "react";
import TodosList from "./(users)/todos/TodosList";

const Home = () => {
  return (
    <div className="">
      <Suspense fallback={<p>Loading Todoss</p>}>
        <h1>Loading todos</h1>
        <div>
          {/* @ts-ignore */}
          <TodosList />
        </div>
      </Suspense>
      <Suspense fallback={<p>Loading Shopping</p>}>
        <h1>Loading shopping</h1>

        <div>
          {/* @ts-ignore */}
          <TodosList />
        </div>
      </Suspense>
    </div>
  );
};

export default Home;
