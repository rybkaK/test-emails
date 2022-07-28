import React from 'react';
import styled from 'styled-components';

const StyledSidebarToggle = styled.button`
	padding: ${(props) =>
		props.isOpen ? '15px 30px 15px 30px;' : '15px 5px 15px 5px;'};

	display: flex;
	align-items: center;
	justify-content: center;

	border: none;
	cursor: pointer;

	overflow: hidden;

	border-radius: 10px;
	font-size: 14px;
	font-weight: 500;
	color: #ffffff;
	background: rgb(255, 0, 97);
	background: linear-gradient(
		90deg,
		rgba(255, 0, 97, 1) 0%,
		rgba(211, 22, 94, 1) 50%
	);

	transition: padding 0.5s ease-in-out;

	svg {
		margin-left: ${(props) => (props.isOpen ? 0 : '86px')};
		transform: ${(props) => (props.isOpen ? 'rotate(0)' : 'rotate(90deg)')};
		transition: margin-left 0.5s ease-in-out, transform 0.5s ease-in-out;
		min-width: 18px;
	}
`;

const SidebarToggle = ({ children, onClick, disabled, isOpen }) => {
	return (
		<StyledSidebarToggle onClick={onClick} disabled={disabled} isOpen={isOpen}>
			{children}
		</StyledSidebarToggle>
	);
};

export default SidebarToggle;
