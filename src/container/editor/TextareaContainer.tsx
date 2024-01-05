"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import Textarea from "./Textarea";
import styles from "./textarea.module.css";

const TextareaContainer = () => {
  const textareaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ((textareaRef.current?.innerText as string).length === 0) {
      console.log(1);
      textareaRef.current?.focus();
      const newComponent = document.createElement("p");
      textareaRef.current?.appendChild(newComponent);
    }
  }, []);

  return <Textarea styles={styles.textarea} ref={textareaRef} />;
};

export default TextareaContainer;
