import { useSelectedElementStore } from "@/store/useSelectedElement";
import Btn from "./Btn";
import styles from "@/container/editor/toolbar.module.css";
import { makeElement } from "@/utils/makeElement";
import { ForwardedRef, forwardRef } from "react";

const FormatBtn = forwardRef(
  ({ text }: { text: string }, ref: ForwardedRef<HTMLButtonElement>) => {
    const element = useSelectedElementStore((state) => state.element);
    const setElement = useSelectedElementStore((state) => state.setElement);

    function handleClick() {
      if (element?.nodeName !== text && typeof ref !== "function") {
        ref!.current!.className = `${styles["btn-icon"]} ${styles["btn-click"]}`;
        //   setElement(makeElement("span", parentElement));
      }
    }
    return (
      <Btn
        text={text}
        ref={ref}
        onclick={handleClick}
        styles={styles["btn-icon"]}
      />
    );
  }
);

FormatBtn.displayName = "FormatBtn";

export default FormatBtn;
