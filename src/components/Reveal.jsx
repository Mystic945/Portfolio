import { motion, useReducedMotion } from "motion/react";

/**
 * Scroll-reveal wrapper. Elements start 22px low and fade/slide in once when
 * they enter the viewport — mirrors the `.reveal` behaviour of the reference
 * site, driven here by Motion's `whileInView`.
 */
export function Reveal({
  children,
  as = "div",
  delay = 0,
  className = "",
  ...rest
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
      transition={{
        duration: 0.85,
        ease: [0.4, 0, 0.2, 1],
        delay: delay / 1000,
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
