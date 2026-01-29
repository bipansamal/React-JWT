import "./assets/css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthProvider from "./AuthProvider";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Main from "./assets/components/Main";
import Login from "./assets/components/Login";
import Register from "./assets/components/Register";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
