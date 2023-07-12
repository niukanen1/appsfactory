import Providers from '@/components/ui/providers'
import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header/Header'

export const metadata: Metadata = {
  title: 'Todo App',
  description: 'Author: Ivan Niukanen',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body>
				<Providers>
					<main className='mx-2 mb-2'>
						<Header />
						{children}
					</main>
				</Providers>
			</body>
		</html>
	);
}
