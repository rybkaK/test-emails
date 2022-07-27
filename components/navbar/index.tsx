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
import NavbarLink from '../shared/navbar-link';

const NavbarContainer = styled.div`
	height: 100%;
	width: 100%;

	padding: 20px 0;
	display: flex;
	flex-direction: column;
`;

const NavbarHeader = styled.div`
	margin: 0 20px;
	display: flex;
	flex-direction: column;
`;

const Avatar = styled.div`
	padding: 40px 20px;
	display: flex;
	flex-direction: column;

	border-radius: 100%;

	background-color: red;
	margin-bottom: 20px;
`;

const NavbarMenu = styled.div`
	display: flex;
	flex-direction: column;

	padding: 30px 0;
`;

const NavbarMore = styled.div`
	display: flex;
	flex-direction: column;
`;

const Navbar = () => {
	const [isMoreLinksShown, setIsMoreLinksShown] = useState(false);

	const handleMoreLinkShown = useCallback(() => {
		setIsMoreLinksShown((prev) => !prev);
	}, []);

	return (
		<NavbarContainer>
			<NavbarHeader>
				<Avatar />
				<Button>COMPOSE</Button>
			</NavbarHeader>
			<NavbarMenu>
				<NavbarLink>
					<TbMail fontSize={20} />
					Unread
				</NavbarLink>
				<NavbarLink>
					<AiOutlineInbox fontSize={20} />
					All
				</NavbarLink>
				<NavbarLink>
					<TbTrashX fontSize={20} />
					Trash
				</NavbarLink>
				<NavbarLink onClick={handleMoreLinkShown}>
					{isMoreLinksShown ? (
						<TiArrowSortedUp fontSize={20} />
					) : (
						<TiArrowSortedDown fontSize={20} />
					)}
					More
				</NavbarLink>
				{isMoreLinksShown && (
					<NavbarMore>
						<NavbarLink>
							<TbMailOpened fontSize={20} />
							Open
						</NavbarLink>
						<NavbarLink>
							<AiOutlineLike fontSize={20} />
							Interested
						</NavbarLink>
						<NavbarLink>
							<AiOutlineCheckSquare fontSize={20} />
							Negotiating
						</NavbarLink>
						<NavbarLink>
							<AiOutlineReload fontSize={20} />
							Converted
						</NavbarLink>
						<NavbarLink>
							<RiUserFollowLine fontSize={20} />
							Followup
						</NavbarLink>
						<NavbarLink>
							<AiOutlineDislike fontSize={20} />
							Not Interested
						</NavbarLink>
					</NavbarMore>
				)}
			</NavbarMenu>
		</NavbarContainer>
	);
};

export default Navbar;
