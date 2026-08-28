import Link from 'next/link';
import ReleaseBrowser from './release-browser';
import ThemeToggle from '../theme-toggle';
export const metadata={title:'Downloads'};
export default function Releases(){return <main className="detail-page"><nav className="nav shell"><Link className="brand" href="/"><span className="brand-logo"><img className="logo-light" src="/logivyre-logo-light.svg" alt="Logivyre Labs"/><img className="logo-dark" src="/logivyre-logo-dark.svg" alt="" aria-hidden="true"/></span></Link><div className="nav-actions"><ThemeToggle/><Link className="nav-cta" href="/">Portfolio</Link></div></nav><header className="detail-hero shell compact"><p className="section-index">SOFTWARE DOWNLOADS</p><h1>Releases.</h1><p>Official desktop installers published by Logivyre Labs.</p></header><ReleaseBrowser/><footer><div className="shell footer-bottom"><span>© 2026 Logivyre Labs</span><Link href="/">Back to portfolio</Link></div></footer></main>}
