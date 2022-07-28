import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.button`
	padding: ${(props) =>
		props.showText ? '20px 15px 20px 70px;' : '20px 15px 20px 30px;'};
	background-color: ${(props) => (props.selected ? '#79797922' : '#ffffff')};
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

	transition: padding 0.5s ease-in-out;
	:hover {
		background-color: #79797922;
	}
`;

const Text = styled.span`
	font-size: 16px;
	font-weight: 400;

	color: #555555;
	white-space: nowrap;
	opacity: ${(props) => (props.showText ? '1' : '0')};
	transition: opacity 0.5s ease-in-out;
`;

const SidebarLink = ({ onClick, children, text, showText, href, selected }) => {
	return href ? (
		<Link href={href}>
			<StyledLink onClick={onClick} showText={showText} selected={selected}>
				{children}
				<Text showText={showText}>{text}</Text>
			</StyledLink>
		</Link>
	) : (
		<StyledLink onClick={onClick} showText={showText}>
			{children}
			<Text showText={showText}>{text}</Text>
		</StyledLink>
	);
};

export default SidebarLink;
