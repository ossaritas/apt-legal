import GlassPane from './Pane';

export default function Layout({ children }) {
  return (
    <div className="bg-c-1 h-screen w-screen p-4">
      <GlassPane className="align-center container mx-auto flex h-full w-full p-6">
        {children}
      </GlassPane>
    </div>
  );
}
