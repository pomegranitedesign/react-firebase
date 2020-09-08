import React from 'react'
import styled from 'styled-components'
import { AuthForm } from '../components'

const Auth = () => {
	return (
		<Wrapper>
			<AuthForm />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
`

export default Auth
