'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Loader } from './Loader';

export default function DynamicStyles() {
	const pathname = usePathname();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Check if we're not in admin or dashboard routes
		if (
			!pathname.startsWith('/admin') &&
			!pathname.startsWith('/dashboard') &&
			!pathname.startsWith('/auth')
		) {
			// Load the home styles
			const styleLinks = [
				'/assets/css/style.css',
				'/assets/css/custom.css',
			];

			let loadedStyles = 0;
			const totalStyles = styleLinks.length;

			styleLinks.forEach((href) => {
				const link = document.createElement('link');
				link.rel = 'stylesheet';
				link.href = href;
				link.onload = () => {
					loadedStyles++;
					if (loadedStyles === totalStyles) {
						setIsLoading(false);
					}
				};
				document.head.appendChild(link);
			});

			// Add black background style
			const blackBackgroundStyle = document.createElement('style');
			blackBackgroundStyle.textContent = `
				body {
					background-color: #000000;
				}
			`;
			document.head.appendChild(blackBackgroundStyle);

			// Cleanup function to remove styles when component unmounts
			return () => {
				styleLinks.forEach((href) => {
					const links = document.querySelectorAll(
						`link[href="${href}"]`
					);
					links.forEach((link) => link.remove());
				});
				// Remove the black background style
				blackBackgroundStyle.remove();
			};
		} else {
			setIsLoading(false);
		}
	}, [pathname]);

	if (isLoading) {
		return (
			<div
				style={{
					position: 'fixed',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: '#000000',
					zIndex: 9999,
				}}
			>
				<Loader />
			</div>
		);
	}

	return null;
}
