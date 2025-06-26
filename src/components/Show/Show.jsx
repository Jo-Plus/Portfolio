import React from 'react'
import "./Show.css";

export default function Show() {
  return (<>
    <div className="app hidden">
      <div className="tag-list">
        {[15951, 19260, 10449, 16638, 15936].map((duration, index) => {
          const tags = [
            ["JavaScript", "webdev", "Typescript", "Next.js", "Material Design", "Redux","animation", "Tailwind","JavaScript","github"],
            ["webdev", "Html", "Css", "Bootstrap", "Typescript","JavaScript","github","figma", "webdev", "Typescript","figma","React"],
            ["animation", "Tailwind", "React", "git","animation","HTML","github", "Postman", "scss","Bootstrap","Material Design","Next.js"],
            ["scss", "HTML", "CSS", "React", "Next.js","figma","React","webdev","Redux", "Typescript", "Next.js","JavaScript","github"],
            ["Next.js", "React", "webdev", "Typescript", "git","animation","HTML","github", "Material Design", "Redux","animation"],
          ];
          return (
            <div
              key={index}
              className="loop-slider"
              // @ts-ignore
              style={{ "--duration": `${duration}ms`, "--direction": index % 2 === 0 ? "normal" : "reverse" }}
            >
              <div className="inner">
                {tags[index].map((tag, i) => (
                  <div className="tag" key={i}>
                    <span>#</span> {tag}
                  </div>
                ))}
                {tags[index].map((tag, i) => (
                  <div className="tag" key={`dup-${i}`}>
                    <span>#</span> {tag}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
        <div className="fade"></div>
      </div>
    </div>
    </>)
}
