const Btn = ({
  onclick,
  text,
  styles,
}: {
  onclick: () => void;
  text: string;
  styles?: string;
}) => {
  return (
    <button className={styles} type="button" onClick={onclick}>
      {text}
    </button>
  );
};

export default Btn;
