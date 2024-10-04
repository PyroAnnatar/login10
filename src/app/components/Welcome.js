import React from "react";

const Welcome = () => {
  return (
    <div className="bg-[#DC5B12]  text-white h-screen w-10/12 flex justify-center items-center">
      <div className="flex flex-col gap-16 w-3/5 text-center">
        <h1 className="font-bold text-7xl">Welcome Back</h1>

        <p className="text-[#FFFFFFB2] font-bold text-[20px]">
          Sign in with your credentials <br /> to enjoy our uninterrupted
          services
        </p>

        <p className="text-[#00000066] font-semibold text-[20px]">
          <a href="#">Don't have an account yet? </a>
        </p>

        <div className="mx-auto">
          <img src="/cart.png" alt="shopping cart" />
        </div>

        <button className="bg-transparent border-2 border-[#ecececbd] uppercase py-3 px-4 text-xl font-bold rounded-[50px] w-3/4 mx-auto hover:bg-white hover:text-[#DC5B12] duration-300">
          Click here to sign up
        </button>
      </div>
    </div>
  );
};

export default Welcome;
