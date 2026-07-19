/** Standard typography scale for invitation sections */
export const sectionType = {
  /** Small uppercase labels — Cinzel captions, tags, citations */
  label: "text-[0.6875rem] sm:text-xs md:text-sm",
  /** Body copy — Goudy italic paragraphs */
  text: "text-[0.875rem] sm:text-[0.9375rem] md:text-base",
  textRelaxed: "text-[0.875rem] sm:text-[0.9375rem] md:text-base leading-[1.62] sm:leading-[1.65]",
  textSnug: "text-[0.875rem] sm:text-[0.9375rem] md:text-base leading-snug",
  /** Secondary emphasis — sign-off names, supporting titles */
  subheader: "text-sm sm:text-base md:text-lg",
  /** Decorative script phrases */
  script: "text-[1.5rem] leading-none min-[400px]:text-[1.65rem] sm:text-[1.875rem] md:text-[2.1rem]",
} as const

/** CSS values for layered display titles (Welcome, Details, etc.) */
export const layeredTitleSize = {
  main: "clamp(2.15rem, 11vw, 4.5rem)",
  script: "clamp(1.1rem, 4.5vw, 2.25rem)",
  overlap: "clamp(-0.65rem, -2.8vw, -1.5rem)",
} as const

/** Welcome card title — scales to card width so "Welcome" never overflows on desktop */
export const welcomeTitleSize = {
  main: "clamp(2.3rem, min(12vw, 17cqi), 5.75rem)",
  script: "clamp(1.2rem, min(5.5vw, 7.5cqi), 2.85rem)",
  overlap: "clamp(-0.85rem, min(-3.5vw, -3.5cqi), -2rem)",
} as const

/** Layered section titles — container-aware sizing for longer multi-word headings */
export const layeredSectionTitleSize = {
  main: "clamp(2rem, min(9vw, 10cqi), 3.75rem)",
  script: "clamp(1.15rem, min(4.8vw, 5.8cqi), 2.35rem)",
  overlap: "clamp(-0.65rem, min(-2.8vw, -2.8cqi), -1.5rem)",
} as const

/** Story chapter titles — scales within the story text column */
export const storyChapterTitleSize = "clamp(1.125rem, min(5.5vw, 13cqi), 2.25rem)"

/** Modal layered titles — compact container-aware sizing */
export const modalTitleSize = {
  main: "clamp(1.5rem, min(5vw, 12cqi), 2.35rem)",
  script: "clamp(1.05rem, min(3.5vw, 7cqi), 1.85rem)",
  overlap: "clamp(-0.55rem, min(-2.2vw, -2.2cqi), -1rem)",
} as const
