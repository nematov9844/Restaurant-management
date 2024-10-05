import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from "antd";
import Navbar from './components/Navbar';
import Users from './pages/Users';
import Orders from './pages/Orders';
import HeaderComponent from './layout/headerDetails';
import Dashboard from './pages/Dashboard';

const { Header, Content } = Layout;

const App = () => (
  <Router>
    <Layout style={{ minHeight: "100vh" }}>
      <Navbar/>
      <div className='w-full'>
      <Header theme="dark"><HeaderComponent/></Header>

      <Content className='bg-green-500 w-full h-screen'>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/users" element={<Users />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Content>
      </div>
    </Layout>
  </Router>
);

export default App;
