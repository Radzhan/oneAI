import { useNavigate } from "react-router-dom";
import "./Upload.scss";

const Upload = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="upload-page">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMR4OmbhTpfRqt4syxeOVt7l6WrMwyP08aPV4dPfiw_A&s"
          alt="lego"
        />
        <div className="upload-page-btns">
          <button className="upload-save-btn">Save</button>
          <button className="upload-more-btn" onClick={() => navigate("/")}>
            More pics
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upload;
