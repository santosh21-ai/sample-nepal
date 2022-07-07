import React from "react";
import { Fragment } from "react";
import { docs } from "../data/reviewDocs";
import Layout from "../components/dashboard/Layout";

const reviewDocs = () => {
  return (
    <Layout>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Dcoument
            </h2>

            <div className="mt-16 text-left max-w-2xl mx-auto">
              <p className="mt-4  text-ase text-gray-500 ">
                This privacy policy describes how Tailwind Labs Inc. collects,
                protects and uses the personally identifiable information you
                may provide through the Tailwind UI website or in the course of
                purchasing any Tailwind UI products. The Policy also describes
                the choices available to you regarding our use of your Personal
                Information and how you can access and update this information.
                This Policy does not apply to the practices of companies that we
                do not own or control, or to individuals that we do not employ
                or manage.
              </p>
              {docs.map((content) => (
                <Fragment key={content.id}>
                  <p className="mt-4  text-ase text-gray-500 ">
                    {content.content}
                  </p>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default reviewDocs;
