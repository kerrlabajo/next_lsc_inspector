/** @type {import('next').NextConfig} */
const nextConfig = {
	theme: {
		extend: {
			backgroundImage: {
				footer: 'url(./public/assets/images/footer.svg)',
			},
		},
	},
}

module.exports = nextConfig
