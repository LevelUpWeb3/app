import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/cjs/styles/prism";

const MDXCodeHighlighter = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
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
        children={String(children).replace(/\n$/, "")}
        {...props}
      />
    ) : (
      <code
        className={className}
        {...props}
      >
        {children}
      </code>
    );
  },
};

export default MDXCodeHighlighter;
