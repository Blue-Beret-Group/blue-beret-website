import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import './styles.css';
export const metadata: Metadata = { title: "Blue Beret — A different view of your data", description: 'Blue Beret: independent data analysis, reporting and automation in Ireland.' };
export default function Layout({children}: {children: ReactNode}) {
  return <html lang="en" data-theme="light"><body>{children}</body></html>;
}
