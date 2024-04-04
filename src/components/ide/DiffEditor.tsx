"use client";

import React from "react";
import { DiffEditor } from "@monaco-editor/react";

interface DiffEditorProps {
  language: string;
  code: string;
  codeSolution: string;
}

const DiffEditorComponent = ({
  language,
  code,
  codeSolution
}: DiffEditorProps) => {
  return (
    <div>
      <DiffEditor
        height="calc(100vh - 25px)"
        theme="hc-black"
        language={language}
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
          automaticLayout: true
        }}
      />
    </div>
  );
};

export default DiffEditorComponent;
