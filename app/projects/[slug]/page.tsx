import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import ThemeToggle from '../../theme-toggle';

const projects={
  'mera-markaz':{
    title:'Mera Markaz',type:'Android finance & utility suite',platform:'Android · English & Urdu',status:'Active development',image:'/projects/mera-markaz-thumbnail.png',intro:'Money, bills and everyday services—designed around life in Pakistan.',
    body:'Mera Markaz brings personal finance and essential utilities into one secure, bilingual Android experience. It is designed around Pakistani users, local currencies and everyday workflows instead of adapting a generic international finance template.',
    challenge:'Most personal finance apps either require constant connectivity or ignore the local context that makes them genuinely useful in Pakistan. Mera Markaz combines offline reliability, account portability and practical intelligence without forcing online AI on every user.',
    features:['Expense, category and monthly trend tracking','Recurring bill organization and reminders','Fuel consumption and cost insights','English, Urdu and Roman Urdu assistance','Persistent guest sessions with account upgrade','Email, Google and Facebook authentication','Encrypted cloud backup and device restore','Consent-based Gemini guidance with local fallback'],
    stack:'Flutter · Dart · Firebase Authentication · Firestore · SQLCipher · Gemini · App Check',
    architecture:'An offline-first Flutter client stores finance records in an encrypted local database. Authenticated users can synchronize encrypted payloads through Firebase, while guest users retain a durable local session. Online AI receives only a deliberately limited financial summary after explicit consent.',
    facts:[['Mode','Offline first'],['Security','Encrypted'],['Languages','English + Urdu'],['AI','Optional']],
    gallery:[['/projects/mera-markaz/welcome.jpeg','Welcome and sign-in experience'],['/projects/mera-markaz-thumbnail.png','Mera Markaz product identity'],['/projects/mera-markaz-logo.png','Application brand mark']]
  },
  'testmind-ai':{
    title:'TestMind AI',type:'AI-assisted quality engineering',platform:'Responsive web application',status:'Functional full-stack MVP',image:'/projects/testmind/dashboard.png',intro:'Turn product context into test coverage that teams can understand, execute and improve.',
    body:'TestMind AI connects test planning, execution and engineering output. Requirements, product descriptions, telemetry and screen recordings become reviewable test coverage instead of disconnected documents and manual checklists.',
    challenge:'QA teams lose time translating the same product intent across test cases, execution tools, automation frameworks and issue trackers. TestMind AI keeps those artifacts connected while preserving human review at every important step.',
    features:['AI test generation from stories and specifications','Timestamped multimodal screen-recording analysis','Editable test library with execution states','Playwright, Cypress and Selenium starters','Bug reporting and diagnostic telemetry parsing','GitHub OAuth, repository publishing and pull requests','Project dashboards and persisted analytics','Groq routing with Gemini fallback for large inputs'],
    stack:'React 19 · TypeScript · Node.js · Express · PostgreSQL · Gemini · Groq · GitHub API',
    architecture:'A React and Vite client communicates with an Express TypeScript API secured by JWT. PostgreSQL stores projects, test cases, recordings and bug reports. The backend routes text tasks between Groq and Gemini, while multimodal recording analysis uses Gemini and GitHub integration publishes generated QA assets.',
    facts:[['Input','Text + video'],['Automation','3 frameworks'],['Integrations','GitHub'],['Backend','Node.js']],
    gallery:[['/projects/testmind/dashboard.png','Project dashboard and QA overview'],['/projects/testmind/recording-analysis.png','Screen-recording analysis workspace'],['/projects/testmind-logo.png','TestMind AI identity']]
  },
  simplepos:{
    title:'SimplePOS',type:'Offline-first desktop point of sale',platform:'Windows desktop',status:'Installer available · v1.0.6',image:'/projects/simplepos/dashboard.png',intro:'Fast retail operations that keep working—even when the connection does not.',
    body:'SimplePOS is a practical desktop point-of-sale system for multi-store retailers. Checkout remains fast and reliable through a local-first data model, while an optional cloud service synchronizes shared business information when connectivity is available.',
    challenge:'Retail checkout cannot stop because a connection drops. SimplePOS writes sales locally first and queues cloud mutations, preserving the speed and certainty of desktop software while still supporting centralized multi-store operations.',
    features:['Offline-first checkout and local SQLite storage','Multi-store inventory and scoped stock levels','Products, categories, customers and suppliers','Sales history, refunds and printable receipts','Purchase orders and customer balances','Role-based admin, manager and cashier access','Reports, backup and restore workflows','Optional PostgreSQL cloud synchronization'],
    stack:'Electron · React 19 · TypeScript · Node.js · SQLite · Prisma · PostgreSQL',
    architecture:'The Electron desktop application routes privileged operations through IPC into typed services and repositories. Checkout commits to SQLite before any network work. A durable synchronization queue sends mutations through an HTTPS Node API to PostgreSQL when cloud mode is enabled.',
    facts:[['Release','1.0.6'],['Platform','Windows'],['Mode','Offline first'],['Stores','Multi-store']],
    gallery:[['/projects/simplepos/dashboard.png','Operational dashboard'],['/projects/simplepos/checkout.png','Fast checkout workspace'],['/projects/simplepos/products.png','Product catalogue management'],['/projects/simplepos/inventory.png','Store-scoped inventory'],['/projects/simplepos/purchase-orders.png','Purchase order workflow'],['/projects/simplepos/reports.png','Sales and business reports']]
  }
} as const;

type Slug=keyof typeof projects;
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=projects[slug as Slug];if(!p)return{};return{title:p.title,description:p.intro,openGraph:{title:`${p.title} — Logivyre Labs`,description:p.intro,images:[p.image]},twitter:{card:'summary_large_image',title:`${p.title} — Logivyre Labs`,description:p.intro,images:[p.image]}}}

export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=projects[slug as Slug];if(!p)notFound();return <main className="detail-page">
  <nav className="nav shell"><Link className="brand" href="/"><span className="brand-logo"><img className="logo-light" src="/logivyre-logo-light.png" alt="Logivyre Labs"/><span className="logo-dark-composite" aria-hidden="true"><img src="/logivyre-mark-dark.png" alt=""/><span className="logo-dark-type"><strong>LOGIVYRE</strong><small><i/>LABS<i/></small></span></span></span></Link><div className="nav-actions"><ThemeToggle/><Link className="nav-cta" href="/">All projects</Link></div></nav>
  <header className="detail-hero shell"><p className="section-index">{p.type}</p><h1>{p.title}</h1><p>{p.intro}</p><div className="project-facts">{p.facts.map(([label,value])=><div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div></header>
  <section className="detail-image shell"><img src={p.image} alt={`${p.title} interface`}/></section>
  <section className="detail-body shell"><div><p className="section-index">THE PRODUCT</p><h2>Built to make demanding work feel straightforward.</h2></div><div><p>{p.body}</p><p>{p.challenge}</p><p className="stack-label">Platform & status</p><p>{p.platform} · {p.status}</p></div></section>
  <section className="capability-section"><div className="shell"><div className="capability-head"><p className="section-index">CAPABILITIES</p><h2>What it does.</h2></div><div className="capability-grid">{p.features.map((feature,index)=><div key={feature}><span>{String(index+1).padStart(2,'0')}</span><p>{feature}</p></div>)}</div></div></section>
  <section className="architecture shell"><div><p className="section-index">HOW IT WORKS</p><h2>A dependable foundation.</h2></div><div><p>{p.architecture}</p><p className="stack-label">Technology</p><p>{p.stack}</p>{slug==='simplepos'&&<Link className="button primary" href="/releases">Download for Windows</Link>}</div></section>
  <section className={`gallery shell gallery-${slug}`}><div className="gallery-head"><p className="section-index">PRODUCT TOUR</p><h2>Inside {p.title}.</h2></div><div className="gallery-grid">{p.gallery.map(([src,caption],index)=><figure key={src} className={index===0?'gallery-featured':''}><div><img src={src} alt={caption}/></div><figcaption><span>{String(index+1).padStart(2,'0')}</span>{caption}</figcaption></figure>)}</div></section>
  <section className="next-project shell"><p>Explore the full portfolio</p><Link href="/">View all Logivyre products →</Link></section>
  <footer><div className="shell footer-bottom"><span>© 2026 Logivyre Labs</span><Link href="/">Back to portfolio</Link></div></footer>
</main>}
