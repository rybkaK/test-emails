import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	padding: 15px;

	display: flex;
	align-items: center;
	justify-content: center;

	border: none;
	cursor: pointer;

	border-radius: 10px;
	font-size: 14px;
	font-weight: 400;
	color: #ffffff;
	background-color: #d3165e;
`;

const Button: React.FC = ({ children }) => {
	return <StyledButton>{children}</StyledButton>;
};

export default Button;
