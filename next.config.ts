import fs from 'fs';
import path from 'path';
import type { NextConfig } from 'next';

const logoPath = path.join(process.cwd(), 'public/logo.png');
let logoVersion = '1';

try {
	logoVersion = String(Math.floor(fs.statSync(logoPath).mtimeMs));
} catch {
	// logo.png missing at build time
}

const nextConfig: NextConfig = {
	env: {
		NEXT_PUBLIC_LOGO_VERSION: logoVersion,
	},
	images: {
		domains: ['trustochain.com', 'res.cloudinary.com'],
		localPatterns: [
			{
				pathname: '/logo.png',
			},
		],
	},
	headers: async () => [
		{
			source: '/logo.png',
			headers: [
				{
					key: 'Cache-Control',
					value: 'public, max-age=0, must-revalidate',
				},
			],
		},
	],
	experimental: {
		serverActions: {
			bodySizeLimit: '10mb',
		},
	},
};

export default nextConfig;
