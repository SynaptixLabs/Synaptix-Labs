import React from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";

const MarkdownRenderer = ({ content }) => {
  return (
    <MarkdownPreview 
      source={unescapeMarkdown(content)} 
      style={{ 
        padding: 16, 
        backgroundColor: "transparent"
      }} 
      wrapperElement={{
          "data-color-mode": "dark"
          }}
      components={{
       
        ul: ({ node, ...props }) => <ul {...props} style={{ listStyleType: "unset",color: "#fff" }} />,
        ol: ({ node, ...props }) => <ol {...props} style={{ listStyleType: "auto",color: "#fff" }} />,
        pre: ({ node, ...props }) => <pre {...props} style={{ backgroundColor: "rgb(50, 50, 77)" }} />
        
      }}
    />
  );
};

export default MarkdownRenderer;

export const unescapeMarkdown = (escapedString) => {
  return escapedString
      .replace(/\\n/g, '\n')           // Convert \\n to actual newlines
      .replace(/\\"/g, '"')           // Convert \\" to actual quotes
      .replace(/\\'/g, "'")           // Convert \\' to actual single quotes
      .replace(/\\\\/g, '\\')         // Convert \\\\ to actual backslashes
      .replace(/\\t/g, '\t')          // Convert \\t to actual tabs
      .trim();                        // Remove leading/trailing whitespace
};