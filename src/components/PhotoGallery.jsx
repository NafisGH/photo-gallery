import React, { useEffect, useState } from "react";
import axios from "axios";
import { observer } from "mobx-react-lite";
import photoStore from "../stores/PhotoStore";
import "../photo-gallery.css";
import ImageModal from "./ImageModal";

const PhotoGallery = observer(() => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const response = await axios.get(
          "http://localhost:8055/items/photos"
        );
        photoStore.setPhotos(response.data.data);
      } catch (error) {
        console.error("Error fetching photos: !!!!!", error);
      }
    }
    fetchPhotos();
  }, []);

  const openModal = (index) => {
    setSelectedPhotoIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedPhotoIndex(null);
  };

  const showPreviousPhoto = () => {
    if (selectedPhotoIndex > 0) {
      setSelectedPhotoIndex(selectedPhotoIndex - 1);
    }
  };

  const showNextPhoto = () => {
    if (selectedPhotoIndex < photoStore.photos.length - 1) {
      setSelectedPhotoIndex(selectedPhotoIndex + 1);
    }
  };

  return (
    <div className="photo-gallery">
      <ul className="photo-list">
        {photoStore.photos.map((photo, index) => (
          <li key={photo.id} className="photo-item" onClick={() => openModal(index)}>
            {photo.image && (
              <img src={`http://localhost:8055/assets/${photo.image}`} alt={photo.title} className="photo-image" />
            )}
          </li>
        ))}
      </ul>
      {selectedPhotoIndex !== null && (
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          photo={photoStore.photos[selectedPhotoIndex]}
          currentIndex={selectedPhotoIndex}
          totalPhotos={photoStore.photos.length}
          onPrevious={showPreviousPhoto}
          onNext={showNextPhoto}
        />
      )}
    </div>
  );
});

export default PhotoGallery;
