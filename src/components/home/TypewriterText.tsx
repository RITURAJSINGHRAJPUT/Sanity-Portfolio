"use client";

import { useState, useEffect, useCallback } from "react";

interface TypewriterTextProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
}

export default function TypewriterText({
  texts,
  speed = 80,
  deleteSpeed = 40,
  pauseTime = 2000,
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentFullText = texts[textIndex];

    if (!isDeleting) {
      setDisplayText(currentFullText.substring(0, displayText.length + 1));
      if (displayText === currentFullText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }
    } else {
      setDisplayText(currentFullText.substring(0, displayText.length - 1));
      if (displayText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
        return;
      }
    }
  }, [displayText, isDeleting, textIndex, texts, pauseTime]);

  useEffect(() => {
    const timer = setTimeout(tick, isDeleting ? deleteSpeed : speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, deleteSpeed, speed]);

  return (
    <span className="text-[var(--color-accent)]">
      {displayText}
      <span
        className="inline-block w-[2px] h-[1em] bg-[var(--color-accent)] ml-0.5 align-middle"
        style={{ animation: "typewriter-blink 1s infinite" }}
      />
    </span>
  );
}
