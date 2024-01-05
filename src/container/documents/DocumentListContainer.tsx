"use client";

import { useState } from "react";
import DocumentsList from "./DocumentsList";
import styles from "./documents.module.css";

const DocumentListContainer = () => {
  const [documents, setDocuments] = useState<string[]>([
    "Document 1",
    "Document 2",
    "Document 3",
  ]);

  function handleOpenDocument() {}

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Documents</h3>
      <DocumentsList
        documents={documents}
        openDocument={handleOpenDocument}
        styles={{
          section: styles["document-section"],
          ul: styles["document-ul"],
          li: styles["document-li"],
        }}
      />
    </div>
  );
};

export default DocumentListContainer;
