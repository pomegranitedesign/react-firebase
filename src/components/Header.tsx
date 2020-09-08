import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<Wrapper>
			<List>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/auth">Sign In / Sign Up</NavLink>
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
