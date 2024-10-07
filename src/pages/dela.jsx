// pages/Dela.jsx
import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd"; // Menu qo'shish
import { Routes, Route, Link } from "react-router-dom"; // Link import qilish
import HeaderComponent from "../layout/headerDetails"; // HeaderComponent importi
import Navbar from "../components/Navbar"; // Navbar importi
import Dashboard from "./Dashboard"; // Dashboard sahifasini import qilish
import Products from "./Products"; // Products sahifasini import qilish
import Favorite from "./Favorite"; // Favorite sahifasini import qilish
import Inbox from "./Inbox"; // Inbox sahifasini import qilish
import Orders from "./Orders"; // Orders sahifasini import qilish
import PrivateRoute from "../components/Auth/PrivateRoute"; // PrivateRoute ni import qilish

const { Header, Content } = Layout;

const Dela = () => {
  const [dataBase, setDataBase] = useState({});
  const [state, setState] = useState(0);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const getData = async (path) => {
      try {
        const res = await fetch(
          `https://restouran-menegment-data.vercel.app/${path}`
        );
        const data = await res.json();
        setDataBase(data);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
      }
    };

    getData("users");
  }, [state]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <Layout style={{ minHeight: "100vh" }} className={`${theme} font-bold`}>
      <Navbar theme={theme} />
      <div className="w-full">
        <Header
          className={`${
            theme === "dark"
              ? "bg-[rgba(39,49,66,1)] text-white border-white"
              : "border-black bg-white text-black"
          }`}
        >
          <HeaderComponent theme={theme} toggleTheme={toggleTheme} />
        </Header>

        <Content
          className={`p-5 w-full h-[100vh] ${
            theme === "light"
              ? "bg-[rgb(240,240,240)] text-black"
              : "bg-[rgba(27,36,49,1)] text-white"
          }`}
        >
          <Routes>
            <Route
              path="dashboard"
              element={<PrivateRoute component={Dashboard} />}
            />
            <Route
              path="products"
              element={<PrivateRoute component={Products} />}
            />
            <Route
              path="favorite"
              element={<PrivateRoute component={Favorite} />}
            />
            <Route path="inbox" element={<PrivateRoute component={Inbox} />} />
            <Route
              path="orderList"
              element={<PrivateRoute component={Orders} />}
            />
          </Routes>
        </Content>
      </div>
    </Layout>
  );
};

export default Dela;
