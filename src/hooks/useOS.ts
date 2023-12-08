import { useState, useEffect } from 'react';
import { Platform } from 'react-native';

export const useOS = () => {
	const [isWindows, setIsWindows] = useState(false);
	const [isMac, setIsMac] = useState(false);
	const [isIOS, setIsIOS] = useState(false);
	const [isAndroid, setIsAndroid] = useState(false);

	const [isMobile, setIsMobile] = useState(false);
	const [isDesktop, setIsDesktop] = useState(false);

	useEffect(() => {
		setIsWindows(Platform.OS === 'windows');
		setIsMac(Platform.OS === 'macos');
		setIsIOS(Platform.OS === 'ios');
		setIsAndroid(Platform.OS === 'android');

		setIsMobile(Platform.OS === 'ios' || Platform.OS === 'android');
		setIsDesktop(Platform.OS === 'windows' || Platform.OS === 'macos');
	}, []);

	return {
		isWindows,
		isMac,
		isIOS,
		isAndroid,
		isMobile,
		isDesktop,
	};
};
