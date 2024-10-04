import React from "react";

const Login = () => {
  return (
    <div className="w-full p-20 flex justify-center items-center bg-white z-50 min-w-[350px] h-screen">
      <div className="w-3/4 flex flex-col gap-4">
        <h1 className="uppercase text-7xl text-[#000000CC] font-bold mb-2 text-center">
          Sign in to shey
        </h1>

        <div className="flex justify-around w-1/2 mx-auto my-4">
          <a href="#" className="">
            <img src="/google.png" alt="google link" />
          </a>
          <a href="#" className="">
            <img src="/in.png" alt="linkedin link" />
          </a>
          <a href="#" className="">
            <img src="/github.png" alt="github link" />
          </a>
        </div>

        <div className="flex items-center">
          <hr className="flex-grow border-[1px] border-black/40" />
          <span className="uppercase px-2 font-semibold text-2xl">or</span>
          <hr className="flex-grow border-[1px] border-black/40" />
        </div>

        <p className="text-[#00000066] text-[26px] font-semibold text-center mb-5">
          use email and password
        </p>

        <div className="flex flex-col gap-12">
          <input
            type="text"
            placeholder="Username"
            className="py-4 px-8 text-xl rounded-[50px] text-black placeholder-[#00000036] bg-[#ECECECC2]"
          />
          <input
            type="Password"
            placeholder="Password"
            className="py-4 px-8 text-xl rounded-[50px] text-black placeholder-[#00000036] bg-[#ECECECC2]"
          />
          <button className="uppercase rounded-[50px] py-3 px-4 bg-[#DC5B12] text-white font-bold text-3xl border-2 border-[#DC5B12] hover:bg-white hover:text-[#DC5B12] hover:border-1 hover:border-[#DC5B12] duration-300">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
