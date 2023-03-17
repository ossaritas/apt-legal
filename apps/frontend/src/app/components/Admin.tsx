import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';

const Admin = () => {
  return (
    <div className="bg-c-3 grid p-4">
      <Sidebar />
      <Content />
    </div>
  );
};

export default Admin;
