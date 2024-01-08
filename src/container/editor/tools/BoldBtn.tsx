import Btn from "@/components/Btn";
import React, { useRef } from "react";
import styles from "@/container/editor/toolbar.module.css";
import { useSelectedElementStore } from "@/store/useSelectedElement";
import { makeElement } from "@/utils/makeElement";

const BoldBtn = () => {
  //Todo hook으로 만들기
  const element = useSelectedElementStore((state) => state.element);
  const parentElement = useSelectedElementStore((state) => state.parentElement);
  const setElement = useSelectedElementStore((state) => state.setElement);

  const btnRef = useRef<HTMLButtonElement>(null);

  function handleBold() {
    if (element?.nodeName !== "B") {
      btnRef.current!.className = `${styles["btn-icon"]} ${styles["btn-click"]}`;
      setElement(makeElement("b", parentElement));
    } else {
      btnRef.current!.className = styles["btn-icon"];
      setElement(makeElement("span", parentElement));
    }
  }
  return (
    <Btn
      text="B"
      ref={btnRef}
      onclick={handleBold}
      styles={styles["btn-icon"]}
    />
  );
};

export default BoldBtn;
