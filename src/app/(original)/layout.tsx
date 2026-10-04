import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import './styles.css';
export const metadata: Metadata = { title: "Blue Beret | Data & AI Consulting", description: 'Blue Beret: independent data analysis, reporting and automation in Ireland.' };
export default function Layout({children}: {children: ReactNode}) {
  // This preserves the original blue-and-white palette even when the visitor
  // uses dark mode on their device.
  return <html lang="en" data-theme="light"><body>{children}</body></html>;
}
