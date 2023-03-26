import Layout from './components/Layout/Layout';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Layout/Content';

export function App() {
  return (
    <Layout>
      <Sidebar />
      <Content />
    </Layout>
  );
}

export default App;
