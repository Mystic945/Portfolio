import { skillTracks } from "../data/content.js";
import { Reveal } from "./Reveal.jsx";

function Track({ track }) {
  // duplicate the list so the -50% translate loops seamlessly
  const loop = [...track.items, ...track.items];

  return (
    <div className="skill-row">
      <span className={`skill-label skill-label--${track.color}`}>
        {track.label}
      </span>
      <div className="marquee-wrap" title="hover to pause">
        <div
          className={`marquee${track.reverse ? " reverse" : ""}`}
          style={{ animationDuration: track.speed }}
        >
          {loop.map((item, i) => {
            const isLast = i % track.items.length === track.items.length - 1;
            return (
              <span key={`${item}-${i}`} style={{ display: "inline-flex", gap: 18 }}>
                <span className={`skill-item skill-item--${track.color}`}>
                  {item}
                </span>
                {!isLast && <span className="skill-sep">·</span>}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <Reveal className="skills" delay={80}>
      {skillTracks.map((track) => (
        <Track key={track.label} track={track} />
      ))}
    </Reveal>
  );
}
