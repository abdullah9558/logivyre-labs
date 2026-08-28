import type {Metadata} from 'next';
import {Manrope,Newsreader} from 'next/font/google';
import './globals.css';
const manrope=Manrope({variable:'--font-sans',subsets:['latin']});
const newsreader=Newsreader({variable:'--font-serif',subsets:['latin'],style:['normal','italic']});
export const metadata:Metadata={metadataBase:new URL('https://logivyrelabs.com'),title:{default:'Logivyre Labs — Useful software, thoughtfully engineered',template:'%s — Logivyre Labs'},description:'An independent software studio building products for personal finance, quality engineering and modern retail.',openGraph:{title:'Logivyre Labs',description:'Useful software, thoughtfully engineered.',images:['/projects/mera-markaz-thumbnail.png']}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${manrope.variable} ${newsreader.variable}`}>{children}</body></html>}
