import type { Metadata } from 'next';
import { OriginalSite } from '@/components/original/OriginalSite';
import { OriginalSalesProject } from '@/components/original/OriginalSalesProject';
export const metadata: Metadata = {
  title: 'Mr Wu: Sales & channel analysis | Blue Beret',
  description: 'How Blue Beret analysed a year of restaurant trading data to guide staffing priorities and test the economics of delivery channels.'
};
export default function Page() { return <OriginalSite><OriginalSalesProject /></OriginalSite>; }
