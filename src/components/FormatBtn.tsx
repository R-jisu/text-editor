import { useSelectedElementStore } from "@/store/useSelectedElement";
import Btn from "./Btn";
import styles from "@/container/editor/toolbar.module.css";
import { ForwardedRef, forwardRef } from "react";

const FormatBtn = forwardRef(
  ({ text }: { text: string }, ref: ForwardedRef<HTMLButtonElement>) => {
    const tool = useSelectedElementStore((state) => state.tool);
    const setTool = useSelectedElementStore((state) => state.setTool);

    function handleClick() {
      if (tool !== text) {
        setTool(text);
      } else {
        setTool("");
      }
    }

    return (
      <Btn
        text={text}
        ref={ref}
        onclick={handleClick}
        styles={`${styles["btn-icon"]} ${
          text === tool ? styles["btn-click"] : ""
        }`}
      />
    );
  }
);

FormatBtn.displayName = "FormatBtn";

export default FormatBtn;
