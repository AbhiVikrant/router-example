import React from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";
const App = () => {
  const users = [
    {
      fullName: "Abhishek",
      email: "abhi@word.com",
      gender: "male"
    },
    {
      fullName: "Praveen",
      email: "praveen@word.com",
      gender: "male"
    },
    {
      fullName: "Santosh",
      email: "santosh@word.com",
      gender: "male"
    },
    {
      fullName: "Ruchi",
      email: "ruchi@word.com",
      gender: "female"
    },
    {
      fullName: "Princy",
      email: "princy@word.com",
      gender: "female"
    }
  ];

  return (
    <div>
      React-Router
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
