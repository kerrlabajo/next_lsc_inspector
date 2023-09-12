'use client'
import '@styles/globals.css'
import { Inter } from 'next/font/google'
import Nav from '../components/Nav/page'
import { SessionProvider } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<title>LSC-Inspector</title>
			</head>
			<body className={inter.className}>
				<SessionProvider>
					<Nav />
					<main className="app">{children}</main>
				</SessionProvider>
			</body>
		</html>
	)
}
