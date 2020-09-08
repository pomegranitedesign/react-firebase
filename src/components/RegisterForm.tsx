import React, { Fragment } from 'react'
import { Button, Input } from './Common'

interface RegisterFormProps {
	setIsRegister: (register: boolean) => void
}

const RegisterForm = ({ setIsRegister }: RegisterFormProps) => {
	return (
		<Fragment>
			<Input required type="email" placeholder="Email" />
			<Input required type="password" placeholder="Password" />
			<Button>Sign Up</Button>
			<Button danger onClick={() => setIsRegister(false)}>
				Login
			</Button>
		</Fragment>
	)
}

export default RegisterForm
