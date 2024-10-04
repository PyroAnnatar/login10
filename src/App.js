import React from "react";
import Login from "./app/components/Login";
import Welcome from "./app/components/Welcome";

const App = () => {
  return (
    <div className="h-screen overflow-hidden flex justify-center items-center">
      <Welcome />
      <Login />
    </div>
  );
};

export default App;
