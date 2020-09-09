import React, { PropsWithChildren, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Header from './Header'
import firebase from '../utils/firebase'

interface LayoutProps {}

const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
	const [ isSignedIn, setIsSignedIn ] = useState(false)
	const history = useHistory()

	const logout = () => {
		firebase.auth().signOut()
		history.push('/auth')
	}

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) setIsSignedIn(true)
			else setIsSignedIn(false)
		})
	}, [])

	return (
		<div>
			<Header isSignedIn={isSignedIn} logout={logout} />
			{children}
		</div>
	)
}

export default Layout
