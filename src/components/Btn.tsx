import { ForwardedRef, forwardRef } from "react";

const Btn = forwardRef(
  (
    {
      onclick,
      text,
      styles,
    }: {
      onclick: () => void;
      text: string;
      styles?: string;
    },
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button ref={ref} className={styles} type="button" onClick={onclick}>
        {text}
      </button>
    );
  }
);

Btn.displayName = "Btn";

export default Btn;
