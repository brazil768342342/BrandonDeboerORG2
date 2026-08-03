import {
  ShieldAlert,
  ExternalLink,
  AlertTriangle,
  Building2,
  Users,
  Link2,
  Lock,
  ScrollText,
  Quote,
} from 'lucide-react';

const MAIN_IMAGE =
  'https://images.pexels.com/photos/5697256/pexels-photo-5697256.jpeg?auto=compress&cs=tinysrgb&w=1600';

const socials = [
  { label: 'LinkedIn — brandondeboer', href: 'https://ca.linkedin.com/in/brandondeboer' },
  { label: 'LinkedIn — brandonbjd', href: 'https://ca.linkedin.com/in/brandonbjd' },
  { label: 'Instagram — @bjdnet', href: 'https://www.instagram.com/bjdnet/' },
  { label: 'Instagram — @b1cs', href: 'https://www.instagram.com/b1cs/' },
  { label: 'Facebook — bjdnet', href: 'https://www.facebook.com/bjdnet/' },
  { label: 'Twitter — @bjdnet', href: 'https://twitter.com/bjdnet' },
  { label: 'Twitter — @deboer', href: 'https://twitter.com/deboer' },
  { label: 'Twitter — @AGlanceMedia', href: 'https://twitter.com/AGlanceMedia' },
  { label: 'X — @lq1media', href: 'https://x.com/lq1media' },
];

const reports = [
  {
    title: 'BlitzMetrics: "Brandon Deboer — How This Influencer Scammed Thousands Using Google as Bait"',
    href: 'https://blitzmetrics.com/brandon-deboer-how-this-influencer-scammed-thousands-using-google-as-bait/',
  },
  {
    title: 'RipoffReport: "Brandon Deboer DBA BCS — Twitter Verification Scam Artist"',
    href: 'https://www.ripoffreport.com/reports/brandon-deboer-dba-bcs-twitter-verification-scam-artist/internet/brandon-deboer-dba-bcs-twitter-verification-scam-artist-twitter-verification-scam-artis-1006426',
  },
  {
    title: 'RipoffReport: "Brandon Deboer DBA BCS Marketing — Internet Marketing Scam"',
    href: 'https://www.ripoffreport.com/reports/brandon-deboer-dba-bcs-marketing/dutton-ontario-/brandon-deboer-dba-bcs-marketing-internet-marketing-scam-twitter-verification-web-devel-1006115',
  },
  {
    title: 'LinkedIn — Dennis Yu\'s $2,500 scam experience (118 comments)',
    href: 'https://www.linkedin.com/posts/dennisyu_i-paid-2500-to-brandon-deboer-an-influencer-activity-7051371137062096896-64SX',
  },
  {
    title: 'Reddit r/PPC: "SCAM ALERT — Brandon Deboer, LQ1 Media Inc, Brandon J"',
    href: 'https://www.reddit.com/r/PPC/comments/1malt08/scam_alert_brandon_deboer_lq1_media_inc_brandon_j/',
  },
  {
    title: 'ScamAdviser — LQ1Media.com rated as potentially suspicious',
    href: 'https://www.scamadviser.com/check-website/lq1media.com',
  },
];

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-4xl px-6 py-16 scroll-mt-24">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">{title}</h2>
      <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-300">
        {children}
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 antialiased">
      {/* Top bar */}
      <header className="sticky top-0 z-20 border-b border-white/5 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-white">
            <ShieldAlert className="h-5 w-5 text-red-500" />
            <span className="text-sm font-bold tracking-wide">
              BRANDON DEBOER — FRAUD DOSSIER
            </span>
          </div>
          <nav className="hidden gap-6 text-sm text-zinc-400 sm:flex">
            <a href="#dossier" className="transition hover:text-white">Dossier</a>
            <a href="#report" className="transition hover:text-white">Scam Report</a>
            <a href="#accounts" className="transition hover:text-white">Accounts</a>
            <a href="#evidence" className="transition hover:text-white">Evidence</a>
            <a href="#protect" className="transition hover:text-white">Protect Yourself</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={MAIN_IMAGE}
            alt="Scam Alert warning written in chalk on a blackboard"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/85 to-zinc-950" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
          <span className="inline-flex items-center gap-3 rounded-full border border-red-500/30 bg-red-500/10 px-7 py-3 text-lg font-bold uppercase tracking-[0.2em] text-red-400 sm:text-2xl">
            <AlertTriangle className="h-6 w-6 sm:h-7 sm:w-7" /> Public Fraud Warning
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-6xl">
            Brandon J. Deboer
          </h1>
          <div className="mt-6 flex justify-center">
            <div className="relative overflow-hidden rounded-xl border-2 border-red-500/60 shadow-lg shadow-red-900/30 w-40 sm:w-48">
              <img
                src="/Screenshot_2026-08-02_at_18.03.20.png"
                alt="Brandon Deboer — scam alert"
                className="w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-red-600/90 py-1 text-center text-xs font-bold uppercase tracking-widest text-white">
                Wanted
              </div>
            </div>
          </div>
          <p className="mt-4 text-lg text-zinc-300 sm:text-xl">
            President, LQ1 Media Inc. · London, Ontario, Canada
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">
            A documented serial scammer who has operated under at least six business
            names since 2012, collecting upfront payments for digital services and
            delivering nothing. Conservative estimates put total fraud at over{' '}
            <span className="font-semibold text-white">$360,000</span>.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#dossier"
              className="rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
            >
              Read the Dossier
            </a>
            <a
              href="#evidence"
              className="rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              View Evidence
            </a>
          </div>
        </div>
      </section>

      {/* Stat band */}
      <section className="border-y border-white/5 bg-zinc-900/50">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px px-6 sm:grid-cols-4">
          {[
            { stat: '54+', label: 'Documented victims' },
            { stat: '6', label: 'Business names used' },
            { stat: '$360K+', label: 'Estimated fraud (LQ1 era)' },
            { stat: '2012', label: 'Operating since' },
          ].map((s) => (
            <div key={s.label} className="px-4 py-8 text-center">
              <p className="text-3xl font-extrabold text-white">{s.stat}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-zinc-400">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Dossier */}
      <Section id="dossier" eyebrow="Background" title="The Pattern">
        <p>
          Brandon Deboer has operated under at least six different business names
          since 2012. Each time, he collects upfront payments for digital services —
          primarily social media account recovery, Meta Business Manager restoration,
          Google review removal, and Twitter/X verification — and delivers nothing.
        </p>
        <p>
          When victims push back, he issues endless refund promises, then blocks them
          across all platforms and threatens legal action.
        </p>
        <p>
          His current operation, LQ1 Media Inc., uses the same script as every
          previous entity. A signed contract creates the appearance of legitimacy. A
          professional, calm demeanor prevents early suspicion. Bitcoin or PayPal
          payments minimize chargeback risk. Then: silence, promises, blocking,
          rebranding.
        </p>
        <p>
          His known victim group spans at least 10 named individuals with documented
          losses ranging from $2,500 to $14,500 per case. Conservative estimates put
          total fraud in the LQ1 Media era alone at over{' '}
          <span className="font-semibold text-white">$360,000</span>. His full career
          total is likely well into the high six figures.
        </p>
      </Section>

      {/* Scam report */}
      <section id="report" className="border-y border-white/5 bg-zinc-900/40 scroll-mt-24">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
            Victim Statement
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            One Victim's Account
          </h2>
          <div className="mt-8 rounded-xl border border-white/10 bg-zinc-950/60 p-6 sm:p-8">
            <Quote className="h-8 w-8 text-red-500/60" />
            <blockquote className="mt-4 space-y-4 text-lg leading-relaxed text-zinc-200">
              <p className="font-semibold text-white">
                We gave Brandon $8,500 to recover our Facebook accounts, which he
                promised he could do. He ends up ghosting and blocking you on all
                platforms without delivering a thing.
              </p>
              <p className="text-base text-zinc-300">
                Brandon Deboer reached out via Facebook offering Meta business account
                recovery services. After signing a contract and making payment through
                PayPal, multiple red flags appeared — he wasn't delivering on his
                promises.
              </p>
              <p className="text-base text-zinc-300">
                Despite promises of refunds and lies about bank processing times, no
                refund was ever processed. PayPal support confirmed no refund attempt
                was made. The PayPal dispute was lost due to insufficient evidence
                (WhatsApp screenshots not accepted), while Deboer falsely claimed to
                still be working on services weeks after going silent.
              </p>
            </blockquote>
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-red-400">
            <AlertTriangle className="h-4 w-4" />
            This individual should be blocked permanently for fraudulent activity.
          </p>
        </div>
      </section>

      {/* Known accounts */}
      <Section id="accounts" eyebrow="Identifiers" title="Known Social Accounts">
        <p>
          Brandon Deboer maintains a network of social profiles across platforms.
          These accounts are used to source new victims and present a professional
          front.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {socials.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-lg border border-white/10 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-300 transition hover:border-red-500/40 hover:bg-zinc-900 hover:text-white"
            >
              <Link2 className="h-4 w-4 shrink-0 text-zinc-500 group-hover:text-red-400" />
              <span className="flex-1">{s.label}</span>
              <ExternalLink className="h-3.5 w-3.5 text-zinc-600 group-hover:text-zinc-300" />
            </a>
          ))}
        </div>
      </Section>

      {/* Associated company */}
      <section id="company" className="border-y border-white/5 bg-zinc-900/40 scroll-mt-24">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
            Front Entity
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Associated "Company"
          </h2>
          <div className="mt-6 flex items-start gap-4 rounded-xl border border-white/10 bg-zinc-950/60 p-6">
            <Building2 className="mt-1 h-6 w-6 shrink-0 text-red-500" />
            <div>
              <p className="text-lg font-semibold text-white">LQ1 Media Inc.</p>
              <p className="mt-1 text-sm text-zinc-400">
                Website:{' '}
                <a
                  href="https://www.lq1media.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 underline-offset-4 hover:underline"
                >
                  lq1media.com
                </a>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                LQ1 Media Inc. is the latest in a string of business names used to
                solicit upfront payments. ScamAdviser rates the domain as potentially
                suspicious.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence */}
      <Section id="evidence" eyebrow="Documentation" title="Evidence & Scam Reports">
        <p>
          Multiple documented scam reports are available online. Below are direct
          links to verified reports from independent sources.
        </p>
        <ul className="mt-6 space-y-3">
          {reports.map((r) => (
            <li key={r.href}>
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 rounded-lg border border-white/10 bg-zinc-900/50 px-4 py-4 text-sm transition hover:border-red-500/40 hover:bg-zinc-900"
              >
                <ScrollText className="mt-0.5 h-4 w-4 shrink-0 text-zinc-500 group-hover:text-red-400" />
                <span className="flex-1 text-zinc-200 group-hover:text-white">
                  {r.title}
                </span>
                <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-zinc-600 group-hover:text-zinc-300" />
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-zinc-500">
          Additional community discussions can be found by searching "Brandon Deboer
          scam" on Reddit communities such as r/scams and r/Entrepreneur.
        </p>
      </Section>

      {/* Protect yourself */}
      <section
        id="protect"
        className="scroll-mt-24 border-t border-white/5 bg-gradient-to-b from-zinc-900/40 to-zinc-950"
      >
        <div className="mx-auto max-w-4xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
            Stay Safe
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Protect Yourself
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: Users,
                title: 'Verify before you trust',
                body: 'Brandon Deboer maintains professional communication and never admits to scamming victims, making him particularly dangerous to potential targets.',
              },
              {
                icon: Lock,
                title: 'Never pay upfront',
                body: 'Every documented case involves upfront payment via PayPal or Bitcoin followed by non-delivery. Refuse advance payment for recovery services.',
              },
              {
                icon: AlertTriangle,
                title: 'Document everything',
                body: 'PayPal disputes require strong evidence. WhatsApp screenshots alone were rejected. Keep contracts, emails, and payment receipts.',
              },
              {
                icon: ShieldAlert,
                title: 'Report and block',
                body: 'If you have been targeted, report to your payment provider, file with RipoffReport or ScamAdviser, and block all associated accounts.',
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-xl border border-white/10 bg-zinc-950/60 p-6"
              >
                <c.icon className="h-6 w-6 text-red-500" />
                <h3 className="mt-4 text-base font-semibold text-white">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-zinc-950">
        <div className="mx-auto max-w-4xl px-6 py-10 text-center">
          <div className="flex items-center justify-center gap-2 text-white">
            <ShieldAlert className="h-5 w-5 text-red-500" />
            <span className="text-sm font-bold tracking-wide">
              BRANDON DEBOER — FRAUD DOSSIER
            </span>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-zinc-500">
            This warning is based on documented victim experiences and public reports.
            The linked sources are independently published and not affiliated with this
            site. This content is presented in the public interest to warn potential
            victims of fraudulent activity.
          </p>
          <p className="mt-4 text-xs text-zinc-600">
            Stay safe and verify before you trust.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
