import ImageCard from "../ImageCard/ImageCard";
import s from './ImageGallery.module.css'

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={s.list}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard
            url={image.urls.small}
            largeImage={image.urls.regular}
            description={image.alt_description}
            openModal={openModal}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
