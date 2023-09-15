'use client'
import '@styles/globals.css'
import React, { useState } from 'react'
import { Inter } from 'next/font/google'
import Nav from '../components/Nav/page'
import { SessionProvider, useSession } from 'next-auth/react'
import { Person, Face2, History, House, PieChart } from '@mui/icons-material'

import Footer from '@components/Footer/page'
import Script from 'next/script'
import Sidebar from '@components/sidebar'

const inter = Inter({ subsets: ['latin'] })

let menu = [
	{
		title: 'Dashboard',
		icon: PieChart,
		route: '/dashboard',
	},
	{
		title: 'Home',
		icon: House,
		route: '/home',
	},
	{
		title: 'History',
		icon: History,
		route: '/history',
	},
	{
		title: 'Profile',
		icon: Person,
		route: '/profile',
	},
]

export default function RootLayout({ children }) {
	const [loading, setLoading] = useState(true)
	// const { data: session } = useSession()

	return (
		<html lang="en">
			<head>
				<title>LSC-Inspector</title>
				<Script id="docsbot">
					{`
					window.DocsBotAI=window.DocsBotAI||{},DocsBotAI.init=function(c){return new Promise(function(e,o){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://widget.docsbot.ai/chat.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n),t.addEventListener("load",function(){window.DocsBotAI.mount({id:c.id,supportCallback:c.supportCallback});var t;t=function(n){return new Promise(function(e){if(document.querySelector(n))return e(document.querySelector(n));var o=new MutationObserver(function(t){document.querySelector(n)&&(e(document.querySelector(n)),o.disconnect())});o.observe(document.body,{childList:!0,subtree:!0})})},t&&t("#docsbotai-root").then(e).catch(o)}),t.addEventListener("error",function(t){o(t.message)})})};
					DocsBotAI.init({id: "ZrbLG98bbxZ9EFqiPvyl/UMADr9eozeBQ8sZKr0GW",supportCallback: function (event, history) {
			event.preventDefault();
			DocsBotAI.unmount();
			Beacon('init', '1dc28732-3f1c-4cd0-a15b-825c4aa5e4b2');
			Beacon('open');
		},});
					`}
				</Script>
			</head>
			<body className={inter.className}>
				<SessionProvider>
					<Nav />
					<main className="app">
						{children}
						<div className="max-w-600 h-650 mx-auto my-20 absolute"></div>
						{/* <Sidebar menu={menu} /> */}
					</main>
					<Footer />
				</SessionProvider>
			</body>
		</html>
	)
}
