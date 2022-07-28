/* eslint-disable no-unused-vars */
import React, { memo, useCallback, useState } from 'react';
import styled from 'styled-components';
import {
	AiOutlineLike,
	AiOutlineInbox,
	AiOutlineReload,
	AiOutlineDislike,
	AiOutlinePlus,
	AiOutlineMenuFold,
	AiOutlineCheckSquare,
} from 'react-icons/ai';
import { RiUserFollowLine } from 'react-icons/ri';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import { TbMail, TbMailOpened, TbTrashX } from 'react-icons/tb';

import { useRouter } from 'next/router';
import SidebarLink from '../shared/sidebarLink';
import SidebarToggle from '../shared/sidebarToggle';
import IconButton from '../shared/iconButton';

const SidebarContainer = styled.div`
	width: 80px;

	${(props) =>
		props.openedDesktop && {
			width: '250px',
		}};

	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;

	height: 100%;
	transition: width 0.5s ease-in-out;
	padding: 20px 0;
	display: flex;
	flex-direction: column;

	background-color: #ffffff;
	z-index: 1000;

	-webkit-box-shadow: -20px 0px 11px 18px #5757574b;
	box-shadow: -20px 0px 11px 18px #5757574b;

	overflow: hidden;
	@media (max-width: 1024px) {
		width: ${(props) => (props.openedMobile ? '250px' : '0')};
	}
`;

const SidebarHeader = styled.div`
	margin: 0 16px 20px;
	display: flex;
	flex-direction: column;
`;

const LogoContainer = styled.div`
	display: flex;
	align-items: center;

	margin-bottom: 18px;
	font-weight: 700;
	font-size: 20px;
`;

const Logo = styled.div`
	width: 40px;
	min-width: 40px;
	height: 40px;

	display: flex;
	align-items: center;
	justify-content: center;
	color: #ffffff;

	font-weight: 700;
	border-radius: 100%;
	background: rgb(255, 0, 97);
	background: radial-gradient(
		circle,
		rgba(255, 0, 97, 1) 0%,
		rgba(211, 22, 94, 1) 46%,
		rgba(255, 0, 97, 1) 100%
	);
`;

const SidebarMenu = styled.nav`
	display: flex;
	flex-direction: column;

	padding: 10px 0 30px;

	overflow-y: auto;
	overflow-x: hidden;
`;

const SidebarMore = styled.div`
	display: flex;
	flex-direction: column;
`;

const ToggleText = styled.div`
	margin-left: 15px;
	transition: opacity 0.5s ease-in-out;

	opacity: ${(props) => (props.showDesktopText ? '1' : '0')};

	@media (max-width: 1024px) {
		margin-right: 0px;
		display: block;
		opacity: ${(props) => (props.showMobileText ? '1' : '0')};
	}
`;

const MenuBtn = styled.div`
	margin-left: auto;
	margin-right: 10px;
	height: 34px;
	width: 34px;
	display: none;
	@media (max-width: 1024px) {
		margin-right: 0px;
		display: block;
	}
`;

const Sidebar = ({
	isOpenMobile,
	onMobileToggle,
	isOpenDesktop,
	onDesktopToggle,
}) => {
	const [isMoreLinksShown, setIsMoreLinksShown] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const router = useRouter();

	const handleMoreLinkShown = useCallback(() => {
		setIsMoreLinksShown((prev) => !prev);
	}, []);

	return (
		<SidebarContainer
			openedMobile={isOpenMobile}
			openedDesktop={(isHovered && !isOpenDesktop) || isOpenDesktop}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<SidebarHeader>
				<LogoContainer>
					<Logo>M</Logo>
					<ToggleText
						showMobileText={isOpenMobile}
						showDesktopText={(isHovered && !isOpenDesktop) || isOpenDesktop}
					>
						Mailer
					</ToggleText>
					<MenuBtn>
						<IconButton onClick={onMobileToggle}>
							<AiOutlineMenuFold fontSize={24} />
						</IconButton>
					</MenuBtn>
				</LogoContainer>
				<SidebarToggle
					onClick={onDesktopToggle}
					isOpen={(isHovered && !isOpenDesktop) || isOpenDesktop}
				>
					<AiOutlinePlus fontSize={18} />
					<ToggleText
						showMobileText={isOpenMobile}
						showDesktopText={(isHovered && !isOpenDesktop) || isOpenDesktop}
					>
						COMPOSE
					</ToggleText>
				</SidebarToggle>
			</SidebarHeader>
			<SidebarMenu>
				<SidebarLink
					text="Unread"
					showMobileText={isOpenMobile}
					showDesktopText={(isHovered && !isOpenDesktop) || isOpenDesktop}
					href="unread"
					selected={(router.route || '') === '/unread'}
				>
					<TbMail fontSize={20} />
				</SidebarLink>
				<SidebarLink
					text="All"
					showMobileText={isOpenMobile}
					showDesktopText={(isHovered && !isOpenDesktop) || isOpenDesktop}
					href="/"
					selected={(router.route || '') === '/'}
				>
					<AiOutlineInbox fontSize={20} />
				</SidebarLink>
				<SidebarLink
					text="Trash"
					showMobileText={isOpenMobile}
					showDesktopText={(isHovered && !isOpenDesktop) || isOpenDesktop}
					href="trash"
					selected={(router.route || '') === '/trash'}
				>
					<TbTrashX fontSize={20} />
				</SidebarLink>
				<SidebarLink
					onClick={handleMoreLinkShown}
					text="More"
					showMobileText={isOpenMobile}
					showDesktopText={(isHovered && !isOpenDesktop) || isOpenDesktop}
				>
					{isMoreLinksShown ? (
						<TiArrowSortedUp fontSize={20} />
					) : (
						<TiArrowSortedDown fontSize={20} />
					)}
				</SidebarLink>
				{isMoreLinksShown && (
					<SidebarMore>
						<SidebarLink
							text="Open"
							showMobileText={isOpenMobile}
							showDesktopText={(isHovered && !isOpenDesktop) || isOpenDesktop}
							href="open"
							selected={(router.route || '') === '/open'}
						>
							<TbMailOpened fontSize={20} />
						</SidebarLink>
						<SidebarLink
							text="Interested"
							showMobileText={isOpenMobile}
							showDesktopText={(isHovered && !isOpenDesktop) || isOpenDesktop}
							href="interested"
							selected={(router.route || '') === '/interested'}
						>
							<AiOutlineLike fontSize={20} />
						</SidebarLink>
						<SidebarLink
							text="Negotiating"
							showMobileText={isOpenMobile}
							showDesktopText={(isHovered && !isOpenDesktop) || isOpenDesktop}
							href="negotiating"
							selected={(router.route || '') === '/negotiating'}
						>
							<AiOutlineCheckSquare fontSize={20} />
						</SidebarLink>
						<SidebarLink
							text="Converted"
							showMobileText={isOpenMobile}
							showDesktopText={(isHovered && !isOpenDesktop) || isOpenDesktop}
							href="converted"
							selected={(router.route || '') === '/converted'}
						>
							<AiOutlineReload fontSize={20} />
						</SidebarLink>
						<SidebarLink
							text="Followup"
							showMobileText={isOpenMobile}
							showDesktopText={(isHovered && !isOpenDesktop) || isOpenDesktop}
							href="followup"
							selected={(router.route || '') === '/followup'}
						>
							<RiUserFollowLine fontSize={20} />
						</SidebarLink>
						<SidebarLink
							text="Not Interested"
							showMobileText={isOpenMobile}
							showDesktopText={(isHovered && !isOpenDesktop) || isOpenDesktop}
							href="not-interested"
							selected={(router.route || '') === '/not-interested'}
						>
							<AiOutlineDislike fontSize={20} />
						</SidebarLink>
					</SidebarMore>
				)}
			</SidebarMenu>
		</SidebarContainer>
	);
};

export default memo(Sidebar);
