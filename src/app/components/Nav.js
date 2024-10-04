import React from "react";

const Nav = () => {
  return (
    <nav className="text-white bg-[#095F59] flex justify-between py-4 px-8 items-center fixed w-full z-40">
      <h1 className="uppercase text-4xl font-bold">
        <a href="#">Shey</a>
      </h1>
      <ul className="text-xl flex justify-between gap-8">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
