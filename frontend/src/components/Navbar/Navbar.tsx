import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useState } from "react";
import Registr from "../Registr/Registr";
import { useAppSelector } from "../../app/GlobalStore/hooks";
import { getUser } from "../../store/OpenAISlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isUser = useAppSelector(getUser);
  
  return (
    <div className="navbar">
      <div className="logo container">
        <Link to="/">OneAI</Link>
        {!isUser && (
          <button onClick={() => setIsOpen(true)} className="signIn-btn">
            Sign in
          </button>
        )}
      </div>
      <Registr isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Navbar;
