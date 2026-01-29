import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/token/",
        { username, password }
      );

      localStorage.setItem("accessToken", response.data.access);
      localStorage.setItem("refreshToken", response.data.refresh);

      setIsLoggedIn(true);
      navigate("/");
    } catch (err) {
      setError("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 bg-light-dark p-5 rounded">
          <h3 className="text-light text-center mb-4">Login to our Portal</h3>

          <form onSubmit={handleLogin}>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <div className="text-danger mb-2">{error}</div>}

            <button
              type="submit"
              className="btn btn-info d-block mx-auto"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
