import type { Metadata } from 'next';
import { OriginalSite } from '@/components/original/OriginalSite';
import { OriginalHome } from '@/components/original/OriginalHome';
export const metadata: Metadata = {
  title: 'Blue Beret | Data & AI Consulting',
  description: 'Blue Beret Group is an independent data and technology consultancy in Ireland, helping small businesses, charities and NGOs turn their data into clear answers and working tools.'
};
export default function Page() { return <OriginalSite><OriginalHome /></OriginalSite>; }
