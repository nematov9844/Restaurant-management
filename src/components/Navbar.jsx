import { Button, Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import {
  AppstoreOutlined,
  DashboardOutlined,
  HeartOutlined,
  InboxOutlined,
  ShoppingCartOutlined,
  DatabaseOutlined, // For Products Management
  UserOutlined, // For Employees Management
  FileTextOutlined, // For Orders
  ShopOutlined, // For Restaurant Information
  DollarOutlined, // For Payments
  TagsOutlined, // For Promotions
  SettingOutlined, // For Settings
  QuestionCircleOutlined, // For Support
  ArrowRightOutlined, // Right arrow icon
  ArrowLeftOutlined, // Left arrow icon
} from "@ant-design/icons"; 
import { useState } from "react"; // useState import qilish

const { Sider } = Layout;

const items = [
  { label: <Link to="dashboard">Dashboard</Link>, key: "2", icon: <DashboardOutlined /> },
  { label: <Link to="products">Mahsulotlar</Link>, key: "3", icon: <ShoppingCartOutlined /> },
  { label: <Link to="employees">Xodimlar</Link>, key: "4", icon: <UserOutlined /> },
  { label: <Link to="orders">Buyurtmalar</Link>, key: "5", icon: <FileTextOutlined /> },
  { label: <Link to="restaurant">Restoran Ma'lumotlari</Link>, key: "6", icon: <ShopOutlined /> },
  { label: <Link to="payments">To'lovlar</Link>, key: "7", icon: <DollarOutlined /> },
  { label: <Link to="promotions">Aktsiyalar</Link>, key: "8", icon: <TagsOutlined /> },
  { label: <Link to="settings">Sozlamalar</Link>, key: "9", icon: <SettingOutlined /> },
  { label: <Link to="support">Qo'llab-quvvatlash</Link>, key: "10", icon: <QuestionCircleOutlined /> },
];

const Navbar = ({ theme }) => {
  const [collapsed, setCollapsed] = useState(false); // Navbarning holatini boshqarish uchun useState

  const toggleNavbar = () => {
    setCollapsed(!collapsed); // Holatni o'zgartirish
  };

  return (
    <>
      <Button theme={theme}
        onClick={toggleNavbar} 
        className={`mb-4 absolute top-3 transition-all duration-200 ${collapsed ? 'left-3' : 'left-52'}`}
      >
        {collapsed ? <ArrowRightOutlined /> : <ArrowLeftOutlined />}
      </Button>
      <Sider
        width={collapsed ? 0 : 200} // Yopiq bo'lsa 0, aks holda 86
        collapsedWidth={80}
        theme={theme}
        className={` ${theme === "dark" ? "bg-[rgb(39, 49, 66)]" : "bg-white text-black"}`}
        style={{ transition: 'width 0.2s' }} // O'tish effektini qo'shish
      >
        <Menu
          mode="inline"
          items={items}
          theme={theme}
          className={`${
            theme === "dark"
              ? "bg-[rgb(39, 49, 66)] text-white"
              : "bg-[rgb(240, 240, 240)] text-black"
          }`}
        />
      </Sider>
    </>
  );
};

export default Navbar;
