import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-gray-100 w-64 h-screen flex flex-col">
     

      <nav className="flex-1 p-4">
        <ul className="space-y-4">
          <li className="flex items-center space-x-3 hover:text-white">
            
            <a href="#" className="font-medium">Dashboard</a>
          </li>
          <li className="flex items-center space-x-3 hover:text-white">
            
            <a href="#" className="font-medium">Team</a>
          </li>
          <li className="flex items-center space-x-3 hover:text-white">
            <a href="#" className="font-medium">Projects</a>
          </li>
          
        </ul>
      </nav>

     
    </div>
  );
};

export default Sidebar;
