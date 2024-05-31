import React, { useState } from "react";
import "./Modal.scss";
import exitIcon from "../../assets/clear-svgrepo-com.svg";
import netflixLogo from "../../assets/Netflix-Logo.wine.svg";
import nbaTvLogo from "../../assets/NBA_TV_Canada-Logo.wine.svg";
import fxLogo from "../../assets/FX_(Canadian_TV_channel)-Logo.wine.svg";
// import telusLogo from "../assets/Telus-Logo.svg"

function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button className="btn-modal" onClick={toggleModal}>
        Open
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="title-img__container">
              <h2 className="modal-title">Checkout with TELUS</h2>
              <img
                className="close-modal"
                onClick={toggleModal}
                src={exitIcon}
              />
            </div>
            <div className="content-container">
            <div className="card-container">
              <div className="img-container">
                <img className="card-img" src={netflixLogo} alt="" />
              </div>
              <div className="card-content-container">
                <h2 className="card-title">Netflix</h2>
                <h4 className="card-subtitle">Streaming Service</h4>
                <h3 className="card-price">$7.99</h3>
              </div>
            </div>
            <div className="card-container">
              <div className="img-container">
                <img className="card-img" src={nbaTvLogo} alt="" />
              </div>
              <div className="card-content-container">
                <h2 className="card-title">Sportsnet</h2>
                <h4 className="card-subtitle">Sports</h4>
                <h3 className="card-price">$2.99</h3>
              </div>
            </div>
            <div className="card-container">
              <div className="img-container">
                <img className="card-img" src={fxLogo} alt="" />
              </div>
              <div className="card-content-container">
                <h2 className="card-title">CBC</h2>
                <h4 className="card-subtitle">News Channel</h4>
                <h3 className="card-price">$2.99</h3>
              </div>
            </div>
            </div>
            <div className="button-container">
              <button className="checkout-button">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
      </>
  );
}

export default Modal;
