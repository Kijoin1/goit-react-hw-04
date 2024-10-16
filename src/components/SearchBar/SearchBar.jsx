import { useRef } from "react";
import toast from "react-hot-toast";
import s from './SearchBar.module.css'

const SearchBar = ({ onSubmit }) => {
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = inputRef.current.value;
    if (inputValue !== "") {
      onSubmit(inputValue);
    } else {
      toast.error("This didn't work.");
    }
  };

  return (
    <header>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          ref={inputRef}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
