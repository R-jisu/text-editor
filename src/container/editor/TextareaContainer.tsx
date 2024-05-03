"use client";

import { useRef } from "react";
import Textarea from "./Textarea";
import styles from "./textarea.module.css";
import { useSelectedElementStore } from "@/store/useSelectedElement";

const TextareaContainer = () => {
  const textareaDivRef = useRef<HTMLDivElement>(null);
  const tool = useSelectedElementStore((state) => state.tool);

  //Todo 로직 다시 생각하기
  function onInput(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.nativeEvent.isComposing) return;
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
