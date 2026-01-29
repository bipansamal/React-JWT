import "./assets/css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthProvider from "./AuthProvider";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Main from "./assets/components/Main";
import Login from "./assets/components/Login";
import Register from "./assets/components/Register";
import Dashboard from "./assets/components/dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<PublicRoute><Login/></PublicRoute>} />
          <Route path="/register" element={<PublicRoute><Register/></PublicRoute>} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
        </Routes>

        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
