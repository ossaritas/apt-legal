import { AiOutlineLogout } from 'react-icons/ai';
import logo from '../../../assets/lg.png';
import Button from '../UI/Button';
import SidebarLinks from './SidebarLinks';

const Sidebar: React.FC = () => {
  return (
    <div className="bg-c-3 sticky top-0 flex h-screen flex-col p-2">
      <div className="flex h-20 w-full items-center justify-center">
        <div className="mt-8 mb-8 w-10 self-center">
          <img src={logo} alt="logo" />
        </div>
        <h1 className="ml-2 select-none text-xl font-bold text-yellow-600">
          APT LEGAL
        </h1>
      </div>
      <div className="flex-grow">
        <SidebarLinks />
      </div>

      <div className="flex h-20 w-full items-center justify-center text-white">
        <Button variant="danger" className="flex items-center">
          <span>Çıkış Yap</span>
          <AiOutlineLogout size={20} className="mr-2" />
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
