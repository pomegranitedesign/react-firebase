import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

interface HeaderProps {
	isSignedIn: boolean
	logout: () => void
}

const Header = ({ isSignedIn, logout }: HeaderProps) => {
	return (
		<Wrapper>
			<List>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					{isSignedIn ? (
						<button onClick={logout}>Logout</button>
					) : (
						<NavLink to="/auth">Sign In / Sign Up</NavLink>
					)}
				</li>
			</List>
		</Wrapper>
	)
}

const Wrapper = styled.header`padding: 20px;`

const List = styled.ul`
	display: flex;

	li {
		list-style: none;
		margin: 10px;

		a {
			text-decoration: none;
			color: #3f00d2;
			font-size: 16px;
		}
	}
`

export default Header
