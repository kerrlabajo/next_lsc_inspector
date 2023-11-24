/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['tgbqbnhnyjakucemhefo.supabase.co'],
	},
	async headers() {
		return [
			{
				// matching all API routes
				source: '/api/v1/:path*',
				headers: [
					{ key: 'Access-Control-Allow-Credentials', value: 'true' },
					{ key: 'Access-Control-Allow-Origin', value: 'https://lsc-inspector.vercel.app' },
					{ key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
					{
						key: 'Access-Control-Allow-Headers',
						value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
					},
				],
			},
		]
	},
}

module.exports = nextConfig
