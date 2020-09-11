import React, { useState, FormEvent, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import RegisterForm from './RegisterForm'
import { Input, Button, Title } from './Common'
import firebase, { usersCollection } from '../utils/firebase'

interface AuthFormProps {}

const AuthForm = (props: AuthFormProps) => {
	const [ email, setEmail ] = useState('')
	const [ password, setPassword ] = useState('')
	const [ isRegister, setIsRegister ] = useState(false)
	const history = useHistory()

	const handleChange = (e: FormEvent<HTMLInputElement>) => {
		const name = e.currentTarget.name
		const value = e.currentTarget.value

		if (name === 'email') setEmail(value)
		if (name === 'password') setPassword(value)
	}

	const handleAuth = useCallback(
		(e: FormEvent) => {
			e.preventDefault()

			if (isRegister && !firebase.auth().currentUser)
				firebase
					.auth()
					.createUserWithEmailAndPassword(email, password)
					.then(async () => {
						await usersCollection.add({ email, password })
						setEmail('')
						setPassword('')
						console.log('The user is registered')
						history.push('/')
					})
					.catch((err) => {
						console.log(err.code)
					})

			if (!isRegister)
				firebase
					.auth()
					.signInWithEmailAndPassword(email, password)
					.then(() => {
						console.log('Signed in')
						history.push('/')
					})
					.catch((err) => new Error(err))
		},
		[ history, email, password, isRegister ]
	)

	if (isRegister)
		return (
			<Wrapper onSubmit={handleAuth}>
				<Title style={{ marginBottom: 20 }}>Sign Up</Title>
				<RegisterForm
					setIsRegister={setIsRegister}
					email={email}
					password={password}
					handleChange={handleChange}
				/>
			</Wrapper>
		)

	return (
		<Wrapper onSubmit={handleAuth}>
			<Title style={{ marginBottom: 20 }}>Sign In</Title>
			<Input
				required
				autoComplete="off"
				type="text"
				placeholder="Email"
				name="email"
				value={email}
				onChange={handleChange}
			/>
			<Input
				required
				autoComplete="new-password"
				type="password"
				placeholder="Password"
				name="password"
				value={password}
				onChange={handleChange}
			/>
			<Button style={{ marginTop: 20 }}>Login</Button>
			<Button danger onClick={() => setIsRegister(true)}>
				Register
			</Button>
		</Wrapper>
	)
}

const Wrapper = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 800px;
	width: 80%;
`

export default AuthForm
