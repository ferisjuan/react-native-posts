import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AppearanceProvider } from 'react-native-appearance'

export default function App() {
	return (
		<AppearanceProvider>
			<View style={styles.container}>
				<Text>Open up App.js to start working on your app!</Text>
			</View>
		</AppearanceProvider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
