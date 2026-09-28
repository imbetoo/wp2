"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const easeOut = [0.23, 1, 0.32, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Desplazamiento vertical inicial en px */
  distance?: number;
  as?: "div" | "li" | "article" | "p";
};

/**
 * Aparición al entrar en pantalla (una sola vez).
 * Superficie de marketing: 700ms. Con movimiento reducido solo hay fundido.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  distance = 24,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      initial={{
        opacity: 0,
        transform: reduce ? "none" : `translateY(${distance}px)`,
      }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: reduce ? 0.3 : 0.7, ease: easeOut, delay }}
    >
      {children}
    </Tag>
  );
}

/**
 * Texto enmascarado: cada línea sube desde detrás de una máscara.
 */
export function MaskLines({
  lines,
  className,
  lineClassName,
  delay = 0,
  stagger = 0.07,
  animateOnView = false,
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  animateOnView?: boolean;
}) {
  const reduce = useReducedMotion();
  const variants = {
    hidden: {
      opacity: reduce ? 0 : 1,
      transform: reduce ? "none" : "translateY(105%)",
    },
    shown: (i: number) => ({
      opacity: 1,
      transform: "translateY(0%)",
      transition: {
        duration: reduce ? 0.3 : 0.8,
        ease: easeOut,
        delay: delay + i * stagger,
      },
    }),
  };

  // El contenedor (visible) detecta la entrada en pantalla y propaga la
  // animación a las líneas: las líneas enmascaradas no son detectables
  // porque su padre las recorta.
  return (
    <motion.span
      className={`block ${className ?? ""}`}
      initial="hidden"
      {...(animateOnView
        ? {
            whileInView: "shown",
            viewport: { once: true, margin: "0px 0px -80px 0px" },
          }
        : { animate: "shown" })}
    >
      {lines.map((line, i) => (
        <span
          key={i}
          className="block overflow-hidden pb-[0.08em] -mb-[0.08em]"
        >
          <motion.span
            className={`block ${lineClassName ?? ""}`}
            custom={i}
            variants={variants}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
