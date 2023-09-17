import '@styles/globals.css'
import Client from './client'
import Script from 'next/script'

export const metadata = {
	title: 'LSC-Inspector',
	// description: 'Have your slide presentations easier using Prezenter.',
	// openGraph: {
	// 	title: 'Prezenter: Presentations Made Easy on Smart TV',
	// 	description: 'Have your slide presentations easier using Prezenter.',
	// 	images: [
	// 		{
	// 			url: 'https://incrementtechnologies.com/img/fitinbanner.png',
	// 			width: 1920,
	// 			height: 1080,
	// 		},
	// 	],
	// 	locale: 'en_US',
	// 	type: 'website',
	// },
}

export default function RootLayout({ children }) {
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
			<Client>{children}</Client>
		</html>
	)
}
