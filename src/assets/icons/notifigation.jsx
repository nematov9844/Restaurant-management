import { Layout, Menu, Badge, Dropdown } from "antd";
import { BellOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const NotificationIcon = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">Bildirishnoma 1</Menu.Item>
      <Menu.Item key="2">Bildirishnoma 2</Menu.Item>
      <Menu.Item key="3">Bildirishnoma 3</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown menu={menu} trigger={['click']}>
      <Badge count={2}>
        <BellOutlined style={{ fontSize: '24px', color: 'white' }} />
      </Badge>
    </Dropdown>
  );
};


export default NotificationIcon;
