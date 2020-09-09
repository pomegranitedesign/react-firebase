import React, { Fragment, FormEvent } from 'react'
import { Button, Input } from './Common'

interface RegisterFormProps {
	email: string
	password: string
	handleChange: (event: FormEvent<HTMLInputElement>) => void
	setIsRegister: (register: boolean) => void
}

const RegisterForm = ({
	setIsRegister,
	email,
	password,
	handleChange
}: RegisterFormProps) => {
	return (
		<Fragment>
			<Input
				autoComplete="new-password"
				required
				type="email"
				placeholder="Email"
				value={email}
				name="email"
				onChange={handleChange}
			/>
			<Input
				autoComplete="new-password"
				required
				type="password"
				placeholder="Password"
				name="password"
				value={password}
				onChange={handleChange}
			/>
			<Button style={{ marginTop: 20 }}>Sign Up</Button>
			<Button danger onClick={() => setIsRegister(false)}>
				Login
			</Button>
		</Fragment>
	)
}

export default RegisterForm
