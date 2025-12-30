import { useEffect, useMemo, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&@*+-?/";

function randChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

export default function MatrixText({
  text,
  scrambleKey,
  duration = 520,
  steps = 18,
  className = "",
  as: Tag = "span",
}) {
  const target = String(text ?? "");
  const [out, setOut] = useState(target);

  const indices = useMemo(() => {
    const arr = [];
    for (let i = 0; i < target.length; i++) {
      const c = target[i];
      if (c !== " " && c !== "\n" && c !== "\t") arr.push(i);
    }
    return arr;
  }, [target]);

  useEffect(() => {
    setOut(target);
    if (!target) return;

    const start = performance.now();
    let raf = 0;

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const step = Math.floor(t * steps);
      const revealCount = Math.floor((step / steps) * indices.length);

      const revealed = new Set(indices.slice(0, revealCount));
      const chars = target.split("");

      for (const idx of indices) {
        if (!revealed.has(idx)) chars[idx] = randChar();
      }

      setOut(chars.join(""));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setOut(target);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [scrambleKey, target]); 

  return (
    <Tag className={className} aria-label={target} title={target}>
      {out}
    </Tag>
  );
}
