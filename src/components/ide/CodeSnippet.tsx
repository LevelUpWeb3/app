"use client";

import React from "react";
import Editor from "@monaco-editor/react";

interface CodeSnippetProps {
  language: string;
  codeSnippet: string;
}

const CodeSnippet = ({ language, codeSnippet }: CodeSnippetProps) => {
  return (
    <div>
      <Editor
        height="calc(100vh - 25px)"
        theme="hc-black"
        language={language}
        value={codeSnippet}
        options={{
          wordWrap: "on",
          readOnly: true,
          selectOnLineNumbers: false,
          minimap: { enabled: false },
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

export default CodeSnippet;
