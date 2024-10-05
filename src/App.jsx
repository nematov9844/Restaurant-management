import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from "antd";
import Navbar from './components/Navbar';
import Users from './pages/Users';
import Orders from './pages/Orders';
import HeaderComponent from './layout/headerDetails';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Favorite from './pages/Favorite';
import Inbox from './pages/Inbox';
import Home from './pages/Home';

const { Header, Content } = Layout;

const App = () => (
  <Router>
    <Layout style={{ minHeight: "100vh" }}>
      <Navbar/>
      <div className='w-full'>
      <Header theme="dark"><HeaderComponent/></Header>

      <Content  className='bg-[rgba(0,21,47,0.9)] text-white text-4xl font-bold p-5 w-full h-screen'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/products" element={<Products />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/orderList" element={<Orders />} />
        </Routes>
      </Content>
      </div>
    </Layout>
  </Router>
);

export default App;
