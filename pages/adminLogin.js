import React, { useState, useContext } from "react";
import Link from "next/link";
import FavoritesContext from "../context/allContext";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const userCtx = useContext(FavoritesContext);
  const [email, setEmail] = useState("");
  const setUser = () => {
    console.log("login" + email);
    userCtx.setUser(email);
    console.log(userCtx.user);
    router.push("/dashboard");
  };
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center px-6 lg:px-8">
        <div className=" flex justify-center font-bold text-4xl text-slate-800">
          Nepal citizenship portal Admin
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
            <form className="mb-0 space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <div className="mt-1">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="email"
                    required
                    className=" "
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className=""
                  />
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={setUser}
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
