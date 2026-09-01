import { contacts } from "../data/content.js";
import { ICONS } from "./Icons.jsx";

export function Contacts() {
  return (
    <nav className="contacts" aria-label="Social links">
      <ul>
        {contacts.map((c) => {
          const Icon = ICONS[c.kind];
          const external = c.href.startsWith("http");
          return (
            <li key={c.kind}>
              <a
                href={c.href}
                aria-label={c.label}
                title={c.label}
                {...(external
                  ? { target: "_blank", rel: "noreferrer noopener" }
                  : {})}
              >
                <Icon />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
