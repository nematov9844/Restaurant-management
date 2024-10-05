import { NotificationFilled } from "@ant-design/icons";
import { Layout } from "antd";
import avatar from "../assets/image/avatar.png";
import NotificationIcon from "../assets/icons/notifigation";

const { Header } = Layout;

const HeaderComponent = () => (
  <Header className="flex justify-between items-center px-4">
    <div className="text-white text-xl font-bold">Admin Panel</div>
    <div className="flex items-center gap-4">
      <div className="relative">
        <NotificationIcon />
      </div>
      <div className="flex items-center">
        <img 
          src={avatar} 
          alt="User Avatar" 
          className="w-8 h-8 rounded-full border border-white" 
        />
      </div>
      <p className="flex flex-col text-white text-sm">
        <span>Moni Roy</span>
        <span>Admin</span>
      </p>
    </div>
  </Header>
);

export default HeaderComponent;
