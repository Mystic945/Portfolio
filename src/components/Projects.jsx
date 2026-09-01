import { projects } from "../data/content.js";
import { Reveal } from "./Reveal.jsx";

function ProjectCard({ p }) {
  return (
    <article className={`project-card pc--${p.accent}`}>
      <a
        className="project-card__name"
        href={p.link}
        target="_blank"
        rel="noreferrer noopener"
      >
        {p.name}
        <span className="arrow">→</span>
      </a>

      <p className="project-card__blurb">{p.blurb}</p>

      <div className="project-card__foot">
        <span className="project-card__stack">{p.stack}</span>
        {p.live && (
          <a
            className="project-card__live"
            href={p.live}
            target="_blank"
            rel="noreferrer noopener"
          >
            live
          </a>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <Reveal className="projects-grid" delay={100}>
      {projects.map((p) => (
        <ProjectCard key={p.name} p={p} />
      ))}
    </Reveal>
  );
}
