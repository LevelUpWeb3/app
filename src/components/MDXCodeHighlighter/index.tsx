import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import CopyButton from "./CopyButton";
import clsx from "clsx";

import markdownCodeViewer from "@/theme/markdownCodeViewer";

interface PreProps {
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}

interface CodeProps {
  node?: any;
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}

interface MDXComponents {
  pre: React.FC<PreProps>;
  code: React.FC<CodeProps>;
}

const MDXCodeHighlighter = (theme = "dark"): MDXComponents => {
  const defaultStyle = markdownCodeViewer;
  // console.log(defaultStyle, "defaultStyle");
  return {
    pre({ className, children, ...props }: PreProps) {
      return (
        <div className={className} {...props}>
          {children}
        </div>
      );
    },
    code({ node, className, children, ...props }: CodeProps) {
      const match = /language-(\w+)/.exec(className || "");
      const multiline = typeof children === "string" && children.match(/\n/);
      return (
        <>
          {multiline && match && (
            <div className="markdown-code-block relative">
              <SyntaxHighlighter
                className="code-viewer"
                style={{
                  ...defaultStyle,
                  'code[class*="language-"]': {
                    ...defaultStyle['code[class*="language-"]'],
                    fontFamily: "'Fira Code', monospace",
                    whiteSpace: "wrap",
                    background: "transparent",
                  },
                }}
                customStyle={{
                  padding: "28px 25px",
                  margin: "0 0 20px",
                  overflow: "auto",
                  background: "#252525",
                  borderRadius: "15px",
                  fontSize: "14px",
                }}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
              <CopyButton
                text={children}
                sx={{
                  position: "absolute",
                  top: ["13px", "22px"],
                  right: ["12px", "17px"],
                  color: "#fff",
                }}
              />
            </div>
          )}
          {multiline && !match && (
            <pre className={className} {...props}>
              {children}
            </pre>
          )}
          {!multiline && (
            <code className={clsx(className)} {...props}>
              {children}
            </code>
          )}
        </>
      );
    },
  };
};

export default MDXCodeHighlighter;
