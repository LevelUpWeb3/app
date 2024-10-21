import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/cjs/styles/prism";
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
            className="example-code-panel"
            style={{
              position: "relative",
              // backgroundColor: "#15150F",
              backgroundColor: "#fff",
              fontSize: "14px",
            }}
          >
            <SyntaxHighlighter
              style={{
                ...solarizedlight,

                'pre[class*="language-"]': {
                  ...solarizedlight['pre[class*="language-"]'],
                  backgroundColor: "transparent",
                  whiteSpace: "wrap",
                },
              }}
              language={match[1]}
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
            <div style={{ position: "absolute", top: "1px", right: "10px" }}>
              <CopyButton text={children} />
            </div>
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
