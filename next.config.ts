import type { NextConfig } from 'next';
const config: NextConfig = {
  async redirects() {
    // This keeps bookmarks and shared links from the old HTML version working.
    return [
      { source: '/alt.html', destination: '/alt', permanent: true },
      { source: '/index.html', destination: '/', permanent: true }
    ];
  }
};
export default config;
