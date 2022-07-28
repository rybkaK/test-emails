import React, { memo, useCallback, useState } from 'react';
import styled from 'styled-components';
import {
	AiOutlineLike,
	AiOutlineInbox,
	AiOutlineReload,
	AiOutlineDislike,
	AiOutlineMenuUnfold,
	AiOutlineCheckSquare,
} from 'react-icons/ai';
import { RiUserFollowLine } from 'react-icons/ri';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import { TbMail, TbMailOpened, TbTrashX } from 'react-icons/tb';

import { useRouter } from 'next/router';
import Button from '../shared/button';
import SidebarLink from '../shared/sidebarLink';

const SidebarContainer = styled.div`
	width: ${(props) => (props.opened ? '250px' : '80px')};
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
`;

const SidebarHeader = styled.div`
	margin: 0 20px 20px;
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

	margin-right: 20px;

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

// TODO move all strings into constants

const Sidebar = ({ isOpen, onToggle }) => {
	const [isMoreLinksShown, setIsMoreLinksShown] = useState(false);

	const router = useRouter();

	const handleMoreLinkShown = useCallback(() => {
		setIsMoreLinksShown((prev) => !prev);
	}, []);

	return (
		<SidebarContainer opened={isOpen}>
			<SidebarHeader>
				<LogoContainer>
					<Logo>M</Logo>
					Mailer
				</LogoContainer>
				<Button onClick={onToggle}>
					<AiOutlineMenuUnfold fontSize={30} />
				</Button>
			</SidebarHeader>
			<SidebarMenu>
				<SidebarLink
					text="Unread"
					showText={isOpen}
					href="unread"
					selected={(router.route || '') === '/unread'}
				>
					<TbMail fontSize={20} />
				</SidebarLink>
				<SidebarLink
					text="All"
					showText={isOpen}
					href="/"
					selected={(router.route || '') === '/'}
				>
					<AiOutlineInbox fontSize={20} />
				</SidebarLink>
				<SidebarLink
					text="Trash"
					showText={isOpen}
					href="trash"
					selected={(router.route || '') === '/trash'}
				>
					<TbTrashX fontSize={20} />
				</SidebarLink>
				<SidebarLink
					onClick={handleMoreLinkShown}
					text="More"
					showText={isOpen}
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
							showText={isOpen}
							href="open"
							selected={(router.route || '') === '/open'}
						>
							<TbMailOpened fontSize={20} />
						</SidebarLink>
						<SidebarLink
							text="Interested"
							showText={isOpen}
							href="interested"
							selected={(router.route || '') === '/interested'}
						>
							<AiOutlineLike fontSize={20} />
						</SidebarLink>
						<SidebarLink
							text="Negotiating"
							showText={isOpen}
							href="negotiating"
							selected={(router.route || '') === '/negotiating'}
						>
							<AiOutlineCheckSquare fontSize={20} />
						</SidebarLink>
						<SidebarLink
							text="Converted"
							showText={isOpen}
							href="converted"
							selected={(router.route || '') === '/converted'}
						>
							<AiOutlineReload fontSize={20} />
						</SidebarLink>
						<SidebarLink
							text="Followup"
							showText={isOpen}
							href="followup"
							selected={(router.route || '') === '/followup'}
						>
							<RiUserFollowLine fontSize={20} />
						</SidebarLink>
						<SidebarLink
							text="Not Interested"
							showText={isOpen}
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
