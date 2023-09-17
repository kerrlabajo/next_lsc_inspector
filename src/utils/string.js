'use client'
import { Settings, Home, Person, History, Dvr, Delete, Dashboard } from '@mui/icons-material'
const String = {
	app_name: 'Intellysis',
	api_url: 'test',
	host: 'Intellysis',
	website: 'www.intellysis.ph',
	menu: [
		{
			title: 'Dashboard',
			route: '/dashboard',
			icon: Dashboard,
		},
		{
			title: 'Main',
			route: '/main',
			icon: Home,
		},
		{
			title: 'History',
			route: '/history',
			icon: History,
		},
		{
			title: 'Profile',
			route: '/profile',
			icon: Person,
		},
	],
	loggedInMenu: [
		{
			title: 'My Profile',
			icon: Settings,
			route: '/profile',
		},
	],
}

export default String
