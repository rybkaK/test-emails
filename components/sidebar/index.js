import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import {
	AiOutlineLike,
	AiOutlineInbox,
	AiOutlineReload,
	AiOutlineDislike,
	AiOutlineCheckSquare,
} from 'react-icons/ai';
import { RiUserFollowLine } from 'react-icons/ri';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import { TbMail, TbMailOpened, TbTrashX } from 'react-icons/tb';

import Button from '../shared/button';
import SidebarLink from '../shared/sidebar-link';

const SidebarContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;

	height: 100%;
	width: 250px;

	padding: 20px 0;
	display: flex;
	flex-direction: column;

	-webkit-box-shadow: -20px 0px 11px 18px #5757574b;
	box-shadow: -20px 0px 11px 18px #5757574b;
`;

const SidebarHeader = styled.div`
	margin: 0 20px;
	display: flex;
	flex-direction: column;
`;

const Logo = styled.div`
	padding: 40px 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #ffffff;

	font-weight: 700;
	border-radius: 100%;
	background-color: red;
	margin-bottom: 20px;
`;

const SidebarMenu = styled.nav`
	margin-right: 20px;

	display: flex;
	flex-direction: column;

	padding: 30px 0;
`;

const SidebarMore = styled.div`
	display: flex;
	flex-direction: column;
`;

const Sidebar = () => {
	const [isMoreLinksShown, setIsMoreLinksShown] = useState(false);

	const handleMoreLinkShown = useCallback(() => {
		setIsMoreLinksShown((prev) => !prev);
	}, []);

	return (
		<SidebarContainer>
			<SidebarHeader>
				<Logo>App Logo</Logo>
				<Button>COMPOSE</Button>
			</SidebarHeader>
			<SidebarMenu>
				<SidebarLink>
					<TbMail fontSize={20} />
					Unread
				</SidebarLink>
				<SidebarLink>
					<AiOutlineInbox fontSize={20} />
					All
				</SidebarLink>
				<SidebarLink>
					<TbTrashX fontSize={20} />
					Trash
				</SidebarLink>
				<SidebarLink onClick={handleMoreLinkShown}>
					{isMoreLinksShown ? (
						<TiArrowSortedUp fontSize={20} />
					) : (
						<TiArrowSortedDown fontSize={20} />
					)}
					More
				</SidebarLink>
				{isMoreLinksShown && (
					<SidebarMore>
						<SidebarLink>
							<TbMailOpened fontSize={20} />
							Open
						</SidebarLink>
						<SidebarLink>
							<AiOutlineLike fontSize={20} />
							Interested
						</SidebarLink>
						<SidebarLink>
							<AiOutlineCheckSquare fontSize={20} />
							Negotiating
						</SidebarLink>
						<SidebarLink>
							<AiOutlineReload fontSize={20} />
							Converted
						</SidebarLink>
						<SidebarLink>
							<RiUserFollowLine fontSize={20} />
							Followup
						</SidebarLink>
						<SidebarLink>
							<AiOutlineDislike fontSize={20} />
							Not Interested
						</SidebarLink>
					</SidebarMore>
				)}
			</SidebarMenu>
		</SidebarContainer>
	);
};

export default Sidebar;
