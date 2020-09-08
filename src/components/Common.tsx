/* Common.tsx */
// This file stores all the common components that are being used among the whole app
import styled from 'styled-components'

export const Title = styled.h1`
	font-weight: 900;
	color: #222222;
	font-size: 45px;
`

export const Input = styled.input`
	padding: 10px;
	border-radius: 3px;
	border: none;
	display: flex;
	min-width: 100%;
	margin-bottom: 10px;
`

// Button
interface ButtonProps {
	danger?: boolean
}
export const Button =
	styled.button <
	ButtonProps >
	`
	display: block;
	padding: 10px;
	min-width: 100%;
	border-radius: 3px;
  border: none;
  background: ${({ danger }) => (danger ? '#D2C400' : '#00D22E')};
	color: black;
	cursor: pointer;
	margin-bottom: 10px;
  `
