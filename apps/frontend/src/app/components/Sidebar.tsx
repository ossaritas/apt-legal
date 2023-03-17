import React from 'react';
import SidebarLink from './SidebarLink';
import SidebarUser from './SidebarUser';

const links = [
  {
    title: { tr: 'Müvekkiller', en: 'Clients' },
    link: '/clients',
    icon: 'BsDiagram3',
  },
  {
    title: { tr: 'Dosyalar', en: 'Cases' },
    link: '/cases',
    icon: 'BsBriefcase',
  },
  {
    title: { tr: 'Muhasebe', en: 'Accounting' },
    link: '/accounting',
    icon: 'BsCalculator',
  },
  { title: { tr: 'Ofis', en: 'Office' }, link: '/office', icon: 'BsPeople' },
];

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center rounded p-2 text-lg shadow">
      <SidebarUser />
      {links.map((link) => {
        return (
          <SidebarLink title={link.title} link={link.link} icon={link.icon} />
        );
      })}
    </div>
  );
};

export default Sidebar;
