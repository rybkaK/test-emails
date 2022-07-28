import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.button`
	padding: 20px 15px 20px 50px;

	background-color: ${(props) => (props.selected ? '#79797922' : '#ffffff')};

	padding: ${(props) =>
		props.showDesktopText ? '20px 15px 20px 50px;' : '20px 15px 20px 14px;'};

	margin: 0 16px 3px;
	display: grid;
	align-items: center;
	grid-template-columns: 40px 1fr;
	text-align: left;

	border: none;
	border-radius: 10px;

	cursor: pointer;
	font-size: 16px;
	font-weight: 400;
	color: #555555;
	transition: padding 0.5s ease-in-out;
	:hover {
		background-color: #79797922;
	}

	@media (max-width: 1024px) {
		padding: ${(props) =>
			props.showMobileText ? '20px 15px 20px 50px;' : '20px 15px 20px 14px;'};
	}
`;

const Text = styled.span`
	font-size: 16px;
	font-weight: 400;

	color: #555555;
	white-space: nowrap;

	opacity: ${(props) => (props.showDesktopText ? '1' : '0')};

	@media (max-width: 1024px) {
		opacity: ${(props) => (props.showMobileText ? '1' : '0')};
	}

	transition: opacity 0.5s ease-in-out;
`;

const SidebarLink = ({
	children,
	href,
	text,
	selected,
	showMobileText,
	showDesktopText,
	onClick,
}) => {
	return href ? (
		<Link href={href}>
			<StyledLink
				onClick={onClick}
				showMobileText={showMobileText}
				showDesktopText={showDesktopText}
				selected={selected}
			>
				{children}
				<Text showMobileText={showMobileText} showDesktopText={showDesktopText}>
					{text}
				</Text>
			</StyledLink>
		</Link>
	) : (
		<StyledLink
			onClick={onClick}
			showMobileText={showMobileText}
			showDesktopText={showDesktopText}
		>
			{children}
			<Text showMobileText={showMobileText} showDesktopText={showDesktopText}>
				{text}
			</Text>
		</StyledLink>
	);
};

export default SidebarLink;
