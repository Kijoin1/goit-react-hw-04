import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { fetchImagesByTopic } from "./api/api-unsplash";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ImageModal from "./components/ImageModal/ImageModal";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [largeImage, setLargeImage] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const handleSearch = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchImagesByTopic(searchValue, page);
        setImages((prev) => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    if (searchValue) {
      handleSearch();
    }
  }, [searchValue, page]);

  const onSubmit = (topic) => {
    setSearchValue(topic);
    setPage(1);
    setImages([]);
  };

  const openModal = (largeImage, description) => {
    setLargeImage(largeImage);
    setDescription(description);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setLargeImage("");
    setDescription("");
  };

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      {isError && <ErrorMessage />}
      {searchValue && !isError && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {isLoading && <Loader />}
      {totalPages > page && !isError && !isLoading && (
        <LoadMoreBtn setPage={setPage} />
      )}
      {largeImage && (
        <ImageModal
          largeImage={largeImage}
          description={description}
          onRequestClose={closeModal}
          modalIsOpen={modalIsOpen}
        />
      )}
      <Toaster position="top-left" reverseOrder={true} />
    </div>
  );
}

export default App;
