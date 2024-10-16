import s from './ImageCard.module.css'

const ImageCard = ({ url, largeImage, description, openModal }) => {
  const handleClick = () => {
    openModal(largeImage, description)
  };
  return (
    <div className={s.cardDiv}>
      <img src={url} alt={description} onClick={handleClick} />
    </div>
  );
};

export default ImageCard;
