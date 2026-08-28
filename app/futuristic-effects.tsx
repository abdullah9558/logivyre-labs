'use client';
import {useEffect} from 'react';

export default function FuturisticEffects(){useEffect(()=>{
  const glow=document.getElementById('cursor-glow');
  const move=(event:PointerEvent)=>{if(glow){glow.style.setProperty('--x',`${event.clientX}px`);glow.style.setProperty('--y',`${event.clientY}px`)}};
  const reveal=new IntersectionObserver(entries=>entries.forEach(entry=>entry.isIntersecting&&entry.target.classList.add('is-visible')),{threshold:.12});
  document.querySelectorAll('.hero-copy,.hero-system,.section-heading,.project-card,.studio-grid,.download-callout').forEach(el=>{el.classList.add('reveal');reveal.observe(el)});
  const tilts=[...document.querySelectorAll<HTMLElement>('.project-visual,.hero-system')];
  const onTilt=(event:PointerEvent)=>{const el=event.currentTarget as HTMLElement;const box=el.getBoundingClientRect();const rx=((event.clientY-box.top)/box.height-.5)*-7;const ry=((event.clientX-box.left)/box.width-.5)*7;el.style.setProperty('--rx',`${rx}deg`);el.style.setProperty('--ry',`${ry}deg`);el.style.setProperty('--mx',`${event.clientX-box.left}px`);el.style.setProperty('--my',`${event.clientY-box.top}px`)};
  const reset=(event:PointerEvent)=>{const el=event.currentTarget as HTMLElement;el.style.setProperty('--rx','0deg');el.style.setProperty('--ry','0deg')};
  tilts.forEach(el=>{el.addEventListener('pointermove',onTilt);el.addEventListener('pointerleave',reset)});
  window.addEventListener('pointermove',move,{passive:true});
  return()=>{window.removeEventListener('pointermove',move);reveal.disconnect();tilts.forEach(el=>{el.removeEventListener('pointermove',onTilt);el.removeEventListener('pointerleave',reset)})};
},[]);return null}
