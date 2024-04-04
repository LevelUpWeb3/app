"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Card } from "@/components/Card";
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
          <LanguageSelector
            language={language}
            onSelect={onSelect}
          />
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
