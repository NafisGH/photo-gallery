import React from "react";
import Modal from "react-modal";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import "../image-modal.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose, photo, currentIndex, totalPhotos, onPrevious, onNext }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="overlay"
      contentLabel="Image Modal"
    >
      <div className="modal-content">
        <div className="modal-body">
          {photo.image && (
            <img src={`http://localhost:8055/assets/${photo.image}`} alt={photo.title} className="modal-image" />
          )}
        </div>
        <div className="modal-header">
          
          <span className="photo-index">{`${currentIndex + 1} / ${totalPhotos}`}</span>
          <button className="nav-button" onClick={onPrevious} disabled={currentIndex === 0}>
            <FaArrowLeft/>
          </button>
          <button className="nav-button" onClick={onNext} disabled={currentIndex === totalPhotos - 1}>
            <FaArrowRight/>
          </button>
          <button className="close-button" onClick={onRequestClose}>
            <FaTimes/>
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
