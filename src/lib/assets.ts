const logoVersion = process.env.NEXT_PUBLIC_LOGO_VERSION ?? '1';

export const LOGO_SRC = `/logo.png?v=${logoVersion}`;

export function getLogoUrl(origin?: string) {
	const base =
		origin ??
		process.env.NEXT_PUBLIC_APP_URL ??
		(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

	return `${base.replace(/\/$/, '')}${LOGO_SRC}`;
}
