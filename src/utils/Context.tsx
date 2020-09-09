import React, {
	useState,
	createContext,
	PropsWithChildren,
	useEffect
} from 'react'
import { useHistory } from 'react-router-dom'
import firebase from './firebase'

interface ContextProps {
	currentUser: object
	logout: () => void
}

export const Context = createContext<ContextProps>({
	currentUser: {},
	logout: () => {}
})

const ContextProvider = ({ children }: PropsWithChildren<{}>) => {
	const [ currentUser, setCurrentUser ] = useState({})
	const history = useHistory()

	const logout = () =>
		firebase.auth().signOut().then(() => {
			console.log('Logged Out')
			history.push('/')
		})

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) setCurrentUser(user)
		})
	}, [])

	return (
		<Context.Provider value={{ currentUser, logout }}>
			{children}
		</Context.Provider>
	)
}

export default ContextProvider
