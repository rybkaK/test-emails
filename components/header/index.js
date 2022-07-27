import React from 'react';
import styled from 'styled-components';
import { BiImage } from 'react-icons/bi';
import SearchInput from '../shared/search-input';

const HeaderContainer = styled.header`
	height: 90px;
	border-bottom: 1px solid #5757572f;
	padding: 10px 35px;

	display: grid;
	align-items: center;

	grid-template-columns: 1.5fr 1fr;
`;

const Avatar = styled.img`
	height: 50px;
	width: 50px;
	border-radius: 50%;

	background-color: #5555557a;

	margin-left: auto;
	margin-right: 50px;
`;

const AvatarError = styled.div`
	height: 50px;
	width: 50px;
	border-radius: 50%;

	background-color: #5555557a;

	display: flex;
	align-items: center;
	justify-content: center;

	margin-left: auto;
	margin-right: 50px;
`;

const Header = ({ imageSrc }) => {
	return (
		<HeaderContainer>
			<SearchInput placeholder="Search in mail" />
			{imageSrc ? (
				<Avatar src={imageSrc} alt="avatar" />
			) : (
				<AvatarError>
					<BiImage fontSize={20} color="#ffffff" />
				</AvatarError>
			)}
		</HeaderContainer>
	);
};

export default Header;
