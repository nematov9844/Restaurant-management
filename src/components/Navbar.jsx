import { Layout, Menu } from "antd";
import { Link } from 'react-router-dom';
import DashboardIcon from "../assets/icons/dashboard_icon";
import Menuicon from "../assets/icons/menuicon";
import ProductIcon from "../assets/icons/productIcon";
import FavoritesIcon from "../assets/icons/favorites";
import InboxIcon from "../assets/icons/inboxIcon";
import OrderIcon from "../assets/icons/orderIcon";

const { Sider } = Layout;

const items = [
  { label: <Link to="/"><Menuicon /></Link>, key: "1" },
  { label: <Link to="/dashboard"><DashboardIcon /></Link>, key: "2" },
  { label: <Link to="/products"><ProductIcon /></Link>, key: "3" },
  { label: <Link to="/favorite"><FavoritesIcon /></Link>, key: "4" },
  { label: <Link to="/inbox"><InboxIcon /></Link>, key: "5" },
  { label: <Link to="/orderlist"><OrderIcon /></Link>, key: "6" },
];

const Navbar = () => (
  <Sider  width={86} collapsedWidth={80}>
    <Menu  theme="dark" mode="inline" items={items} />
  </Sider>
);

export default Navbar;
