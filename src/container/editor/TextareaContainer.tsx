"use client";

import { useRef } from "react";
import Textarea from "./Textarea";
import styles from "./textarea.module.css";
import { useSelectedElementStore } from "@/store/useSelectedElement";
import { 특수키모음 } from "@/utils/const";

const TextareaContainer = () => {
  const textareaDivRef = useRef<HTMLDivElement>(null);
  const tool = useSelectedElementStore((state) => state.tool);

  //Todo 로직 다시 생각하기
  function onInput(e: React.KeyboardEvent<HTMLDivElement>) {
    console.log(e.key);

    if (e.nativeEvent.isComposing) return; //한글 입력 후 키보드 이벤트 두 번 발생하는 현상 막기
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
    // else if (!특수키모음[e.key]) {
    //   if (tool === "B" && current?.localName !== "strong") {
    //     const newStrong = document.createElement("strong");
    //     newStrong.innerHTML = "<br>";
    //     range.insertNode(newStrong);
    //     range?.setStart(newStrong, 0);
    //     range?.collapse(true);
    //     selection?.removeAllRanges();
    //     selection?.addRange(range);
    //   }
    // }
  }

  return (
    <Textarea styles={styles.textarea} ref={textareaDivRef} oninput={onInput} />
  );
};

export default TextareaContainer;
