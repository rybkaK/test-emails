import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
	padding: 20px 15px 20px 70px;

	display: grid;
	align-items: center;
	grid-template-columns: 40px 1fr;

	border: none;
	cursor: pointer;

	border-radius: 0 10px 10px 0;
	font-size: 16px;
	font-weight: 400;

	color: #555555;
	:hover {
		background-color: #79797922;
	}
`;

const NavbarLink: React.FC = ({ children }) => {
	return <StyledLink>{children}</StyledLink>;
};

export default NavbarLink;
