module.exports = {
	presets: ['module:@react-native/babel-preset'],
	plugins: [
		[
			'@tamagui/babel-plugin',
			{
				components: ['tamagui'],
				config: './src/tamagui.config.ts',
				importsWhitelist: ['constants.js', 'colors.js'],
				logTimings: true,
				disableExtraction: process.env.NODE_ENV === 'development',
			},
		],
	],
};
