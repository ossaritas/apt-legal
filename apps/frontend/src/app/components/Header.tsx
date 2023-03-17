import React from 'react';
import logo from '../../assets/lg.png';
import { BiUserCircle, BiHomeAlt } from 'react-icons/bi';

const Header = () => {
  return (
    <div className=" bg-c-1 fixed top-0 flex h-16 w-full items-center justify-between px-4 py-2 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      <div className="flex items-center justify-center p-2">
        <BiHomeAlt size={'35px'} />
        <text className="ml-2">SARITAŞ HUKUK BÜROSU</text>
      </div>
      <div className="flex justify-center">
        <img src={logo} alt="logo" className="h-10 w-10" />
      </div>
      <div className="m-1 h-10 w-10">
        <BiUserCircle size={'35px'} />
      </div>
    </div>
  );
};

export default Header;
