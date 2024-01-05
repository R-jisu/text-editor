"use client";

import Btn from "@/components/Btn";
import styles from "./toolbar.module.css";
const Toolbar = () => {
  function handleBold() {}
  return (
    <div className={styles.container}>
      <section>
        <Btn text="B" onclick={handleBold} styles={styles["btn-icon"]} />
        <Btn text="I" onclick={() => {}} styles={styles["btn-icon"]} />
        <Btn text="U" onclick={() => {}} styles={styles["btn-icon"]} />
        <Btn text="A" onclick={() => {}} styles={styles["btn-icon"]} />
        <Btn text="H1" onclick={() => {}} styles={styles["btn-icon"]} />
        <Btn text="H2" onclick={() => {}} styles={styles["btn-icon"]} />
        <Btn text="H3" onclick={() => {}} styles={styles["btn-icon"]} />
      </section>
      <section>
        <Btn text="List" onclick={() => {}} styles={styles["btn-icon"]} />
        <Btn text="Link" onclick={() => {}} styles={styles["btn-icon"]} />
        <Btn
          text="Insert File"
          onclick={() => {}}
          styles={styles["btn-icon"]}
        />
      </section>
    </div>
  );
};

export default Toolbar;
