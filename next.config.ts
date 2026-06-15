import type { NextConfig } from 'next';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isGithubPages = process.env.DEPLOY_TARGET === 'github-pages';
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH || (isGithubPages && repoName ? `/${repoName}` : '');

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: configuredBasePath || undefined,
  assetPrefix: configuredBasePath || undefined,
};

export default nextConfig;
