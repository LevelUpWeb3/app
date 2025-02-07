"use client";

import React, { useState } from "react";
import Editor, { OnMount, type Monaco } from "@monaco-editor/react";
import { CircularProgress, Box, Typography } from "@mui/material";
import EditorTooltip from "@/components/EditorTooltip";

import editorTheme from "@/theme/editorTheme";
import Button from "@/components/Button";
import { useParams } from "next/navigation";
import SuccessAlert from "./SuccessAlert";
// import useProgressStore from "@/stores/processStore";
import { usePrivy } from "@privy-io/react-auth";

enum TestStatus {
  SUCCESS = "success",
  ERROR = "error",
  UNDEFINED = "",
}

const CodeEditor = (props) => {
  const { sx } = props;
  const { slug } = useParams() as { slug: string };
  const [code, setCode] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<TestStatus>(TestStatus.UNDEFINED);
  // const { updateChallengeStatus } = useProgressStore();
  const { login, user } = usePrivy();

  const handleCloseTip = () => {
    setStatus(TestStatus.UNDEFINED);
  };

  const beforeMount = (monaco: Monaco) => {
    monaco.editor.defineTheme("level-up-black", editorTheme as any);
  };
  const onMount: OnMount = (editor, monaco) => {
    editor.focus();
  };

  const handleTestCode = async () => {
    setLoading(true);
    const testsUrl = `https://18.237.163.150.nip.io/run-tests/${slug}`;
    const res = await fetch(testsUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: code,
    });
    if (res.ok) {
      // await updateChallengeStatus(slug);
      setStatus(TestStatus.SUCCESS);
    } else {
      setStatus(TestStatus.ERROR);
      setTimeout(() => {
        setStatus(TestStatus.UNDEFINED);
      }, 6e3);
    }
    setLoading(false);
  };

  return (
    <Box sx={{ position: "relative", ...sx }}>
      {status === TestStatus.SUCCESS ? (
        <SuccessAlert></SuccessAlert>
      ) : (
        <>
          <Editor
            className="challenge-code-editor bg-[#232323] p-[30px_20px] pb-[74px] sm:p-[40px] sm:pb-[122px] md:p-[60px] md:pb-[142px]"
            height="868px"
            theme="level-up-black"
            language="sol"
            onMount={onMount}
            beforeMount={beforeMount}
            value={code}
            onChange={(code) => setCode(code || "")}
            loading={<CircularProgress sx={{ color: "#fff" }} />}
            options={{
              wordWrap: "on",
              minimap: { enabled: false },
              cursorStyle: "underline",
              fontSize: 14,
              fontFamily: "'Fira Code', monospace",

              folding: false,
              lineNumbersMinChars: 2,
              scrollBeyondLastLine: false,
              automaticLayout: true,
              placeholder: "Paste  your code here",
            }}
          />
          <EditorTooltip
            type="error"
            maxWidth="580px"
            title={
              <Typography>
                <span className="font-medium">
                  Tests failed/compilation error:
                </span>{" "}
                Please run the provided Foundry tests locally from the Github
                repository to debug and try again!
              </Typography>
            }
            open={status === TestStatus.ERROR}
            onClose={handleCloseTip}
            placement="top"
          >
            {user ? (
              <Button
                size="large"
                disabled={!code}
                loading={loading}
                sx={{
                  position: "absolute",
                  bottom: ["30px", "40px", "60px"],
                  width: [
                    "calc(100% - 40px) !important",
                    "calc(100% - 80px) !important",
                    "calc(100% - 120px) !important",
                  ],
                  left: ["20px", "40px", "60px"],
                  "&.Mui-disabled": {
                    backgroundColor: "rgba(255, 255, 255, 0.20) !important",
                  },
                }}
                onClick={handleTestCode}
              >
                Test Your Code
              </Button>
            ) : (
              <Button
                size="large"
                onClick={login}
                sx={{
                  position: "absolute",
                  bottom: ["30px", "40px", "60px"],
                  width: [
                    "calc(100% - 40px) !important",
                    "calc(100% - 80px) !important",
                    "calc(100% - 120px) !important",
                  ],
                  left: ["20px", "40px", "60px"],
                }}
              >
                Login to Test Code
              </Button>
            )}
          </EditorTooltip>
        </>
      )}
    </Box>
  );
};

export default CodeEditor;
