import { Layout ,Button } from "antd";
import { SunOutlined, MoonOutlined } from '@ant-design/icons';
import avatar from "../assets/image/avatar.png";
import NotificationIcon from "../assets/icons/notifigation";

const { Header } = Layout;

const HeaderComponent = ({ theme ,toggleTheme}) => (
  <Header
    className={`${
      theme === "dark"
        ? "bg-[rgba(39,49,66,1)] text-white border-white"
        : "border-black bg-white text-black"
    } flex justify-between items-center px-4`}
  >
    <div className="text-xl font-bold">Admin Panel</div>
    <div className="flex items-center gap-4">
      <div className="relative">
        <NotificationIcon />
      </div>
      <Button onClick={toggleTheme} className="bg-gray-500 text-white w-[10px] h-[30px] rounded-full">
    {theme === "dark" ? <SunOutlined /> : <MoonOutlined  />}
  </Button>
      <div className="flex items-center">
        <img
          src={avatar}
          alt="User Avatar"
          className="w-8 h-8 rounded-full border"
        />
      </div>
      <p className="flex flex-col text-sm">
        <span>Moni Roy</span>
        <span>Admin</span>
      </p>
    </div>
  </Header>
);

export default HeaderComponent;
