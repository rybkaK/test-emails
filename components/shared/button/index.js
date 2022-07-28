import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	padding: 10px 5px;

	display: flex;
	align-items: center;
	justify-content: center;

	border: none;
	cursor: pointer;

	border-radius: 10px;
	font-size: 14px;
	font-weight: 400;
	color: #ffffff;
	background: rgb(255, 0, 97);
	background: linear-gradient(
		90deg,
		rgba(255, 0, 97, 1) 0%,
		rgba(211, 22, 94, 1) 50%
	);
`;

const Button = ({ children, onClick }) => {
	return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
