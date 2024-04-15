import { GrClose } from "react-icons/gr";
import "./Registr.scss";
import { useAppDispatch } from "../../app/GlobalStore/hooks";
import { Navigate, useNavigate } from "react-router-dom";
import { setUser } from "../../store/OpenAISlice";
import React, { FormEvent } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Registr: React.FC<Props> = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setUser());
    onClose()
  };

  return (
    <>
      {isOpen && (
        <div className="registr">
          <div className="mini-container">
            <button className="btn-close" onClick={() => onClose()}>
              <GrClose
                style={{
                  color: "#FC440F",
                }}
              />
            </button>
            <form onSubmit={submitForm}>
              <div className="form">
                <div>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="Email"
                  />
                  <input
                    type="password"
                    className="form-input"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" className="btn-submit">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Registr;
