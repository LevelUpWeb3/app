"use client";

import { useState, useRef } from "react";
import { useParams } from "next/navigation";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import Modal from "@/components/ide/Modal";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs";
import CodeEditor from "@/components/ide/CodeEditor";
import CodeSnippet from "@/components/ide/CodeSnippet";
import DiffEditorComponent from "@/components/ide/DiffEditor";
import LanguageSelector from "@/components/ide/LanguageSelector";
import { CODE_SNIPPETS } from "@/constants/constants";

const IdePage = () => {
  const [language, setLanguage] = useState("Language Selector");
  const [code, setCode] = useState("");
  const [codeSolution, setCodeSolution] = useState("");
  const [showModal, setShowModal] = useState(false); //UPDATED FILE
  const modalRef = useRef(null); //UPDATED FILE

  const { slug: paramSlug } = useParams();
  console.log(paramSlug);

  const onSelect = (language: string) => {
    setLanguage(language);
    console.log(language);
    const codeSnippetKeys = Object.entries(CODE_SNIPPETS);
    console.log(codeSnippetKeys);
    codeSnippetKeys.map(([slug, languageObj]) => {
      if (slug === paramSlug) {
        console.log(slug, languageObj);
        setCodeSolution(languageObj[language]);
        console.log(codeSolution);
      }
    });
  };

  return (
    <Tabs defaultValue="editor">
      {/* <div className="flex flex-col-reverse"> */}
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="editor">Editor</TabsTrigger>
        <TabsTrigger value="solution">Solution</TabsTrigger>
        <TabsTrigger value="editorDiff">Diff</TabsTrigger>
      </TabsList>
      <TabsContent value="editor">
        <Card>
          <LanguageSelector
            language={language}
            onSelect={onSelect}
          />
          <CodeEditor
            language={language}
            code={code}
            onChange={(code) => setCode(code || "")}
          />
        </Card>
      </TabsContent>
      <TabsContent value="solution">
        <Card>
          <LanguageSelector
            language={language}
            onSelect={onSelect}
          />
          <CodeSnippet
            language={language}
            codeSnippet={codeSolution}
          />
        </Card>
      </TabsContent>
      {/* </div> */}
      <TabsContent value="editorDiff">
        <Card>
          <div className="flex">
            <LanguageSelector
              language={language}
              onSelect={onSelect}
            />
            {codeSolution == code && language !== "Language Selector" ? (
              <>
                <Button
                  variant="ghost"
                  className="bg-emerald-500 rounded-lg mt-1 mr-1 ml-auto"
                  onClick={() => setShowModal(true)}
                >
                  Correct
                </Button>
                <Modal
                  // ref={modalRef}
                  isOpen={showModal}
                  isClose={() => setShowModal(false)}
                  code={code}
                >
                  <div>
                    <h1 className="rounded-xl  text-black p-4 text-2xl">
                      Challenge completed: {paramSlug} 🔥
                    </h1>
                    <SyntaxHighlighter
                      language="solidity"
                      style={a11yDark}
                    >
                      {code}
                    </SyntaxHighlighter>
                  </div>
                  <div className="text-center  text-black mt-4">
                    <span>🌟 You have successfully leveled up 🌟</span>
                  </div>
                </Modal>
              </>
            ) : (
              <Button
                variant="ghost"
                className="bg-rose-500 rounded-lg mt-1 mr-1 ml-auto"
                onClick={() => setShowModal(false)}
              >
                Incorrect
              </Button>
            )}
          </div>
          <DiffEditorComponent
            language={language}
            code={code}
            codeSolution={codeSolution}
          />
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default IdePage;
