import React from 'react';
import SideBar from '../Sidebar/Sidebar';
import Card from '../UI/Card';
import Input from '../UI/Input';

const Layout = ({ children }) => {
  return (
    <div className=" grid h-screen grid-cols-[1fr_6fr]  bg-gray-600">
      <SideBar />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Input />
        <Card title={'asdasd'} description="aasdasd" />
        <Card title={'asdasd'} description="aasdasd" />
        <Card title={'asdasd'} description="aasdasd" />
        <Card title={'asdasd'} description="aasdasd" />
        <Card title={'asdasd'} description="aasdasd" />
        <Card title={'asdasd'} description="aasdasd" />
        <Card title={'asdasd'} description="aasdasd" />
      </div>
    </div>
  );
};

export default Layout;
