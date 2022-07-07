import React from "react";
import Table from "./Table";
import Navbar from "./Navbar";
import SideNav from "./SideNav";

const Main = () => {
  return (
    <main className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar />
      <section aria-labelledby="products-heading" className="pt-6 pb-24">
        <h2 id="products-heading" className="sr-only">
          Products
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-x-8 gap-y-10">
          <SideNav />
          <div className="lg:col-span-5">
            {/* Replace with your content */}
            {/* <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 lg:h-full" /> */}
            {/* /End replace */}
            <Table />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
