import { FaGithub } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const SignIn = () => {
  const { signInUser, setUser, signUpWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.code);
      });

    signUpWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-gray-600 font-montseerat">
      <div className="mb-10">
        <Navbar></Navbar>
      </div>
      <div className="flex justify-center items-center">
        <div className=" rounded-md px-14 py-8 bg-white  w-[500px]">
          <div className="">
            <h2 className="text-2xl font-semibold text-center mb-10">
              Login Here
            </h2>
            <form onSubmit={handleLogin}>
              {/* Username or Email */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Username or Email
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="Enter your username or email"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Password */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex justify-between items-center mb-6">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="checkbox" />
                  <span className="text-sm text-gray-700">Remember Me</span>
                </label>
                <Link className="text-sm text-blue-600 hover:underline">
                  Forgot Password?
                </Link>
              </div>

              {/* Login Button */}
              <button className="btn bg-[#F9A51A] rounded-md w-full mb-4">
                Login
              </button>

              {/* Create an Account */}
              <p className="text-sm text-center text-gray-600">
                Don’t have an account?{" "}
                <Link to="/register" className="text-blue-600 hover:underline">
                  Create an account
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
                  <FaGithub className="text-black-600 h-[37px] w-[37px]" />
                  <span>Continue with Github</span>
                </button>
                <Link
                  onClick={signUpWithGoogle}
                  to="/"
                  className="btn btn-outline  w-[300px] flex items-center justify-center space-x-2"
                >
                  <FcGoogle className=" h-[37px] w-[37px]" />
                  <span>Continue with Google</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
