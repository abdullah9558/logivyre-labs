import type {Metadata} from 'next';
import {Manrope,Newsreader} from 'next/font/google';
import './globals.css';
const manrope=Manrope({variable:'--font-sans',subsets:['latin']});
const newsreader=Newsreader({variable:'--font-serif',subsets:['latin'],style:['normal','italic']});
export const metadata:Metadata={metadataBase:new URL('https://logivyrelabs.com'),title:{default:'Logivyre Labs — Useful software, thoughtfully engineered',template:'%s — Logivyre Labs'},description:'An independent software studio building products for personal finance, quality engineering and modern retail.',icons:{icon:[{url:'/logivyre-mark-light.png',media:'(prefers-color-scheme: light)',sizes:'1254x1254'},{url:'/logivyre-mark-dark.png',media:'(prefers-color-scheme: dark)',sizes:'1254x1254'}],apple:{url:'/logivyre-mark-light.png',sizes:'1254x1254'}},openGraph:{title:'Logivyre Labs',description:'Useful software, thoughtfully engineered.',images:['/projects/mera-markaz-thumbnail.png']}};
const themeScript=`(()=>{try{const saved=localStorage.getItem('logivyre-theme');const system=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';const theme=saved==='light'||saved==='dark'?saved:system;document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme}catch{}})()`;
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html:themeScript}}/></head><body className={`${manrope.variable} ${newsreader.variable}`}>{children}</body></html>}
