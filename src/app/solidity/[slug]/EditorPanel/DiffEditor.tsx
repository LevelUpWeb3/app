import { DiffEditor } from "@monaco-editor/react";
import editorTheme from "@/theme/editorTheme";

interface DiffEditorProps {
  code: string;
  codeSolution: string;
}

const DiffEditorComponent = ({ code, codeSolution }: DiffEditorProps) => {
  const beforeMount = (monaco) => {
    monaco.editor.defineTheme("level-up-black", editorTheme);
  };
  return (
    <div>
      <DiffEditor
        height="760px"
        theme="level-up-black"
        className="pl-[20px]"
        language="sol"
        original={codeSolution}
        modified={code}
        beforeMount={beforeMount}
        options={{
          wordWrap: "on",
          readOnly: true,
          minimap: { enabled: false },
          renderSideBySide: false,
          fontSize: 14,
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
