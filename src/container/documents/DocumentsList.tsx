import Link from "next/link";

import { FaFile } from "react-icons/fa";

const DocumentsList = ({
  documents,
  openDocument,
  styles,
}: {
  documents: string[];
  openDocument: () => void;
  styles?: { section: string; ul: string; li: string };
}) => {
  return (
    <section className={styles?.section}>
      <ul className={styles?.ul}>
        {documents?.map((document, idx) => (
          <li className={styles?.li} key={idx} onClick={openDocument}>
            <FaFile style={{ color: "#196534" }} size={14} />
            <Link href={`/${document}`}>{document}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DocumentsList;
