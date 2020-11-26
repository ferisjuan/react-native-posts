import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import { ListItem } from '../components/index'

export default ({ navigation }) => {
	const userId = navigation.getParam('user_id')
	const [loading, setLoading] = useState(true)

	const [posts, setPosts] = useState([])

	const fetchPosts = async () => {
		const response = await fetch('http://jsonplaceholder.typicode.com/posts')
		const data = await response.json()

		setPosts(data)
		setLoading(false)
	}

	useEffect(() => {
		fetchPosts()
	}, [])

	console.log(posts)

	return (
		<View style={styles.container}>
			{loading ? (
				<Text>Cargando...</Text>
			) : (
				<FlatList
					style={styles.list}
					data={posts.filter(post => post.userId === userId)}
					keyExtractor={post => String(post.id)}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							onPress={() =>
								navigation.navigate('Detail', { post_id: item.id })
							}
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
