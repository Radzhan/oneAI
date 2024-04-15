import { useNavigate } from "react-router-dom";
import "./Card.scss";

interface Props {
  src: string;
  name: string;
}

const Card: React.FC<Props> = ({ src, name }) => {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate("/result")}>
      <img className="card-image" src={src} alt="img" />
      <h3 className="name">{name}</h3>
    </div>
  );
};

export default Card;
