import type { Metadata } from "next";
import { GmailGenerator } from "@/components/GmailGenerator";

const SITE_URL = "https://magemail.vercel.app";

/* ── Page-level metadata (overrides layout defaults) ─────────────────────── */
export const metadata: Metadata = {
  title: "Gmail Alias Generator — Free Gmail Dot Trick Tool",
  description:
    "Generate every possible Gmail dot alias from your address instantly. Gmail ignores dots in usernames — use the dot trick to create unlimited free email aliases. No sign-up, no data stored.",
  alternates: { canonical: SITE_URL },
};

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */

const jsonLd = {
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the Gmail dot trick?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gmail ignores dots in usernames. j.ohndoe@gmail.com and johndoe@gmail.com are the same inbox. This lets you create unlimited aliases from one account without any extra setup.",
        },
      },
      {
        "@type": "Question",
        name: "How many Gmail aliases can I generate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The formula is 2^(n-1) where n is the number of characters in your username. A 7-character username gives 64 aliases; 10 characters gives 512.",
        },
      },
      {
        "@type": "Question",
        name: "Do Gmail dot aliases actually work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Every generated alias is a real, working Gmail address. Mail sent to any of them lands in your main inbox — Gmail treats them as identical.",
        },
      },
      {
        "@type": "Question",
        name: "Is my email address stored anywhere?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. All generation happens entirely in your browser using JavaScript. Your email address is never sent to any server and is never stored.",
        },
      },
      {
        "@type": "Question",
        name: "Does the Gmail dot trick work with @googlemail.com?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. @googlemail.com is fully equivalent to @gmail.com. The same dot trick applies to both domains.",
        },
      },
      {
        "@type": "Question",
        name: "What can I use Gmail dot aliases for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can use Gmail dot aliases to sign up for multiple services with one account, track which services sell your data, filter incoming email by alias, and avoid spam in your primary address.",
        },
      },
    ],
  },

  software: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Gmail Alias Generator",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    browserRequirements: "Requires JavaScript",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Generate all possible Gmail dot aliases from your Gmail address using the Gmail dot trick. Free, instant, runs entirely client-side with no data stored.",
    url: SITE_URL,
    author: {
      "@type": "Person",
      name: "Abubakar Ibrahim",
      url: "https://sadiqdev-portfolio.vercel.app",
    },
  },

  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Gmail Alias Generator", item: SITE_URL },
    ],
  },

  person: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abubakar Ibrahim",
    alternateName: "sadiqdev1",
    url: "https://sadiqdev-portfolio.vercel.app",
    sameAs: ["https://github.com/sadiqdev1"],
  },

  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MageMail",
    url: SITE_URL,
    description: "Free Gmail dot alias generator tool. No sign-up required.",
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  },
};

/* ── Static data ─────────────────────────────────────────────────────────── */

const HOW_STEPS = [
  {
    n: "01",
    title: "Enter your Gmail address",
    desc: "Type any Gmail or Googlemail address. Existing dots in the username are stripped automatically before generation.",
  },
  {
    n: "02",
    title: "Every combination generated",
    desc: "Using the formula 2ⁿ⁻¹, we compute every valid dot placement between characters — instantly, in your browser.",
  },
  {
    n: "03",
    title: "Copy, advance, repeat",
    desc: 'Hit "Copy & next" to copy the current alias and auto-advance to the next. Or download all as CSV or TXT.',
  },
];

const FAQS = [
  {
    q: "What is the Gmail dot trick?",
    a: "Gmail ignores dots in usernames — j.ohndoe@gmail.com and johndoe@gmail.com land in the exact same inbox. You can use this to create unlimited aliases from a single account.",
  },
  {
    q: "How many aliases will I get?",
    a: "The formula is 2ⁿ⁻¹ where n is your username length. A 6-character username gives 32 aliases; 10 characters gives 512.",
  },
  {
    q: "Do these aliases actually work?",
    a: "Yes. Every generated alias is a real, working Gmail address. Mail sent to any of them lands in your main inbox.",
  },
  {
    q: "Is my email address stored anywhere?",
    a: "No. All generation happens in your browser. Your email never leaves your device and is never sent to any server.",
  },
  {
    q: "What can I use aliases for?",
    a: "Sign up for services to track who sells your data, filter email by alias, avoid spam in your primary address, or create separate identities for different services.",
  },
  {
    q: "Does this work with @googlemail.com?",
    a: "Yes. @googlemail.com is fully equivalent to @gmail.com. The same dot trick applies to both domains.",
  },
];

const C = "w-full max-w-3xl mx-auto px-5 sm:px-8";

/* ── Page ────────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* JSON-LD */}
      {Object.values(jsonLd).map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}

      {/* Dot-grid texture */}
      <div className="dot-grid" aria-hidden="true" />

      {/* ── Header ── */}
      <header className="relative z-40 border-b border-white/[0.06] sticky top-0 backdrop-blur-xl bg-[#09090e]/75">
        <div className={`${C} h-14 flex items-center justify-between`}>
          {/* Logo */}
          <a href="/" aria-label="MageMail home" className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-lg">
            <div className="w-7 h-7 rounded-lg border border-white/10 bg-white/[0.05] flex items-center justify-center transition-colors group-hover:border-white/20 group-hover:bg-white/[0.08]">
              <svg className="w-3.5 h-3.5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-sm font-bold text-white/75 tracking-tight">MageMail</span>
          </a>

          {/* Nav */}
          <nav aria-label="Site navigation" className="hidden sm:flex items-center gap-6">
            {[
              { href: "#how-it-works", label: "How it works" },
              { href: "#faq", label: "FAQ" },
              { href: "#about", label: "About" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-xs text-white/35 hover:text-white/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded"
              >
                {label}
              </a>
            ))}
          </nav>

          <span className="text-[10px] px-2.5 py-1 rounded-full border border-white/[0.08] text-white/30 font-semibold tracking-[0.18em] uppercase">
            Free
          </span>
        </div>
      </header>

      <main className="relative z-10 flex-1">

        {/* ══════════════════════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════════════════════ */}
        <section
          aria-labelledby="hero-heading"
          className="relative overflow-hidden pt-20 pb-20 px-5 sm:px-8"
        >
          {/* Accent beam */}
          <div className="accent-beam" aria-hidden="true" />

          {/* Animated glow blobs */}
          <div className="animate-glow-pulse absolute top-0 left-1/2 w-[800px] h-[380px] bg-indigo-600/[0.13] rounded-full blur-3xl pointer-events-none" style={{ transform: "translate(-50%,0)" }} aria-hidden="true" />
          <div className="animate-glow-drift absolute top-28 left-[15%] w-[340px] h-[240px] bg-violet-500/[0.09] rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="animate-glow-drift absolute top-20 right-[15%] w-[280px] h-[200px] bg-blue-500/[0.07] rounded-full blur-3xl pointer-events-none" style={{ animationDelay: "3.5s" }} aria-hidden="true" />

          <div className="relative z-10 w-full max-w-3xl mx-auto text-center">

            {/* Live badge */}
            <div className="animate-fade-up delay-0 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-[11px] text-white/40 font-semibold tracking-[0.15em] uppercase mb-8">
              <span className="status-dot" aria-hidden="true" />
              Gmail dot trick · Free tool
            </div>

            {/* H1 */}
            <h1
              id="hero-heading"
              className="animate-fade-up delay-100 text-[2.6rem] sm:text-[3.5rem] lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-5"
            >
              <span className="text-white">Gmail Alias</span>
              <br />
              <span className="text-white/20">Generator</span>
            </h1>

            {/* Subtitle — keyword-rich for SEO */}
            <p className="animate-fade-up delay-200 text-sm sm:text-base text-white/35 leading-relaxed max-w-lg mx-auto mb-3">
              Gmail treats dots as invisible —{" "}
              <span className="text-white/55 font-medium">j.ohndoe@gmail.com</span> and{" "}
              <span className="text-white/55 font-medium">johndoe@gmail.com</span> are the same inbox.
            </p>
            <p className="animate-fade-up delay-300 text-sm text-white/25 max-w-md mx-auto mb-12">
              Enter your address and instantly get every possible dot alias. No sign-up. No data stored.
            </p>

            {/* Generator card */}
            <div className="animate-fade-up delay-450 w-full max-w-2xl mx-auto rounded-2xl border border-white/[0.07] bg-white/[0.025] backdrop-blur-sm p-6 sm:p-8 text-left generator-frame">
              <GmailGenerator />
            </div>

            {/* Trust signals */}
            <div className="animate-fade-up delay-600 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8">
              {[
                "100% free",
                "No sign-up",
                "Runs in your browser",
                "No data stored",
              ].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-[11px] text-white/25">
                  <svg className="w-3 h-3 text-emerald-500/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            HOW IT WORKS
        ══════════════════════════════════════════════════════════════════ */}
        <section
          id="how-it-works"
          aria-labelledby="how-heading"
          className="border-t border-white/[0.05] py-20 px-5 sm:px-8"
        >
          <div className={C}>
            <div className="mb-10">
              <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.22em] mb-2">
                How it works
              </p>
              <h2 id="how-heading" className="text-xl font-bold text-white/70">
                Three steps to unlimited aliases
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {HOW_STEPS.map((step) => (
                <div
                  key={step.n}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 hover:border-white/[0.1] hover:bg-white/[0.035] transition-colors"
                >
                  <span className="text-[2.5rem] font-black text-white/[0.04] select-none block mb-4 leading-none font-mono-custom">
                    {step.n}
                  </span>
                  <p className="text-sm font-semibold text-white/60 mb-1.5">{step.title}</p>
                  <p className="text-xs text-white/25 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* Dot trick explainer box */}
            <div className="mt-8 rounded-xl border border-indigo-500/[0.15] bg-indigo-500/[0.04] p-5">
              <p className="text-xs font-semibold text-indigo-300/60 mb-3 uppercase tracking-widest">
                The dot trick explained
              </p>
              <p className="text-sm text-white/30 leading-relaxed mb-4">
                All of the following addresses deliver to the <strong className="text-white/50 font-semibold">same inbox</strong>:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "johndoe@gmail.com",
                  "john.doe@gmail.com",
                  "j.o.h.n.d.o.e@gmail.com",
                  "jo.hn.do.e@gmail.com",
                ].map((e) => (
                  <code
                    key={e}
                    className="px-2.5 py-1 text-[11px] font-mono-custom rounded-lg bg-white/[0.04] border border-white/[0.06] text-white/45"
                  >
                    {e}
                  </code>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            FAQ  (SEO-rich, matches JSON-LD)
        ══════════════════════════════════════════════════════════════════ */}
        <section
          id="faq"
          aria-labelledby="faq-heading"
          className="border-t border-white/[0.05] py-20 px-5 sm:px-8"
        >
          <div className={C}>
            <div className="mb-10">
              <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.22em] mb-2">
                FAQ
              </p>
              <h2 id="faq-heading" className="text-xl font-bold text-white/70">
                Frequently asked questions
              </h2>
            </div>

            <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
              {FAQS.map((faq) => (
                <div key={faq.q}>
                  <dt className="text-sm font-semibold text-white/55 mb-1.5">{faq.q}</dt>
                  <dd className="text-sm text-white/25 leading-relaxed">{faq.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            ABOUT THE DEV
        ══════════════════════════════════════════════════════════════════ */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="border-t border-white/[0.05] py-20 px-5 sm:px-8"
        >
          <div className={C}>
            <div className="mb-10">
              <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.22em] mb-2">
                About the dev
              </p>
              <h2 id="about-heading" className="text-xl font-bold text-white/70">
                Built by Abubakar Ibrahim
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-7">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/sadiq.jpg"
                alt="Abubakar Ibrahim — sadiqdev1"
                width={72}
                height={72}
                className="flex-shrink-0 w-[72px] h-[72px] rounded-2xl object-cover border border-white/[0.08]"
              />

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-sm font-bold text-white/70">Abubakar Ibrahim</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full border border-white/[0.08] text-white/25 font-semibold tracking-widest uppercase">
                    sadiqdev1
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full border border-indigo-500/20 text-indigo-400/40 font-semibold tracking-widest uppercase">
                    Personal project
                  </span>
                </div>

                <p className="text-sm text-white/30 leading-relaxed mb-5 max-w-lg">
                  Built this for personal use — a quick way to spin up Gmail dot aliases without
                  hunting for a tool every time. Everything runs in the browser, no data leaves
                  your device, and it&apos;s completely free.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://sadiqdev-portfolio.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] text-xs font-semibold text-white/40 hover:text-white/70 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Portfolio
                  </a>
                  <a
                    href="https://github.com/sadiqdev1/magemail"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] text-xs font-semibold text-white/40 hover:text-white/70 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    Source code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="relative z-10 border-t border-white/[0.05] py-8 px-5 sm:px-8">
        <div className={`${C}`}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-md border border-white/[0.08] bg-white/[0.04] flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-white/25">MageMail</span>
              <span className="text-white/10 text-xs">·</span>
              <span className="text-[11px] text-white/15">© {new Date().getFullYear()} Abubakar Ibrahim</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
              {[
                { href: "#how-it-works", label: "How it works" },
                { href: "#faq", label: "FAQ" },
                { href: "#about", label: "About" },
                { href: "https://github.com/sadiqdev1/magemail", label: "GitHub", external: true },
              ].map(({ href, label, external }) => (
                <a
                  key={href}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="text-[11px] text-white/20 hover:text-white/45 transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <p className="text-center sm:text-left text-[10px] text-white/10 mt-4">
            Not affiliated with Google LLC. Gmail is a trademark of Google LLC.
          </p>
        </div>
      </footer>
    </>
  );
}
