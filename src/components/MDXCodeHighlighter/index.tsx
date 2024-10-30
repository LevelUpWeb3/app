import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  materialLight,
  materialDark,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import CopyButton from "./CopyButton";
import clsx from "clsx";

const MDXCodeHighlighter = (theme = "dark") => {
  const isLight = theme === "light";
  const defaultStyle = isLight ? materialLight : materialDark;
  return {
    pre({ className, children, ...props }) {
      return (
        <div className={className} {...props}>
          {children}
        </div>
      );
    },
    code({ node, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      const multiline = typeof children === "string" && children.match(/\n/);
      return (
        <>
          {multiline && match && (
            <div
              className="markdown-code-block"
              style={{
                position: "relative",
                fontSize: "14px",

                // custom
                backgroundColor: isLight ? "#fff" : "#252525",
              }}
            >
              <SyntaxHighlighter
                style={{
                  ...defaultStyle,
                  'code[class*="language-"]': {
                    ...defaultStyle['code[class*="language-"]'],
                    fontFamily: "'Fira Code', monospace",
                    background: "transparent",
                    whiteSpace: "wrap",
                  },
                }}
                customStyle={{
                  padding: "28px 25px",
                  margin: "0 0 20px",
                  overflow: "auto",
                  backgroundColor: "transparent",
                  fontFamily: "'Fira Code', monospace",
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
                  top: "10px",
                  right: "12px",
                  color: isLight ? "#101010" : "#fff",
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
