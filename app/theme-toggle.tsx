'use client';

import {useEffect,useState} from 'react';

type Theme='light'|'dark';

export default function ThemeToggle(){
  const [theme,setTheme]=useState<Theme>('light');
  useEffect(()=>{setTheme(document.documentElement.dataset.theme==='dark'?'dark':'light')},[]);
  function toggleTheme(){
    const next:Theme=theme==='dark'?'light':'dark';
    document.documentElement.dataset.theme=next;
    document.documentElement.style.colorScheme=next;
    localStorage.setItem('logivyre-theme',next);
    setTheme(next);
  }
  return <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme==='dark'?'light':'dark'} mode`} title={`Switch to ${theme==='dark'?'light':'dark'} mode`}><span className="theme-icon" aria-hidden="true">{theme==='dark'?'☀':'☾'}</span><span className="theme-label">{theme==='dark'?'Light':'Dark'}</span></button>;
}
