import { DiffEditor } from "@monaco-editor/react";

interface DiffEditorProps {
  code: string;
  codeSolution: string;
}

const DiffEditorComponent = ({ code, codeSolution }: DiffEditorProps) => {
  return (
    <div>
      <DiffEditor
        height="760px"
        theme="hc-black"
        language="sol"
        original={codeSolution}
        modified={code}
        options={{
          wordWrap: "on",
          readOnly: true,
          minimap: { enabled: false },
          renderSideBySide: false,
          fontSize: 16,
          fontFamily: "'Fira Code', monospace",
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
