import { RimBorder } from "./components/RimBorder.jsx";
import { MouseGlow } from "./components/MouseGlow.jsx";
import { Hero } from "./components/Hero.jsx";
import { SectionHeading } from "./components/SectionHeading.jsx";
import { Focus } from "./components/Focus.jsx";
import { Projects } from "./components/Projects.jsx";
import { Skills } from "./components/Skills.jsx";
import { Footer } from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <RimBorder />
      <MouseGlow />

      <div className="baselayout baselayout-responsive" id="top">
        <div className="viewport">
          <main>
            <Hero />

            <SectionHeading id="focus">Focus</SectionHeading>
            <div className="section-pad">
              <Focus />
            </div>

            <SectionHeading id="projects">Projects</SectionHeading>
            <Projects />

            <SectionHeading id="skills">Skills</SectionHeading>
            <div className="section-pad section-pad--btm">
              <Skills />
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
}
