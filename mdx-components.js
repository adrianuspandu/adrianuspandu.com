import React from "react";
import Link from "next/link";
import { highlight } from "sugar-high";

const components = {
  h1: (props) => (
    <h1 className="font-bold font-sans text-4xl pt-12 mb-2" {...props} />
  ),
  h2: (props) => (
    <h2 className="font-bold font-sans text-4xl pt-12 mb-2" {...props} />
  ),
  h3: (props) => (
    <h3
      className="font-bold font-sans text-xl text-zinc-300 pt-8 mb-2"
      {...props}
    />
  ),
  h4: (props) => <h4 className="font-medium text-zinc-300" {...props} />,
  p: (props) => <p className="mb-4 text-zinc-400" {...props} />,
  ol: (props) => (
    <ol
      className="text-gray-800 dark:text-zinc-300 list-decimal pl-5 space-y-2"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="text-zinc-400 list-disc pl-5 space-y-1"
      {...props}
    />
  ),
  li: (props) => <li className="pl-1" {...props} />,
  em: (props) => <em className="font-medium" {...props} />,
  strong: (props) => <strong className="font-medium" {...props} />,
  a: ({ href, children, ...props }) => {
    const className = "text-primary hover:text-greenAccent underline";
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },
  pre: (props) => (
    <pre className="bg-zinc-900 text-zinc-200 p-4 rounded-lg overflow-x-auto text-sm mb-4" {...props} />
  ),

  // Inline Code (HIGHLIGHTED)
  code: ({ children, className, ...props }) => {
    const isBlockCode = className?.includes("language-") || className?.includes("hljs");

    if (isBlockCode) {
      // If it's a block code, return plain <code> (inside <pre>)
      return <code className="text-inherit" {...props}>{children}</code>;
    }

    // Inline Code Highlighting
    const highlightedCode = highlight(children);
    return (
      <code
        className="bg-gray-800 text-zinc-200 px-1 py-0.5 rounded"
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
        {...props}
      />
    );
  },
  Table: ({ data }) => (
    <table>
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  blockquote: (props) => (
    <blockquote
      className="ml-[0.075em] border-l-3 border-gray-300 pl-4 text-gray-700 dark:border-zinc-600 dark:text-zinc-300"
      {...props}
    />
  ),
};

export function useMDXComponents() {
  return components;
}
