import { Reveal } from "./Reveal.jsx";

export function SectionHeading({ id, children }) {
  return (
    <Reveal as="h2" className="section-heading" id={id} delay={60}>
      <span className="section-heading__comment">// </span>
      {children}
    </Reveal>
  );
}
