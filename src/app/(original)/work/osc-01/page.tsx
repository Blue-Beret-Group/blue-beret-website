import type { Metadata } from 'next';
import { OriginalSite } from '@/components/original/OriginalSite';
import { OriginalAccountingProject } from '@/components/original/OriginalAccountingProject';
export const metadata: Metadata = {
  title: 'O’Sullivan Clarke: Accounting automation | Blue Beret',
  description: 'How Blue Beret automated quarterly management-account reviews for a chartered accountancy’s retail clients, without changing how the practice prepares its accounts.'
};
export default function Page() { return <OriginalSite><OriginalAccountingProject /></OriginalSite>; }
