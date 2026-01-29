import React, { useEffect, useMemo, useState } from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import MarkdownRenderer from "../Markdown";




const ReadingText = ({ trendsChilds, setHeadingText,selectedSection }) => {
  const markdown = trendsChilds[0]?.content || "";
  // Extract headings with their level and generate an ID for each
const headings = useMemo(() => {
  const tree = unified().use(remarkParse).parse(markdown);
  const result = [];
  const walk = (node) => {
    if (node.type === "heading") {
      const text = node.children
        ?.filter((child) => child.type === "text")
        ?.map((child) => child.value)
        ?.join("");
      const id = text?.toLowerCase()?.replace(/^\d+\s*/, (match) => match.trim())?.replace(/\s+/g, "-")?.replace(/[^a-z0-9-]/g, "");
      
      result?.push({ text, id, level: node.depth });
    }
    if (node?.children) {
      node?.children?.forEach(walk);
    }
  };
  walk(tree);
  return result;
}, [markdown]);

useEffect(() => {
  setHeadingText(headings);
}, [headings, setHeadingText]);

  
  

 

useEffect(() => {
  if (selectedSection) {
    const el = document.getElementById(selectedSection);
    if (el) {
      const rect = el?.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const offsetTop = rect.top + scrollTop - window.innerHeight * 0.25; // 25% from top
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  }
}, [selectedSection]);

  return (
    
      <div className=" text-white  ">
      <MarkdownRenderer content={markdown}/>   
      </div>

  );
};

export default ReadingText;
