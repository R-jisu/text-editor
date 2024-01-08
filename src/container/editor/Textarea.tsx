import { ForwardedRef, forwardRef } from "react";

const Textarea = forwardRef(
  (
    {
      styles,
      oninput,
    }: {
      styles: string;
      oninput?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        ref={ref}
        role="textbox"
        contentEditable="true"
        className={styles}
        onKeyDown={oninput}
      ></div>
    );
  }
);

Textarea.displayName = "Textarea";
export default Textarea;
