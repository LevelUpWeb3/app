"use client";

import React from "react";
import Editor, { OnMount } from "@monaco-editor/react";

interface CodeEditorProps {
  language: string;
  code: string;
  onChange: (code: string) => void;
}

const CodeEditor = ({ language, code, onChange }: CodeEditorProps) => {
  const onMount: OnMount = (editor, monaco) => {
    const model = editor.getModel();
    const lastLine = model?.getLineCount();
    const lastColumn = model?.getLineMaxColumn(lastLine!);

    if (lastLine !== undefined && lastColumn !== undefined) {
      editor.setPosition({ lineNumber: lastLine, column: lastColumn });
    }
    editor.focus();
  };

  return (
    <div>
      <Editor
        height="calc(100vh - 25px)"
        theme="hc-black"
        language={language}
        defaultValue="// some comment"
        onMount={onMount}
        value={code}
        onChange={(code) => onChange(code || "")}
        options={{
          wordWrap: "on",
          minimap: { enabled: false },
          cursorStyle: "underline",
          fontSize: 14,
          folding: false,
          lineNumbersMinChars: 2,
          scrollBeyondLastLine: false,
          automaticLayout: true
        }}
      />
    </div>
  );
};

export default CodeEditor;
