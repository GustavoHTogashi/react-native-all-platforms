// import { Button, ScrollView, Text } from 'tamagui';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Card, Text, View } from 'tamagui';

export const AppContents = () => {
	return (
		<SafeAreaView style={{ height: '100%', backgroundColor: '#fff' }}>
			<View padding={16}>
				<Card>
					<Card.Header>
						<Text>Card Header</Text>
					</Card.Header>
					<Card.Footer>
						<Text>Card Footer</Text>
					</Card.Footer>
					<Button>Button</Button>
					<Card.Background />
				</Card>
			</View>
		</SafeAreaView>
	);
};
