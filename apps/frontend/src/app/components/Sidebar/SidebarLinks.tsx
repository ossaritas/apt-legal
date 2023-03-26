import { NavLink } from 'react-router-dom';
import { IconType } from 'react-icons';
import {
  AiOutlineBank,
  AiOutlineCoffee,
  AiOutlineDashboard,
  AiOutlineFolderOpen,
  AiOutlineHome,
  AiOutlineLogout,
  AiOutlinePaperClip,
  AiOutlineRest,
} from 'react-icons/ai';
import clsx from 'clsx';
import sidebarNav from '../../../config/sidebarNav';

const icons: Record<string, IconType> = {
  AiOutlineHome,
  AiOutlineDashboard,
  AiOutlineCoffee,
  AiOutlineFolderOpen,
  AiOutlineBank,
  AiOutlinePaperClip,
  AiOutlineRest,
  AiOutlineLogout,
};

const SidebarLinks = () => {
  return (
    <nav className="mt-3 flex flex-col gap-2">
      {sidebarNav.map((element, index) => {
        const Icon: IconType = icons[element.icon];
        return (
          <NavLink
            key={index}
            className={({ isActive }: { isActive: boolean }) =>
              clsx(
                'hover:bg-c-5 group flex items-center gap-2 rounded-md py-2 px-4 text-gray-400  hover:text-white',
                isActive ? 'bg-c-4  ' : ''
              )
            }
            to={element.link}
          >
            {({ isActive }: { isActive: boolean }) => (
              <>
                <Icon
                  className={clsx(
                    'fill-gray-400 text-2xl group-hover:fill-white',
                    isActive ? '!fill-yellow-600 ' : ''
                  )}
                />
                <span
                  className={clsx(
                    'pl-2 text-gray-400 group-hover:text-white',
                    isActive ? '!text-yellow-600' : ''
                  )}
                >
                  {element.text}
                </span>
              </>
            )}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default SidebarLinks;
