"use client";

import Btn from "@/components/Btn";
import styles from "./toolbar.module.css";
import FormatBtn from "@/components/FormatBtn";
import { useRef } from "react";
const Toolbar = () => {
  const boldRef = useRef<HTMLButtonElement>(null);
  const italicRef = useRef<HTMLButtonElement>(null);
  const underLineRef = useRef<HTMLButtonElement>(null);
  const header1Ref = useRef<HTMLButtonElement>(null);
  const header2Ref = useRef<HTMLButtonElement>(null);
  const header3Ref = useRef<HTMLButtonElement>(null);

  return (
    <div className={styles.container}>
      <section>
        <FormatBtn text="B" ref={boldRef} />
        <FormatBtn text="I" ref={italicRef} />
        <FormatBtn text="U" ref={underLineRef} />
        <FormatBtn text="H1" ref={header1Ref} />
        <FormatBtn text="H2" ref={header2Ref} />
        <FormatBtn text="H3" ref={header3Ref} />
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
