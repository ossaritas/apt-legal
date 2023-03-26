interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="grid h-screen grid-cols-[1fr_6fr] overflow-auto bg-gray-600">
      {children}
    </div>
  );
};

export default Layout;
