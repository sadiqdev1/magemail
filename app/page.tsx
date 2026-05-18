import { GmailGenerator } from "@/components/GmailGenerator";

const SITE_URL = "https://magemail.vercel.app";

/* ── JSON-LD structured data ─────────────────────────────────────────────── */

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Gmail dot trick?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gmail ignores dots in usernames. j.ohndoe@gmail.com and johndoe@gmail.com are the same inbox. This lets you create unlimited aliases from one account.",
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
        text: "Yes. Every generated alias is a real, working Gmail address. Mail sent to any of them lands in your main inbox.",
      },
    },
    {
      "@type": "Question",
      name: "Is my email address stored anywhere?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. All generation happens in your browser. Your email never leaves your device and is never sent to any server.",
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
  ],
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Gmail Alias Generator",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Web",
  browserRequirements: "Requires JavaScript",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Generate all possible Gmail dot aliases from your Gmail address using the Gmail dot trick. Free, instant, runs entirely client-side.",
  url: SITE_URL,
  author: {
    "@type": "Person",
    name: "Abubakar Ibrahim",
    url: "https://sadiqdev-portfolio.vercel.app",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "1",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Gmail Alias Generator",
      item: `${SITE_URL}/`,
    },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abubakar Ibrahim",
  alternateName: "sadiqdev1",
  url: "https://sadiqdev-portfolio.vercel.app",
};

/* shared container width */
const CONTAINER = "w-full max-w-3xl mx-auto px-5 sm:px-8";

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }} />

      <div className="min-h-screen bg-[#09090e] text-white flex flex-col">

        {/* ── Header ── */}
        <header className="border-b border-white/[0.06] sticky top-0 z-30 backdrop-blur-md bg-[#09090e]/80">
          <div className={`${CONTAINER} h-14 flex items-center justify-between`}>
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-sm font-bold text-white/80 tracking-tight">MageMail</span>
            </div>
            <span className="text-[10px] px-2.5 py-1 rounded-full border border-white/10 text-white/35 font-semibold tracking-widest uppercase">
              Free
            </span>
          </div>
        </header>

        <main className="flex-1">

          {/* ── Hero ── */}
          <section aria-labelledby="hero-heading" className="relative overflow-hidden pt-20 pb-16 px-5 sm:px-8">

            {/* Animated glow blobs */}
            <div className="animate-glow-pulse absolute top-0 left-1/2 w-[700px] h-[340px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" style={{ transform: "translate(-50%,0)" }} aria-hidden="true" />
            <div className="animate-glow-drift absolute top-24 left-1/4 w-[320px] h-[220px] bg-violet-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
            <div className="animate-glow-drift absolute top-16 right-1/4 w-[260px] h-[180px] bg-blue-500/8 rounded-full blur-3xl pointer-events-none" style={{ animationDelay: "3s" }} aria-hidden="true" />

            <div className="relative z-10 w-full max-w-3xl mx-auto text-center">

              {/* Badge */}
              <div className="animate-fade-up delay-100 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-[11px] text-white/45 font-semibold tracking-widest uppercase mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                Gmail dot trick
              </div>

              {/* Heading */}
              <h1
                id="hero-heading"
                className="animate-fade-up delay-200 text-[2.75rem] sm:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5"
              >
                <span className="text-white">Mage Mail</span>
                <br />
                <span className="text-white/25">Generator</span>
              </h1>

              <p className="animate-fade-up delay-300 text-sm sm:text-base text-white/35 leading-relaxed max-w-md mx-auto mb-12">
                Gmail treats dots as invisible. Enter your address and get every
                possible alias — all delivered to the same inbox.
              </p>

              {/* Generator card */}
              <div className="animate-fade-up delay-450 w-full max-w-2xl mx-auto rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-6 sm:p-8 text-left">
                <GmailGenerator />
              </div>
            </div>
          </section>

          {/* ── How it works ── */}
          <section id="how-it-works" aria-labelledby="how-heading" className="border-t border-white/[0.06] py-16 px-5 sm:px-8">
            <div className={`${CONTAINER}`}>
              <p className="text-[10px] font-bold text-white/25 uppercase tracking-[0.2em] mb-8">
                How it works
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  {
                    n: "01",
                    title: "Enter your address",
                    desc: "Type any Gmail or Googlemail address. Existing dots are stripped automatically.",
                  },
                  {
                    n: "02",
                    title: "Every combo generated",
                    desc: "We compute all 2ⁿ⁻¹ dot placements between characters instantly in your browser.",
                  },
                  {
                    n: "03",
                    title: "Copy & move on",
                    desc: "Hit Copy & next to grab an alias and auto-advance. Or download them all at once.",
                  },
                ].map(step => (
                  <div key={step.n} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                    <span className="text-4xl font-black text-white/[0.04] select-none block mb-4 leading-none">{step.n}</span>
                    <p className="text-sm font-semibold text-white/60 mb-1.5">{step.title}</p>
                    <p className="text-xs text-white/25 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── About the Dev ── */}
          <section id="about" aria-labelledby="about-heading" className="border-t border-white/[0.06] py-16 px-5 sm:px-8">
            <div className={`${CONTAINER}`}>
              <p className="text-[10px] font-bold text-white/25 uppercase tracking-[0.2em] mb-8">
                About the dev
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-8">
                {/* Avatar */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/sadiq.jpg"
                  alt="Sadiq — developer"
                  width={64}
                  height={64}
                  className="flex-shrink-0 w-16 h-16 rounded-2xl object-cover border border-white/10"
                />

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h2 id="about-heading" className="text-base font-bold text-white/80">
                      Abubakar Ibrahim
                    </h2>
                    <span className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-white/30 font-semibold tracking-widest uppercase">
                      sadiqdev1
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-white/30 font-semibold tracking-widest uppercase">
                      Personal project
                    </span>
                  </div>

                  <p className="text-sm text-white/35 leading-relaxed mb-5 max-w-lg">
                    Built this for personal use — a quick way to spin up Gmail dot aliases without
                    hunting for a tool every time. Everything runs in the browser, no data leaves
                    your device.
                  </p>

                  <a
                    href="https://sadiqdev-portfolio.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-xs font-semibold text-white/50 hover:text-white/80 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    sadiqdev-portfolio.vercel.app
                  </a>
                </div>
              </div>
            </div>
          </section>

        </main>

        {/* ── Footer ── */}
        <footer className="border-t border-white/[0.06] py-6 px-5 sm:px-8">
          <div className={`${CONTAINER} flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-white/15`}>
            <span>© {new Date().getFullYear()} MageMail</span>
            <span>Not affiliated with Google LLC. Gmail is a trademark of Google LLC.</span>
          </div>
        </footer>

      </div>
    </>
  );
}
