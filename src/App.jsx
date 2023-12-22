import React , { useState }  from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import List from "./components/List";

const App = () => {
  const [activeMenu, setActiveMenu] = useState("contact");

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="mainDiv w-96 h-[600px]  border-2 border-solid border-gray-100 rounded-sm">
        <Header />
        <Menu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <List setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
      </div>
    </div>
  );
};

export default App;
