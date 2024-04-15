import "./Result.scss";
import { MdArrowBackIos } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { HiOutlineCamera } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="result">
        <button className="go-back-btn" onClick={() => navigate("/")}>
          <MdArrowBackIos
            style={{
              color: "#000000",
            }}
          />
          Go back
        </button>
        <div className="result-photo-block">
          <img
            src="https://i.pinimg.com/originals/57/61/5b/57615b8c0092a66c1d4058b1692955cc.gif"
            alt="gif"
          />
          <div className="result-btn-group">
            <button className="gallery-btn" onClick={() => navigate('/upload')}>
              <GrGallery
                style={{
                  color: "#ffffff",
                }}
              />
              Choose photo from gallery
            </button>
            <button className="camera-btn" onClick={() => navigate('/upload')}>
              <HiOutlineCamera
                style={{
                  color: "#ffffff",
                }}
              />
              Take photo with camera
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
