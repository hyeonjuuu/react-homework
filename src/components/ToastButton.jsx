import styles from "@/styles/ButtonStyle.module.css";
import close from "@/assets/close.svg";

const ToastButton = ({ state, isSuccess, handleChange }) => {
  let message = isSuccess ? state.success : state.error;
  let color = isSuccess ? styles.success : styles.error;

  return (
    <>
      <button type="button" className={color} onClick={handleChange}>
        {message}
        <img src={close} alt="닫기 아이콘" className={styles.icon} />
      </button>
    </>
  );
};

export default ToastButton;
