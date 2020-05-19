import React from "react";
import Icon from "components/icon";
import Image from "./components/building.jpg";
import { Link } from "react-router-dom";
import LogoMark from "assets/logo/logo-mark.svg";

const Signup = () => {
  return (
    <main className="min-h-screen lg:flex">
      <div className="px-4 min-h-screen flex items-center justify-center lg:w-5/12">
        <div className="lg:ml-auto lg:max-w-md lg:pr-16">
          <div>
            <img className="mx-auto h-12 w-auto lg:m-0" src={LogoMark} alt="Property finder" />
            <h1 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900 lg:text-left">
              Sign up and get started
            </h1>
            <p className="mt-2 text-center text-sm leading-5 text-gray-600 lg:text-left">
              Existing customer?{" "}
              <Link
                to="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
              >
                Sign in
              </Link>
            </p>
          </div>
          <form className="mt-8">
            <div>
              <label htmlFor="signup_first_name" className="text-sm text-gray-700 font-medium">
                First name
              </label>
              <input
                type="text"
                id="signup_first_name"
                className="mt-1 form-input block w-full shadow border-gray-300"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="signup_last_name" className="text-sm text-gray-700 font-medium">
                Last name
              </label>
              <input
                type="text"
                id="signup_last_name"
                className="mt-1 form-input block w-full shadow border-gray-300"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="signup_email" className="text-sm text-gray-700 font-medium">
                Email address
              </label>
              <input
                type="email"
                id="signup_email"
                className="mt-1 form-input block w-full shadow border-gray-300"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="signup_password" className="text-sm text-gray-700 font-medium">
                Password
              </label>
              <input
                type="password"
                id="signup_password"
                className="mt-1 form-input block w-full shadow border-gray-300"
              />
            </div>
            <div className="mt-6">
              <button className="group relative block w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-7 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <Icon
                    icon="lock"
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
                  />
                </span>
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="lg:w-7/12">
        <img src={Image} className="h-full w-full bg-center bg-no-repeat" alt="" />
      </div>
    </main>
  );
};

export default Signup;
