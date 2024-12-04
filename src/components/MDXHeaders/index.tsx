function generateSafeDomId(title) {
  if (typeof title !== "string") return;
  const textParts = title.trim().split(" ");
  const safeDomId = textParts
    .filter(Boolean)
    .join("_")
    .replace(/(\s|\.)+/g, "_");

  // Return the generated ID
  return safeDomId;
}
interface MDXHeaderComponentProps {
  node: any;
  inline: boolean;
  className: string;
  children: any;
  props: any;
}

interface MDXHeaderComponents {
  h1: React.FC<MDXHeaderComponentProps>;
  h2: React.FC<MDXHeaderComponentProps>;
  h3: React.FC<MDXHeaderComponentProps>;
  h4: React.FC<MDXHeaderComponentProps>;
  h5: React.FC<MDXHeaderComponentProps>;
  h6: React.FC<MDXHeaderComponentProps>;
}

const MDXHeaders: MDXHeaderComponents = {
  h1({ node, inline, className, children, ...props }) {
    const id = generateSafeDomId(children);
    return (
      <h1 id={id} {...props}>
        {children}
      </h1>
    );
  },
  h2({ node, inline, className, children, ...props }) {
    const id = generateSafeDomId(children);
    return (
      <h2 className={className} id={id} {...props}>
        {children}
      </h2>
    );
  },
  h3({ node, inline, className, children, ...props }) {
    const id = generateSafeDomId(children);
    return (
      <h3 className={className} id={id} {...props}>
        {children}
      </h3>
    );
  },
  h4({ node, inline, className, children, ...props }) {
    const id = generateSafeDomId(children);
    return (
      <h4 className={className} id={id} {...props}>
        {children}
      </h4>
    );
  },
  h5({ node, inline, className, children, ...props }) {
    const id = generateSafeDomId(children);
    return (
      <h5 className={className} id={id} {...props}>
        {children}
      </h5>
    );
  },
  h6({ node, inline, className, children, ...props }) {
    const id = generateSafeDomId(children);
    return (
      <h6 className={className} id={id} {...props}>
        {children}
      </h6>
    );
  },
};

export default MDXHeaders;
