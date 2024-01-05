import { ForwardedRef, forwardRef } from "react";

const Textarea = forwardRef(
  (
    {
      styles,
    }: {
      styles: string;
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return <div ref={ref} contentEditable="true" className={styles}></div>;
  }
);

Textarea.displayName = "Textarea";
export default Textarea;
