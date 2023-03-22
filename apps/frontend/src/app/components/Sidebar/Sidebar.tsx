import logo from '../../../assets/lg.png';
import {
  AiOutlineHome,
  AiOutlineDashboard,
  AiOutlineCoffee,
  AiOutlineFolderOpen,
  AiOutlineBank,
  AiOutlinePaperClip,
  AiOutlineRest,
  AiOutlineLogout,
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
    <div className=" flex h-screen w-64 flex-col bg-gray-800">
      <div className="flex h-20 w-full items-center justify-center ">
        <div className="mt-8 mb-8 w-10 self-center">
          <img src={logo} alt="logo" />
        </div>
        <h1 className="ml-2 select-none text-2xl font-bold text-white">
          APT LEGAL
        </h1>
      </div>
      <div className="flex-grow">
        <nav className="flex flex-col">
          {sidebarNav.map((element) => {
            const Icon: IconType = icons[element.icon];
            return (
              <NavLink
                key={element.text}
                className={({ isActive }) =>
                  clsx(
                    'group flex items-center py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white',
                    isActive ? 'bg-gray-700 text-white ' : ''
                  )
                }
                to={element.link}
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      className={clsx(
                        'text-2xl group-hover:fill-white',
                        isActive ? 'fill-white ' : ''
                      )}
                    />
                    <span className="pl-2 text-inherit group-hover:text-white">
                      {element.text}
                    </span>
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div className="flex h-20 w-full items-center justify-center text-white">
        <button className="flex items-center rounded-lg bg-red-500 px-4 py-2 hover:bg-red-600 focus:outline-none">
          <span>Çıkış Yap</span>
          <AiOutlineLogout size={20} className="mr-2" />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
