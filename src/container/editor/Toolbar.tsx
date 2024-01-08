"use client";

import Btn from "@/components/Btn";
import styles from "./toolbar.module.css";
import BoldBtn from "./tools/BoldBtn";
const Toolbar = () => {
  return (
    <div className={styles.container}>
      <section>
        <BoldBtn />
        <Btn text="I" onclick={() => {}} styles={styles["btn-icon"]} />
        <Btn text="U" onclick={() => {}} styles={styles["btn-icon"]} />
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
