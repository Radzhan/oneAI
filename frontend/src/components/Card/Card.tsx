import "./Card.scss";

interface Props {
  src: string;
  name: string;
}

const Card: React.FC<Props> = ({ src, name }) => {
  return (
    <div className="card">
        <img className="card-image" src={src} alt="img" />
      <h3 className="name">{name}</h3>
    </div>
  );
};

export default Card;
