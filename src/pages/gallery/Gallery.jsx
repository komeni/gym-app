import React from "react";
import "./Gallery.css";
import Header from "../../components/Header";
import GalleryImage from "../../images/header_bg_3.jpg";

const Gallery = () => {
  const galleryLength = 15;
  const images = [];

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`));
  }
  return (
    <>
      <Header title="Our Gallery" image={GalleryImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur minus
        ad voluptatibus, reiciendis omnis dolorum.
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {images.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} alt="galleryimage" />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
