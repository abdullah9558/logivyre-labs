import Link from 'next/link';
import ReleaseBrowser from './release-browser';
export const metadata={title:'Downloads'};
export default function Releases(){return <main className="detail-page"><nav className="nav shell"><Link className="brand" href="/"><span className="brand-mark">L</span><span>Logivyre Labs</span></Link><Link className="nav-cta" href="/">Portfolio</Link></nav><header className="detail-hero shell compact"><p className="section-index">SOFTWARE DOWNLOADS</p><h1>Releases.</h1><p>Official desktop installers published by Logivyre Labs.</p></header><ReleaseBrowser/><footer><div className="shell footer-bottom"><span>© 2026 Logivyre Labs</span><Link href="/">Back to portfolio</Link></div></footer></main>}
