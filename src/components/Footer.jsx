import { nav } from "../data/content.js";

/** Sticky terminal-styled footer bar. */
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-left">
        <span className="term-prompt">pratik@portfolio:~$</span>
      </div>
      <nav className="footer-nav" aria-label="Section navigation">
        <ul>
          {nav.map((n) => (
            <li key={n.href}>
              <a className="nav-link" href={n.href}>
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
