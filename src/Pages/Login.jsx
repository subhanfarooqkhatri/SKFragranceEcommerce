import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    // <div className="center">
    // <div className="font-semibold text-white bg-neutral-800 my-4 rounded text-lg w-[300px] h-[300px]  flex flex-col items- gap-12 justify-center">
    // <h1 className="text-3xl flex justify-center ">  Login</h1>
    //   <form action="">
    //     <ul  className="font-normal text-xs flex flex-col gap-2 justify-center items-center">
    //       <li>
    //         {" "}
    //         <label className="" htmlFor="">
    //          <span className="text-lg">UserEmail :</span><input className="outline-none w-40 h-6 m-3 rounded" type="email" name="" id="" />
    //         </label>
    //       </li>
    //       <li>
    //         {" "}
    //         <label className="" htmlFor="">
    //          <span className="text-xl">Password :</span> <input className="outline-none w-40 h-6 m-3 rounded" type="password" name="" id="" />
    //         </label>
    //       </li>
    //       <li>
    //         {" "}
    //         <button className="bg-myTheme w-24 h-8 rounded">Submit</button>
    //       </li>
    //     </ul>
    //   </form>
    // </div>
    // </div>

<section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div
      className="flex items-center mb-6 text-3xl font-semibold text-black  dark:text-white"
    >
      {/* <img
        className="w-8 h-8 mr-2"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
        alt="logo"
      /> */}
    
    </div>
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="flex justify-center text-xl font-bold leading-tight rounded tracking-tight text-black md:text-2xl dark:text-white">
          Login in to your Account
        </h1>
        <form className="space-y-4 md:space-y-6" action="#">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-black rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@mail.com"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-black dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-black rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-black dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required=""
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="remember"
                  className="text-black dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
            </div>
            <Link
              href="#"
              className="text-sm hover:text-myTheme font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-black active:bg-myTheme  font-medium rounded text-sm px-5 py-2.5 text-center "
          >
            Login
          </button>
          <p className="text-sm font-light text-black dark:text-gray-400">
            Don’t have an account yet?{" "}
            <Link
              to="/SiginUp"
              className="font-medium text-black hover:text-myTheme text-primary-600 hover:underline "
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>


    
  );
}

export default Login;