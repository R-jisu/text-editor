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

  //Todo 로직 다시 생각하기
  function onInput(e: any) {
    //fix 한글은 preventDefault가 안먹힘
    e.preventDefault();
    console.log("커서위치: ", window.getSelection()?.focusNode);

    if (element === null) return;
    if (e.key === "Enter") {
      const newComponent = makeElement("p", textareaRef.current);
      setParentElement(newComponent);
      setElement(newComponent);
      newComponent.focus();
    } else {
      //Todo cursor 위치가 이상함. => window.getSelection으로 캐럿 조절

      //Todo shift 같은 특수키들 처리가 필요함 => 함수처리
      const obj: { [key: string]: number } = {
        Shift: 1,
        Backspace: 2,
        Alt: 1,
        Meta: 1,
        Control: 1,
        Tab: 1,
        CapsLock: 1,
        Escape: 1,
        Delete: 1,
        PageUP: 1,
        PageDown: 1,
        Home: 1,
        End: 1,
        ArrowRight: 1,
      };
      if (obj[e.key] !== 1) {
        //Todo 그냥 추가할게 아니라 커서 위치 다음에 추가
        //Todo element안에 내용이 없는데 backspace라면 형제노드 중 앞에 있는 걸로 element
        element.innerText =
          obj[e.key] === 2
            ? element.innerText.slice(0, -1)
            : element.innerText + e.key;
      }
    }
  }

  return (
    <Textarea styles={styles.textarea} ref={textareaRef} oninput={onInput} />
  );
};

export default TextareaContainer;
