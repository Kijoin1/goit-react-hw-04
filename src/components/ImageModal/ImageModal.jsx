import s from './ImageModal.module.css'
import Modal from "react-modal";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ImageModal = ({ largeImage, description, onRequestClose, modalIsOpen }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onRequestClose}
      contentLabel={description}
      ariaHideApp={false}
      style={customStyles}
    >
      <img className={s.img} src={largeImage} alt={description} />
      <p className={s.description}>{description}</p>
    </Modal>
  );
};

export default ImageModal;
