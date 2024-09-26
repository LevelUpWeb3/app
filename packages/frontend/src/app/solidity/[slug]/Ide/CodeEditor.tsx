"use client";

import React, { useEffect, useRef, useState } from "react";
import Editor, { OnMount } from "@monaco-editor/react";

interface CodeEditorProps {
  codeTemplate: string;
  code: string;
  codeSolution: string;
  onChange: (code: string) => void;
  onSubmission: (isCorrect: boolean) => void;
}

const CodeEditor = ({
  codeTemplate,
  code: initialCode,
  codeSolution: initialCodeSolution,
  onChange,
  onSubmission,
}: CodeEditorProps) => {
  const [editorHeight, setEditorHeight] = useState("0px");
  const [key, setKey] = useState(Math.random());
  const codeRef = useRef(initialCode);
  const codeSolutionRef = useRef(initialCodeSolution);

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

  useEffect(() => {
    setEditorHeight(`${window.innerHeight * 0.85}px`);
  }, []);

  return (
    <div className="rounded-xl resize-y overflow-hidden">
      <Editor
        key={key}
        height={editorHeight}
        theme="vs-dark"
        language="sol"
        defaultValue={codeTemplate}
        onMount={onMount}
        value={codeTemplate}
        onChange={(code) => onChange(code || "")}
        options={{
          wordWrap: "on",
          minimap: { enabled: false },
          cursorStyle: "underline",
          fontSize: 14,
          folding: false,
          lineNumbersMinChars: 2,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
