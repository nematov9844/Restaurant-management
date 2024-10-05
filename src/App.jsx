import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Navbar from "./components/Navbar";
import Users from "./pages/Users";
import Orders from "./pages/Orders";
import HeaderComponent from "./layout/headerDetails";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Favorite from "./pages/Favorite";
import Inbox from "./pages/Inbox";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import getData from "./services/api";

const { Header, Content } = Layout;

const App = () => {
  const [dataBase, setDataBase] = useState({});
  const [state, setState] = useState(0);

  useEffect(() => {
    const getData = async (path) => {
      try {
        const res = await fetch(`https://restouran-menegment-data.vercel.app/${path}`);
        const data = await res.json();
        setDataBase(data);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
      }
    };

    getData("users");
  }, [state]); 

  useEffect(() => {
    console.log(dataBase);
  }, [dataBase]);

  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Navbar />
        <div className="w-full">
          <Header theme="dark">
            <HeaderComponent />
          </Header>

          <Content className="bg-[rgba(0,21,47,0.9)] text-white text-4xl font-bold p-5 w-full h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
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
};

export default App;
