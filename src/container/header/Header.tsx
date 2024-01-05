import SaveBtnContainer from "./SaveBtnContainer";
import ShareBtnContainer from "./ShareBtnContainer";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <h1>Text Editor</h1>
      <section className={styles["btn-wrap"]}>
        <SaveBtnContainer />
        <ShareBtnContainer />
      </section>
    </div>
  );
};

export default Header;
