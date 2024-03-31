"use client";

import React, { useState } from "react";
import Editor, { OnMount } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("Language Selector");

  const onMount: OnMount = (editor, monaco) => {
    const model = editor.getModel();
    const lastLine = model?.getLineCount();
    const lastColumn = model?.getLineMaxColumn(lastLine!);

    if (lastLine !== undefined && lastColumn !== undefined) {
      editor.setPosition({ lineNumber: lastLine, column: lastColumn });
    }
    editor.focus();
  };

  const onSelect = (language: string) => {
    setLanguage(language);
    console.log(language);
  };

  return (
    <div>
      <LanguageSelector
        language={language}
        onSelect={onSelect}
      />
      <Editor
        height="75vh"
        theme="hc-black"
        language={language}
        defaultValue="// some comment"
        onMount={onMount}
        value={code}
        onChange={(code) => setCode(code || "")}
        options={{
          wordWrap: "on",
          minimap: { enabled: false },
          cursorStyle: "underline",
          fontSize: 16,
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
