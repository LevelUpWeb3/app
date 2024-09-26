"use client";

import React, { useState, useEffect } from "react";
import { DiffEditor } from "@monaco-editor/react";

interface DiffEditorProps {
  code: string;
  codeSolution: string;
}

const DiffEditorComponent = ({ code, codeSolution }: DiffEditorProps) => {
  const [editorHeight, setEditorHeight] = useState("0px");
  useEffect(() => {
    // Set the height to 90% of the viewport height
    setEditorHeight(`${window.innerHeight * 0.85}px`);
  }, []);
  return (
    <div>
      <DiffEditor
        height={editorHeight}
        theme="hc-black"
        language="solidity"
        original={codeSolution}
        modified={code}
        options={{
          wordWrap: "on",
          readOnly: true,
          minimap: { enabled: false },
          renderSideBySide: false,
          fontSize: 14,
          folding: false,
          onlyShowAccessibleDiffViewer: true,
          lineNumbersMinChars: 2,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default DiffEditorComponent;
