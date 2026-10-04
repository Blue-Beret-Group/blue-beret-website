import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import './styles.css';
export const metadata: Metadata = { title: "Blue Beret | Data & AI Consulting", description: 'Blue Beret: independent data analysis, reporting and automation in Ireland.' };
export default function Layout({children}: {children: ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
