"use client";

import { useEffect, useRef } from "react";
import Textarea from "./Textarea";
import styles from "./textarea.module.css";
import { useSelectedElementStore } from "@/store/useSelectedElement";
import { makeElement } from "@/utils/makeElement";

const TextareaContainer = () => {
  const textareaDivRef = useRef<HTMLDivElement>(null);
  const element = useSelectedElementStore((state) => state.element);
  const setElement = useSelectedElementStore((state) => state.setElement);
  const setParentElement = useSelectedElementStore(
    (state) => state.setParentElement
  );

  //Todo 로직 다시 생각하기
  function onInput(e: any) {
    const selection = window.getSelection();
    const range = selection?.getRangeAt(0);
    if (!selection || !range) {
      console.log("return");
      return;
    }
    const current = selection?.getRangeAt(0).startContainer.parentElement;
    if (e.key == "Enter") {
      e.preventDefault();
      const newParagraph = document.createElement("p");
      newParagraph.innerHTML = "<br>";
      textareaDivRef.current?.appendChild(newParagraph);
      range?.setStart(newParagraph, 0);
      range?.collapse(true);

      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  }

  return (
    <Textarea styles={styles.textarea} ref={textareaDivRef} oninput={onInput} />
  );
};

export default TextareaContainer;
