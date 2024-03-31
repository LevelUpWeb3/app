"use client";

import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "@/constants/constants";

const CodeSnippet = () => {
  const [language, setLanguage] = useState("Language Selector");
  const [codeSnippet, setCodeSnippet] = useState("");

  const onSelect = (language: string) => {
    setLanguage(language);
    console.log(language);
    setCodeSnippet(CODE_SNIPPETS[language]);
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
        defaultValue={codeSnippet}
        options={{
          wordWrap: "on",
          readOnly: true,
          minimap: { enabled: false },
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

export default CodeSnippet;
