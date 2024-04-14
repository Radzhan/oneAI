import { Link } from "react-router-dom";
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo container">
        <Link to="/">OneAI</Link>
      </div>
    </div>
  );
};

export default Navbar;
