import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default ({ title, onPress }) => {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomColor: '#ccc',
		borderBottomWidth: 1,
		height: 70,
		paddingHorizontal: 15,
	},
	text: {
		fontSize: 24,
	},
})
