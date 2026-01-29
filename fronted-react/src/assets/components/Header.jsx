import { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { AuthContext } from "../../AuthProvider";

function Header() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar container pt-3 pb-3 align-items-start">
      <Link className="navbar-brand text-light" to="/">
        Stock Prediction Portal
      </Link>

      <div>
        {isLoggedIn ? (
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <>
            <Button url="/login" className="btn-outline-info">
              Login
            </Button>
            &nbsp;
            <Button url="/register" className="btn-info">
              Register
            </Button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Header;
