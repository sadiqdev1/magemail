"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { validateGmailAddress, generateDotAliases, downloadFile } from "@/lib/gmail-generator";

/* ── toast hook ─────────────────────────────────────────────────────────── */

function useToast() {
  const [msg, setMsg] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const show = useCallback((text: string) => {
    if (timer.current) clearTimeout(timer.current);
    setMsg(text);
    timer.current = setTimeout(() => setMsg(null), 2000);
  }, []);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  return { msg, show };
}

/* ── icons ──────────────────────────────────────────────────────────────── */

const IconCopy = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
  </svg>
);

const IconCheck = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const IconDownload = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const IconChevron = ({ open }: { open: boolean }) => (
  <svg
    className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

/* ── main component ─────────────────────────────────────────────────────── */

export function GmailGenerator() {
  const [input, setInput]           = useState("");
  const [error, setError]           = useState<string | null>(null);
  const [aliases, setAliases]       = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copiedIdx, setCopiedIdx]   = useState<number | null>(null);
  const [listOpen, setListOpen]     = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const toast    = useToast();

  const currentAlias = aliases[currentIndex] ?? null;
  const progress     = aliases.length > 0 ? (currentIndex / aliases.length) * 100 : 0;
  const allUsed      = aliases.length > 0 && currentIndex >= aliases.length;

  function generate(email: string) {
    const err = validateGmailAddress(email);
    if (err) { setError(err); return; }
    setError(null);
    const list = generateDotAliases(email);
    setAliases(list);
    setCurrentIndex(0);
    setCopiedIdx(null);
    setListOpen(false);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    generate(input);
  }

  async function copyAndAdvance(alias: string, idx: number) {
    try {
      await navigator.clipboard.writeText(alias);
      setCopiedIdx(idx);
      toast.show("Copied to clipboard");
      setTimeout(() => {
        setCurrentIndex(prev => Math.min(prev + 1, aliases.length));
        setCopiedIdx(null);
      }, 700);
    } catch {
      toast.show("Copy failed — try manually.");
    }
  }

  async function copyAll() {
    try {
      await navigator.clipboard.writeText(aliases.join("\n"));
      toast.show(`All ${aliases.length} aliases copied`);
    } catch {
      toast.show("Copy failed.");
    }
  }

  function handleDownload(type: "csv" | "txt") {
    const base = input.trim().toLowerCase().split("@")[0].replace(/\./g, "");
    if (type === "csv") {
      downloadFile(
        "Email Alias\n" + aliases.map(a => `"${a}"`).join("\n"),
        `${base}-aliases.csv`, "text/csv"
      );
    } else {
      downloadFile(aliases.join("\n"), `${base}-aliases.txt`, "text/plain");
    }
    toast.show(`${type.toUpperCase()} downloaded`);
  }

  return (
    <div className="w-full">

      {/* ── Input ── */}
      <form onSubmit={handleSubmit} noValidate>
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <label htmlFor="gmail-input" className="sr-only">Gmail address</label>
            <input
              ref={inputRef}
              id="gmail-input"
              type="text"
              value={input}
              onChange={e => { setInput(e.target.value); setError(null); }}
              placeholder="yourname@gmail.com"
              autoComplete="email"
              inputMode="email"
              spellCheck={false}
              aria-invalid={!!error}
              aria-describedby={error ? "input-error" : undefined}
              className={`w-full h-12 px-4 rounded-xl border bg-white/5 backdrop-blur text-white placeholder-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-white/40 transition-all ${
                error
                  ? "border-red-400/60 focus:ring-red-400/40"
                  : "border-white/10 hover:border-white/20"
              }`}
            />
          </div>
          <button
            type="submit"
            disabled={!input.trim()}
            className="h-12 px-6 rounded-xl bg-white text-gray-900 text-sm font-semibold hover:bg-white/90 disabled:opacity-30 disabled:cursor-not-allowed transition-all focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent whitespace-nowrap"
          >
            Generate
          </button>
        </div>
        {error && (
          <p id="input-error" role="alert" className="mt-2 text-xs text-red-400 animate-slide-down">
            {error}
          </p>
        )}
      </form>

      {/* ── Results ── */}
      {aliases.length > 0 && (
        <div className="mt-8 space-y-4 animate-fade-up">

          {/* Stats row */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-white/40 uppercase tracking-widest font-medium">
              {aliases.length} aliases generated
            </span>
            <span className="text-xs text-white/30">
              {currentIndex} used
            </span>
          </div>

          {/* Progress bar */}
          <div className="h-px w-full bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-white/50 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
              role="progressbar"
              aria-valuenow={currentIndex}
              aria-valuemin={0}
              aria-valuemax={aliases.length}
              aria-label="Aliases used"
            />
          </div>

          {/* Current alias card */}
          {!allUsed && currentAlias ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
              <p className="text-[10px] font-semibold text-white/30 uppercase tracking-widest mb-3">
                Next alias — #{currentIndex + 1}
              </p>
              <div className="flex items-center justify-between gap-3">
                <code className="text-sm font-mono text-white/90 break-all leading-relaxed">
                  {currentAlias}
                </code>
                <button
                  onClick={() => copyAndAdvance(currentAlias, currentIndex)}
                  aria-label={`Copy ${currentAlias} and get next alias`}
                  className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-white/40 ${
                    copiedIdx === currentIndex
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                      : "bg-white text-gray-900 hover:bg-white/90"
                  }`}
                >
                  {copiedIdx === currentIndex ? <><IconCheck /> Copied</> : <><IconCopy /> Copy &amp; next</>}
                </button>
              </div>
              {currentIndex < aliases.length - 1 && (
                <p className="mt-3 text-[11px] text-white/25">
                  Copies the alias and advances to the next one automatically.
                </p>
              )}
              {currentIndex === aliases.length - 1 && (
                <p className="mt-3 text-[11px] text-amber-400/70">
                  Last alias remaining.
                </p>
              )}
            </div>
          ) : allUsed ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
              <p className="text-sm text-white/50 mb-3">All aliases used.</p>
              <button
                onClick={() => { setCurrentIndex(0); setCopiedIdx(null); }}
                className="text-xs px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white/70 transition-colors"
              >
                Start over
              </button>
            </div>
          ) : null}

          {/* Expandable full list */}
          <div className="rounded-2xl border border-white/10 overflow-hidden">
            {/* Toggle header — div to avoid nested button violation */}
            <div className="flex items-center justify-between px-4 py-3.5 bg-white/5">
              {/* Toggle trigger */}
              <button
                onClick={() => setListOpen(o => !o)}
                aria-expanded={listOpen}
                aria-controls="alias-list"
                className="flex items-center gap-2 text-xs font-medium text-white/50 hover:text-white/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded"
              >
                <IconChevron open={listOpen} />
                View all {aliases.length} aliases
              </button>

              {/* Export buttons */}
              <div className="flex gap-1.5">
                <button
                  onClick={copyAll}
                  className="flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/15 text-white/60 hover:text-white/90 transition-colors focus:outline-none focus:ring-1 focus:ring-white/30"
                >
                  <IconCopy /> Copy all
                </button>
                <button
                  onClick={() => handleDownload("csv")}
                  className="flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/15 text-white/60 hover:text-white/90 transition-colors focus:outline-none focus:ring-1 focus:ring-white/30"
                >
                  <IconDownload /> CSV
                </button>
                <button
                  onClick={() => handleDownload("txt")}
                  className="flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/15 text-white/60 hover:text-white/90 transition-colors focus:outline-none focus:ring-1 focus:ring-white/30"
                >
                  <IconDownload /> TXT
                </button>
              </div>
            </div>

            {/* List */}
            {listOpen && (
              <ul
                id="alias-list"
                className="max-h-64 overflow-y-auto divide-y divide-white/5 animate-slide-down"
                aria-label="All generated aliases"
              >
                {aliases.map((alias, i) => (
                  <li
                    key={alias}
                    className={`group flex items-center justify-between px-4 py-2.5 transition-colors ${
                      i === currentIndex
                        ? "bg-white/8"
                        : i < currentIndex
                        ? "opacity-30"
                        : "hover:bg-white/5"
                    }`}
                  >
                    <span className="text-xs font-mono text-white/70 truncate mr-3">
                      {alias}
                    </span>
                    <button
                      onClick={() => { setCurrentIndex(i); copyAndAdvance(alias, i); }}
                      aria-label={`Copy ${alias}`}
                      className="flex-shrink-0 opacity-0 group-hover:opacity-100 focus:opacity-100 text-[11px] px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white/60 hover:text-white transition-all focus:outline-none focus:ring-1 focus:ring-white/30"
                    >
                      Copy
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

      {/* ── Toast ── */}
      {toast.msg && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none animate-fade-in"
        >
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-gray-900 text-xs font-semibold shadow-2xl">
            <IconCheck />
            {toast.msg}
          </div>
        </div>
      )}
    </div>
  );
}
