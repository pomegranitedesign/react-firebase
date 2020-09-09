import React, { useEffect, useState, Fragment } from 'react'
import firebase from '../utils/firebase'

interface UserData {
	email: string | undefined
	refreshToken: string | undefined
	uid: string | undefined
}

const Main = () => {
	const [ user, setUser ] = useState<UserData | null>(null)

	useEffect(() => {
		firebase.auth().onAuthStateChanged((firebaseUser) => {
			const loggedIn = !!firebaseUser
			if (loggedIn) {
				try {

					const getUser: UserData = {
						email: firebaseUser?.email || undefined,
						refreshToken: firebaseUser?.refreshToken || undefined,
						uid: firebaseUser?.uid || undefined
					}
					setUser(getUser)
				} catch (err) {}
			}
		})
	}, [])

	return (
		<div style={{ padding: 40 }}>
			{user ? (<Fragment>
				<h1>{user?.email}</h1>
			<h2>{user?.refreshToken}</h2>
			<h3>{user?.uid}</h3>
			</Fragment>) : <h1>Sign in to see information</h1>}
		</div>
	)
}

export default Main
