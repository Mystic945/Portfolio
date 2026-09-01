import { useEffect, useRef, useState } from "react";

const WORDS = [
  "agentic ai engineer",
  "rag & llm apps",
  "full-stack web dev",
  "c++ / python",
  "build. deploy. ship.",
];

/** Types a phrase, holds, deletes, advances — loops forever. */
export function Typewriter() {
  const [text, setText] = useState("");
  const state = useRef({ w: 0, c: 0, deleting: false });

  useEffect(() => {
    let timer;

    const tick = () => {
      const s = state.current;
      const word = WORDS[s.w];

      if (s.deleting) {
        s.c -= 1;
        setText(word.slice(0, s.c));
        if (s.c === 0) {
          s.deleting = false;
          s.w = (s.w + 1) % WORDS.length;
          timer = setTimeout(tick, 400);
          return;
        }
        timer = setTimeout(tick, 35);
      } else {
        s.c += 1;
        setText(word.slice(0, s.c));
        if (s.c === word.length) {
          s.deleting = true;
          timer = setTimeout(tick, 2200);
          return;
        }
        timer = setTimeout(tick, 75 + Math.random() * 50);
      }
    };

    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <span className="typewriter" aria-label="agentic ai engineer, full-stack web developer">
      <span className="typewriter__prefix">$&nbsp;</span>
      <span className="typewriter__text">{text}</span>
      <span className="typewriter__cursor" aria-hidden="true" />
    </span>
  );
}
