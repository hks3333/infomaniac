"use client"

export function parseContent(content: string) {
    return content
      .split("\n")
      .filter(line => line.trim() !== "")
      .map((line, index) => {
        if (line.startsWith("## ")) {
          return (
            <h2 key={index} className="text-2xl text-[#74512D] font-semibold mt-8 mb-2">
              {line.replace("## ", "")}
            </h2>
          );
        }
        return (
          <p key={index} className="mb-4 leading-relaxed">
            {line}
          </p>
        );
      });
  }
  