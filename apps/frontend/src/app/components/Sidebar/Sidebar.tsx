import logo from '../../../assets/lg.png';
import {
  AiOutlineHome,
  AiOutlineDashboard,
  AiOutlineCoffee,
  AiOutlineFolderOpen,
  AiOutlineBank,
  AiOutlinePaperClip,
  AiOutlineRest,
} from 'react-icons/ai';
import sidebarNav from '../../../config/sidebarNav';
import { NavLink } from 'react-router-dom';
import { IconType } from 'react-icons';
import clsx from 'clsx';

const icons = {
  AiOutlineHome,
  AiOutlineDashboard,
  AiOutlineCoffee,
  AiOutlineFolderOpen,
  AiOutlineBank,
  AiOutlinePaperClip,
  AiOutlineRest,
};

const SideBar = () => {
  return (
    <div className="bg-gray-300">
      <nav className="flex flex-col">
        <div className="mt-8 mb-8 w-12 self-center">
          <img className="" src={logo} alt="logo" />
        </div>
        <ul className="mt-4 mb-4">
          {sidebarNav.map((element) => {
            const Icon: IconType = icons[element.icon];
            return (
              <li key={element.text} className="group mb-2 flex flex-col pb-2">
                <NavLink
                  className={({ isActive }) =>
                    clsx(
                      'flex items-center border-b-2 border-t-2  border-transparent p-2 text-xl',
                      isActive ? 'group/i bg-gray-400 text-blue-600 ' : ''
                    )
                  }
                  to={element.link}
                >
                  <div className="pl-1">
                    <Icon className=" fill-blue-800 text-2xl" />
                  </div>
                  <span className="pl-2 text-inherit">{element.text}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button>Logout</button>
      </nav>
    </div>
  );
};

export default SideBar;
