import React from 'react';
import SideBar from '../Sidebar/Sidebar';

const Layout = ({ children }) => {
  return (
    <div className=" grid h-screen grid-cols-[1fr_6fr]  bg-gray-600">
      <SideBar />
      <header>
        <img src="" alt="" />
        <button>Me</button>
      </header>
    </div>
  );
};

export default Layout;
