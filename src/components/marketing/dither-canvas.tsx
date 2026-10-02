'use client';

import { useEffect, useRef } from 'react';

import { cn } from '@/lib/utils';

const WORDS = [
  { text: 'Research',   size: 24, x: 0.08, y: 0.18, vx:  0.00005, vy:  0.00001 },
  { text: 'University', size: 34, x: 0.62, y: 0.12, vx: -0.00003, vy:  0.00004 },
  { text: 'Scholar',    size: 28, x: 0.48, y: 0.68, vx:  0.00004, vy: -0.00003 },
  { text: 'Professor',  size: 24, x: 0.78, y: 0.78, vx: -0.00004, vy: -0.00002 },
  { text: 'Science',    size: 22, x: 0.84, y: 0.35, vx: -0.00003, vy:  0.00003 },
  { text: 'Faculty',    size: 20, x: 0.05, y: 0.55, vx:  0.00004, vy: -0.00002 },
  { text: 'Innovation', size: 22, x: 0.68, y: 0.28, vx: -0.00002, vy:  0.00004 },
  { text: 'Talent',     size: 26, x: 0.90, y: 0.18, vx: -0.00005, vy:  0.00002 },
  { text: 'Knowledge',  size: 20, x: 0.35, y: 0.82, vx:  0.00003, vy: -0.00003 },
  { text: 'PhD',        size: 26, x: 0.55, y: 0.88, vx: -0.00003, vy: -0.00004 },
] as const;

type LiveWord = {
  text: string;
  size: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  px: number;
  py: number;
  opacity: number;
};

/** Symmetric jitter helper: returns a value in [-amount, +amount]. */
const jitter = (amount: number) => (Math.random() * 2 - 1) * amount;

const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));

/** Read the resolved `--foreground` colour from the document. */
function resolveForegroundColour(): string {
  if (typeof window === 'undefined') return 'rgb(0, 0, 0)';

  const probe = document.createElement('span');
  probe.style.color = 'var(--foreground, currentColor)';
  probe.style.display = 'none';
  document.body.appendChild(probe);

  const colour = getComputedStyle(probe).color;
  probe.remove();

  return colour || 'rgb(0, 0, 0)';
}

/** Read the resolved serif font stack so canvas text matches the design tokens. */
function resolveSerifStack(): string {
  if (typeof window === 'undefined') return 'serif';

  const probe = document.createElement('span');
  probe.style.fontFamily = 'var(--font-serif, ui-serif, Georgia, serif)';
  probe.style.display = 'none';
  document.body.appendChild(probe);

  const family = getComputedStyle(probe).fontFamily;
  probe.remove();

  return family || 'serif';
}

export function DitherCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const colourQuery = window.matchMedia('(prefers-color-scheme: dark)');

    let colour = resolveForegroundColour();
    let fontStack = resolveSerifStack();

    // ---- Word state ---------------------------------------------------------
    const words: LiveWord[] = WORDS.map((w) => ({
      text: w.text,
      size: w.size,
      x: clamp(w.x + jitter(0.08), 0.05, 0.95),
      y: clamp(w.y + jitter(0.08), 0.05, 0.95),
      vx: w.vx * (0.6 + Math.random() * 0.8),
      vy: w.vy * (0.6 + Math.random() * 0.8),
      px: 0,
      py: 0,
      opacity: 0.07 + Math.random() * 0.05,
    }));

    // ---- Viewport state -----------------------------------------------------
    let width = 0;
    let height = 0;
    let dpr = 1;
    let frame = 0;
    let lastTime = 0;
    let running = false;
    let inView = true;
    let warmedUp = false;

    const projectWord = (word: LiveWord) => {
      word.px = word.x * width;
      word.py = word.y * height;
    };

    /**
     * Advance every word by `frames` steps, honouring wrapping.
     * Used both for the initial warmup and (via renderFrame) per animation tick.
     */
    const advance = (word: LiveWord, frames: number) => {
      word.px += word.vx * width * frames;
      word.py += word.vy * height * frames;

      word.x = word.px / width;
      word.y = word.py / height;

      const padX = word.size * 8;
      const padY = word.size;

      if (word.px < -padX) {
        word.px = width + padX;
        word.x = word.px / width;
      } else if (word.px > width + padX) {
        word.px = -padX;
        word.x = word.px / width;
      }

      if (word.py < -padY) {
        word.py = height + padY;
        word.y = word.py / height;
      } else if (word.py > height + padY) {
        word.py = -padY;
        word.y = word.py / height;
      }
    };

    /** Pre-advance the sim by a random number of frames, once, after first sizing. */
    const warmup = () => {
      if (warmedUp) return;
      warmedUp = true;

      // Enough frames to move each word visibly, but not so many that slow
      // words have time to loop all the way around the canvas.
      const steps = 200 + Math.floor(Math.random() * 3000);

      for (let i = 0; i < steps; i++) {
        for (const word of words) advance(word, 1);
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const nextDpr = window.devicePixelRatio || 1;

      const nextWidth = Math.max(1, Math.round(rect.width));
      const nextHeight = Math.max(1, Math.round(rect.height));
      const nextBackingW = Math.round(nextWidth * nextDpr);
      const nextBackingH = Math.round(nextHeight * nextDpr);

      if (
        canvas.width === nextBackingW &&
        canvas.height === nextBackingH &&
        width === nextWidth &&
        height === nextHeight &&
        dpr === nextDpr
      ) {
        return;
      }

      width = nextWidth;
      height = nextHeight;
      dpr = nextDpr;

      canvas.width = nextBackingW;
      canvas.height = nextBackingH;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.textBaseline = 'middle';

      for (const word of words) projectWord(word);

      // Warm up only after the first real sizing pass.
      warmup();

      colour = resolveForegroundColour();
      fontStack = resolveSerifStack();

      if (!running) renderStatic();
    };

    // ---- Rendering ----------------------------------------------------------
    const renderFrame = (dtFrames: number) => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = colour;
      ctx.textBaseline = 'middle';

      for (const word of words) {
        if (dtFrames > 0) advance(word, dtFrames);

        ctx.globalAlpha = word.opacity;
        ctx.font = `${word.size}px ${fontStack}`;
        ctx.fillText(word.text, word.px, word.py);
      }

      ctx.globalAlpha = 1;
    };

    const renderStatic = () => renderFrame(0);

    const loop = (now: number) => {
      if (!running) return;

      const deltaMs = lastTime ? now - lastTime : 16.67;
      lastTime = now;

      const dtFrames = Math.min(deltaMs, 50) / 16.67;

      renderFrame(dtFrames);

      frame = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running || motionQuery.matches || !inView) {
        renderStatic();
        return;
      }
      running = true;
      lastTime = 0;
      frame = requestAnimationFrame(loop);
    };

    const stop = () => {
      if (!running) return;
      running = false;
      cancelAnimationFrame(frame);
      frame = 0;
    };

    // ---- Observers ----------------------------------------------------------
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (inView) start();
        else stop();
      },
      { rootMargin: '100px' },
    );
    intersectionObserver.observe(canvas);

    const onMotionChange = () => {
      stop();
      start();
    };

    const onColourChange = () => {
      colour = resolveForegroundColour();
      fontStack = resolveSerifStack();
      if (!running) renderStatic();
    };

    motionQuery.addEventListener('change', onMotionChange);
    colourQuery.addEventListener('change', onColourChange);

    resize();
    start();

    return () => {
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      motionQuery.removeEventListener('change', onMotionChange);
      colourQuery.removeEventListener('change', onColourChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 h-full w-full',
        className,
      )}
    />
  );
}
