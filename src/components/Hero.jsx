import { motion, useReducedMotion } from "motion/react";
import { profile, stats, currently } from "../data/content.js";
import { Typewriter } from "./Typewriter.jsx";
import { Contacts } from "./Contacts.jsx";

const AVATAR = `${import.meta.env.BASE_URL}avatar.svg`;

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.09, delayChildren: 0.05 },
    },
  };
  const item = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 18 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
        },
      };

  return (
    <header className="hero">
      <motion.div
        className="hero__main"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 className="hero__name glow-amber-bold" variants={item}>
          {profile.heading}
        </motion.h1>

        <motion.div className="status-row" variants={item}>
          <span className="dot" />
          <span className="status-text">{profile.status}</span>
        </motion.div>

        <motion.div variants={item}>
          <Typewriter />
        </motion.div>

        <motion.div className="hero__bio" variants={item}>
          {profile.bio.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </motion.div>

        <motion.div className="pill-row" variants={item}>
          {stats.map((s) => (
            <span key={s.label} className={`stat-pill stat-pill--${s.color}`}>
              <span className={`pill-dot pill-dot--${s.color}`} />
              <span className="stat-value">{s.label}</span>
              <span className="pill-sep">·</span>
              <span className="stat-note">{s.note}</span>
            </span>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__aside"
        initial={reduce ? false : { opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        <img
          className="pfp"
          src={AVATAR}
          width={300}
          height={300}
          alt={`${profile.name} avatar`}
        />

        <Contacts />

        <div className="lang-row">
          {currently.map((l) => (
            <span key={l.name} className={`lang-pill lang-pill--${l.color}`}>
              <span className={`pill-dot pill-dot--${l.color}`} />
              <span className="lang-name">{l.name}</span>
              <span className="pill-sep">·</span>
              <span className="lang-level">{l.level}</span>
            </span>
          ))}
        </div>
      </motion.div>
    </header>
  );
}
