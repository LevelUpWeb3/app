"use client";

import React, { useEffect, useRef, useState } from "react";
import Editor, { OnMount, type Monaco } from "@monaco-editor/react";
import { CircularProgress } from "@mui/material";

import editorTheme from "@/theme/editorTheme";

interface CodeEditorProps {
  codeTemplate: string;
  code: string;
  codeSolution: string;
  onChange: (code: string) => void;
  onSubmission: (isCorrect: boolean) => void;
}
// TODO: fix Command + Shift + Enter to submit code
const CodeEditor = ({
  codeTemplate,
  code: initialCode,
  codeSolution: initialCodeSolution,
  onChange,
  onSubmission,
}: CodeEditorProps) => {
  const [key, setKey] = useState(Math.random());
  const codeRef = useRef(initialCode);
  const codeSolutionRef = useRef(initialCodeSolution);

  const beforeMount = (monaco: Monaco) => {
    monaco.editor.defineTheme("level-up-black", editorTheme);
  };
  const onMount: OnMount = (editor, monaco) => {
    const model = editor.getModel();
    const lastLine = model?.getLineCount();
    const lastColumn = model?.getLineMaxColumn(lastLine!);

    if (lastLine !== undefined && lastColumn !== undefined) {
      editor.setPosition({ lineNumber: lastLine, column: lastColumn });
    }
    editor.focus();

    editor.addAction({
      id: "submit-code",
      label: "Submit Code",
      keybindings: [
        monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.Enter,
      ],
      run: submitCode,
    });
  };

  const submitCode = () => {
    if (codeRef.current === codeSolutionRef.current) {
      alert("Awesome, you got it right!");
      onSubmission(true);
      setKey(Math.random());
    } else {
      alert("Incorrect, let's try again!");
      onSubmission(false);
    }
    console.log("key", key);
  };

  useEffect(() => {
    codeRef.current = initialCode;
    codeSolutionRef.current = initialCodeSolution;
  }, [initialCode, initialCodeSolution]);

  return (
    <Editor
      key={key}
      className="solidity-editor pl-[20px]"
      height="760px"
      theme="level-up-black"
      language="python"
      defaultValue={codeTemplate}
      onMount={onMount}
      beforeMount={beforeMount}
      value={codeTemplate}
      onChange={(code) => onChange(code || "")}
      loading={<CircularProgress sx={{ color: "#fff" }} />}
      options={{
        wordWrap: "on",
        minimap: { enabled: false },
        cursorStyle: "underline",
        fontSize: 14,
        fontFamily: "'Fira Code', monospace",

        folding: false,
        lineNumbersMinChars: 2,
        scrollBeyondLastLine: true,
        automaticLayout: true,
      }}
    />
  );
};

export default CodeEditor;
