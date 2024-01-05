"use client";

import Btn from "../../components/Btn";
import styles from "./headerBtn.module.css";

const ShareBtnContainer = () => {
  function handleShare() {}
  return (
    <Btn
      onclick={handleShare}
      text="Share"
      styles={`${styles.btn} ${styles.share}`}
    />
  );
};

export default ShareBtnContainer;
