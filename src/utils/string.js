import { Settings, Home, Person, History, Visibility, Delete, Dashboard } from '@mui/icons-material'
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
	tableHeader: [
		{
			title: 'Date',
			type: 'text',
			variable: 'date',
		},
		{
			title: 'Name',
			type: 'text',
			variable: 'name',
			style: {
				fontWeight: 'bold',
			},
		},
		{
			title: 'Size',
			type: 'text',
			variable: 'size',
		},
		{
			title: 'Classification',
			type: 'text',
			variable: 'classification',
			style: {
				fontWeight: 'bold',
			},
		},
		{
			title: 'Confidence',
			type: 'text',
			variable: 'accuracy',
		},
		{
			title: 'Actions',
			type: 'action',
			options: [
				{
					title: 'View',
					action: null,
					icon: Visibility,
				},
				{
					action: null,
					title: 'Delete',
					icon: Delete,
				},
			],
		},
	],
	predefinedWeights: [
		{
			title: 'LSC Model',
			project_name: 'lsc-inspector' /*rocess.env.LSC_PROJECT_NAME*/,
			api_key: 'lnVB1Fnjsd5EdDdsnMg7' /*process.env.LSC_API_KEY*/,
			version: 1 /*process.env.LSC_VERSION*/,
			// workspace: 'intellysis',
			// model_type: 'yolov8',
			// model_path: 'C:/Users/Kerr/Documents/Visual Studio/CS346/cs346-ml.net-lsc-inspector/LSC_Intellysis/runs/detect/train7/',
		},
		{
			title: 'Hands Model',
			project_name: 'egohands-public' /*process.env.HANDS_PROJECT_NAME*/,
			api_key: 'rf_5w20VzQObTXjJhTjq6kad9ubrm33' /*process.env.HANDS_API_KEY*/,
			version: 9 /*process.env.HANDS_VERSION*/,
			// workspace: 'intellysis',
			// model_type: 'yolov8',
			// model_path: 'C:/Users/Kerr/Documents/Visual Studio/CS346/cs346-ml.net-lsc-inspector/LSC_Intellysis/runs/detect/train7/',
		},
	],
}

export default String
