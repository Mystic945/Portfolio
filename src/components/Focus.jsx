import { focus } from "../data/content.js";
import { Reveal } from "./Reveal.jsx";

export function Focus() {
  return (
    <Reveal className="focus" delay={80}>
      {focus.map((row) => (
        <div className="focus-item" key={row.title}>
          <span className="focus-period">{row.period}</span>
          <div className="focus-body">
            <div className="focus-title">{row.title}</div>
            <div className="focus-detail">{row.detail}</div>
          </div>
          <span className="focus-tag">{row.tag}</span>
        </div>
      ))}
    </Reveal>
  );
}
