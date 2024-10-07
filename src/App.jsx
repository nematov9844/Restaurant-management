// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Login from "./components/Auth/Login";
import { AuthProvider } from "./components/Auth/AuthContext"; // AuthProvider ni import qilish
import Dela from "./pages/dela"; // Dela komponentini import qilish

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Layout style={{ minHeight: "100vh" }} className="font-bold">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/loginAuth/*" element={<Dela />} /> {/* Dela sahifasi */}
            <Route path="/" element={<Login />} /> {/* Login sahifasi */}
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
};

export default App;
