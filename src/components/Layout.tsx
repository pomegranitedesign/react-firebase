import React, { PropsWithChildren } from 'react'
import Header from './Header'

interface LayoutProps {}

const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	)
}

export default Layout
