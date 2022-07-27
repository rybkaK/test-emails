import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.button`
	padding: 20px 15px 20px 70px;

	display: grid;
	align-items: center;
	grid-template-columns: 40px 1fr;

	text-align: left;

	border: none;
	cursor: pointer;

	border-radius: 0 10px 10px 0;
	font-size: 16px;
	font-weight: 400;

	color: #555555;
	background-color: transparent;
	:hover {
		background-color: #79797922;
	}
`;

const SidebarLink = ({ onClick, children }) => {
	return <StyledLink onClick={onClick}>{children}</StyledLink>;
};

export default SidebarLink;
