import React from 'react';
import styled from 'styled-components';

const StyledIconButton = styled.button`
	padding: 5px;
	margin: 0 5px;

	display: flex;
	align-items: center;
	justify-content: center;

	border: none;
	cursor: pointer;

	border-radius: 50%;
	font-size: 14px;
	font-weight: 400;

	color: #555555;
	background-color: #ffffff;
	:hover {
		background-color: #79797922;
	}
`;

const IconButton = ({ children, onClick }) => {
	return <StyledIconButton onClick={onClick}>{children}</StyledIconButton>;
};

export default IconButton;
