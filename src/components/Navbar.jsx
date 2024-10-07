import { Layout, Menu } from "antd";
import { Link } from 'react-router-dom';
// Ant Design ikonlarini import qilamiz
import { AppstoreOutlined, DashboardOutlined, HeartOutlined, InboxOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const items = [
  { label: <Link to="/">Menu</Link>, key: "1", icon: <AppstoreOutlined /> },  // Menu icon
  { label: <Link to="/dashboard">Dashboard</Link>, key: "2", icon: <DashboardOutlined /> },  // Dashboard icon
  { label: <Link to="/products">Products</Link>, key: "3", icon: <ShoppingCartOutlined /> },  // Product icon
  { label: <Link to="/favorite">Favorite</Link>, key: "4", icon: <HeartOutlined /> },  // Favorites icon
  { label: <Link to="/inbox">Inbox</Link>, key: "5", icon: <InboxOutlined /> },  // Inbox icon
];

const Navbar = () => (
  <Sider  collapsedWidth={80}>
    <Menu mode="inline" items={items} theme="dark" />
  </Sider>
);

export default Navbar;
