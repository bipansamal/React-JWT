import { Link } from "react-router-dom";

const Button = ({ children, className, url }) => {
  return (
    <Link to={url} className={`btn ${className}`}>
      {children}
    </Link>
  );
};

export default Button;
