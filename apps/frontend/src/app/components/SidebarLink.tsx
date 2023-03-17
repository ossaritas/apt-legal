import { Link } from 'react-router-dom';
import {
  BsPeople,
  BsBriefcase,
  BsCalculator,
  BsDiagram3,
} from 'react-icons/bs';
import { IconType } from 'react-icons';

const icons = {
  BsPeople,
  BsBriefcase,
  BsCalculator,
  BsDiagram3,
};

const SidebarLink = ({ link, title, icon }) => {
  const Icon: IconType = icons[icon];
  return (
    <div className="flex w-full cursor-pointer   border-b-2 hover:bg-slate-500 hover:text-white">
      <Icon color="#00000" size={25} />
      <Link to={link}>{title?.en}</Link>
    </div>
  );
};

export default SidebarLink;
