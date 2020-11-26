import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import { ListItem } from '../components/index'

export default ({ navigation }) => {
	const [loading, setLoading] = useState(true)
	const [users, setUsers] = useState([])

	const fetchUsers = async () => {
		const response = await fetch('http://jsonplaceholder.typicode.com/users')
		const data = await response.json()

		setUsers(data)
		setLoading(false)
	}

	useEffect(() => {
		fetchUsers()
	}, [])

	return (
		<View style={styles.container}>
			{loading ? (
				<Text>Cargando...</Text>
			) : (
				<FlatList
					style={styles.list}
					data={users}
					keyExtractor={user => String(user.id)}
					renderItem={({ item }) => (
						<ListItem
							title={item.name}
							onPress={() => navigation.navigate('Posts', { user_id: item.id })}
						/>
					)}
				/>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
	list: {
		alignSelf: 'stretch',
	},
})
