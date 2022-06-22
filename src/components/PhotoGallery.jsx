import React from "react";
import PhotoItem from "./PhotoItem";
import photoItem from "./PhotoItem";

const PhotoGallery = ({ items }) => {
  return (
    <div className="photo-gallery">
      {items.map((photo) => (
        <PhotoItem photo={photo} key={photo.id} />
      ))}
    </div>
  );
};

export default PhotoGallery;
