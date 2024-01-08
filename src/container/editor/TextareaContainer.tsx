"use client";

import { useEffect, useRef } from "react";
import Textarea from "./Textarea";
import styles from "./textarea.module.css";
import { useSelectedElementStore } from "@/store/useSelectedElement";
import { makeElement } from "@/utils/makeElement";

const TextareaContainer = () => {
  const textareaRef = useRef<HTMLDivElement>(null);
  const element = useSelectedElementStore((state) => state.element);
  const setElement = useSelectedElementStore((state) => state.setElement);
  const setParentElement = useSelectedElementStore(
    (state) => state.setParentElement
  );

  useEffect(() => {
    if ((textareaRef.current?.innerText as string).length === 0) {
      const newComponent = makeElement("p", textareaRef.current);
      newComponent.focus();
      setParentElement(newComponent);
      setElement(newComponent);
    }
  }, []);

  function onInput(e: any) {
    //fix 한글은 preventDefault가 안먹힘
    e.preventDefault();

    if (element === null) return;
    if (e.key === "Enter") {
      const newComponent = makeElement("p", textareaRef.current);
      setParentElement(newComponent);
      setElement(newComponent);
      newComponent.focus();
    } else {
      //Todo cursor 위치가 이상함. => window.getSelection으로 캐럿 조절
      console.log("커서위치: ", window.getSelection());
      //Todo shift 같은 특수키들 처리가 필요함 => 함수처리
      if (e.key !== "Shift") {
        //Todo 그냥 추가할게 아니라 커서 위치 다음에 추가
        element.innerText += e.key;
      }
    }
  }

  return (
    <Textarea styles={styles.textarea} ref={textareaRef} oninput={onInput} />
  );
};

export default TextareaContainer;
