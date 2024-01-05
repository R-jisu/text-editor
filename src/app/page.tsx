import DocumentListContainer from "@/container/documents/DocumentListContainer";
import styles from "./page.module.css";
import EditorContainer from "@/container/editor/EditorContainer";

export default function Home() {
  return (
    <div className={styles.container}>
      <DocumentListContainer /> {/*loading component need*/}
      <EditorContainer />
    </div>
  );
}
