import type { Metadata } from 'next';
import { OriginalSite } from '@/components/original/OriginalSite';
import { OriginalReviewsProject } from '@/components/original/OriginalReviewsProject';
export const metadata: Metadata = {
  title: 'Chuan City: Customer review analysis | Blue Beret',
  description: 'How Blue Beret analysed seven years of Google reviews to explain a restaurant’s rating gap between dine-in and delivery.'
};
export default function Page() { return <OriginalSite><OriginalReviewsProject /></OriginalSite>; }
