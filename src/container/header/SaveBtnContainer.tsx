"use client";

import Btn from "../../components/Btn";
import styles from "./headerBtn.module.css";

const SaveBtnContainer = () => {
  function handleSave() {}
  return <Btn onclick={handleSave} text="Save" styles={styles.btn} />;
};

export default SaveBtnContainer;
