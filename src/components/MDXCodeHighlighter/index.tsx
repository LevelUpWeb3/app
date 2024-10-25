import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import CopyButton from "./CopyButton";
import clsx from "clsx";

const MDXCodeHighlighter = {
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
              backgroundColor: "#252525",
              borderRadius: "15px",
            }}
          >
            <SyntaxHighlighter
              style={{
                ...materialDark,

                'pre[class*="language-"]': {
                  ...materialDark['pre[class*="language-"]'],
                  backgroundColor: "transparent",
                  whiteSpace: "wrap",
                },
              }}
              customStyle={{
                padding: "20px",
                margin: "0 0 20px",
                overflow: "auto",
                backgroundColor: "transparent",
              }}
              language={match[1]}
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
            <CopyButton
              text={children}
              sx={{ position: "absolute", top: "10px", right: "12px" }}
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

export default MDXCodeHighlighter;
