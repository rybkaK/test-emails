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
	background-color: transparent;

	${(props) =>
		props.type === 'cube' && {
			borderRadius: '3px',
			color: 'rgba(255, 0, 97, 0.8)',
			background: '#ffffff',
		}};

	:hover {
		background-color: #79797922;
	}
`;

// TODO add disabled styles

const IconButton = ({ children, onClick, type, disabled }) => {
	return (
		<StyledIconButton onClick={onClick} type={type} disabled={disabled}>
			{children}
		</StyledIconButton>
	);
};

export default IconButton;
