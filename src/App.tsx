import { TamaguiProvider } from 'tamagui';
import React from 'react';
import { AppContents } from './pages/AppContents';
import config from './tamagui.config';

export const App = () => {
	return (
		<TamaguiProvider
			config={config}
			defaultTheme='light'>
			<AppContents />
		</TamaguiProvider>
	);
};
