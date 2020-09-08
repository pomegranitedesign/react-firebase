import React, { useState, FormEvent } from 'react'
import styled from 'styled-components'
import RegisterForm from './RegisterForm'
import { Input, Button, Title } from './Common'

interface AuthFormProps {}

const AuthForm = (props: AuthFormProps) => {
	const [ isRegister, setIsRegister ] = useState(false)
	const handleAuth = (e: FormEvent) => {
		e.preventDefault()
	}

	if (isRegister)
		return (
			<Wrapper onSubmit={handleAuth}>
				<RegisterForm setIsRegister={setIsRegister} />
			</Wrapper>
		)

	return (
		<Wrapper onSubmit={handleAuth}>
			<Title style={{ marginBottom: 20 }}>
				{isRegister ? 'Sign Up' : 'Sign In'}
			</Title>
			<Input required type="text" placeholder="Email" />
			<Input required type="password" placeholder="Password" />
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
