import s from './ErrorMessage.module.css'

const ErrorMessage = () => {
  return (
    <div className={s.errorMessage}>
      <p>Oops, something went wrong...</p>
      <p className={s.text}>Please try again</p>
    </div>
  );
};

export default ErrorMessage;
