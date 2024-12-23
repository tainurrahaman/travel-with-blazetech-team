import React from "react";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Navbar from "../components/Navbar";

const SignUp = () => {
  return (
    <div className="bg-gray-600 font-montseerat">
      <div className="mb-10">
        <Navbar></Navbar>
      </div>
      <div className="flex justify-center items-center">
        <div className=" rounded-md px-14 py-8 bg-white  w-[500px]">
          <div className="">
            <h2 className="text-2xl font-semibold text-center mb-10">
              Registration Here
            </h2>
            <form>
              {/* First Name */}
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Password */}
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Login Button */}
              <button className="btn bg-[#F9A51A] rounded-md w-full mb-4">
                Registration
              </button>

              {/* Create an Account */}
              <p className="text-sm text-center text-gray-600">
                Already have an account ?
                <Link to="/login" className="text-blue-600 hover:underline">
                  Login
                </Link>
              </p>
            </form>
          </div>
          <div>
            {/* Divider */}
            <div className="divider my-6">Or</div>

            {/* Social Login */}
            <div className="flex justify-center items-center">
              <div className="space-y-4">
                <button className="btn btn-outline w-[300px] flex items-center justify-center space-x-1">
                  <FaFacebook className="text-blue-600 h-[37px] w-[37px]" />
                  <span>Continue with Facebook</span>
                </button>
                <button className="btn btn-outline  w-[300px] flex items-center justify-center space-x-2">
                  <FcGoogle className=" h-[37px] w-[37px]" />
                  <span>Continue with Google</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
