import { memo } from 'react';
import styled from 'styled-components';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { BiImage } from 'react-icons/bi';
import SearchInput from '../shared/searchInput';
import IconButton from '../shared/iconButton';

const HeaderContainer = styled.header`
	height: 90px;
	border-bottom: 1px solid #5757572f;
	padding: 10px 35px;

	display: grid;
	align-items: center;

	grid-template-columns: 1.5fr 1fr;

	@media (max-width: 1024px) {
		padding: 10px 25px;
		grid-template-columns: 50px 3fr 1fr;
	}
`;

const MenuBtn = styled.div`
	height: 34px;
	width: 34px;
	display: none;
	@media (max-width: 1024px) {
		margin-right: 0px;
		display: block;
	}
`;

const Avatar = styled.img`
	height: 50px;
	width: 50px;
	border-radius: 50%;

	background-color: #5555557a;

	margin-left: auto;
	margin-right: 50px;

	@media (max-width: 1024px) {
		margin-right: 0px;
	}
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
	@media (max-width: 1024px) {
		margin-right: 0px;
	}
`;

const Header = ({
	imageSrc,
	inputValue,
	onInputChange,
	toggleMobileSidebar,
}) => {
	return (
		<HeaderContainer>
			<MenuBtn>
				<IconButton onClick={toggleMobileSidebar}>
					<AiOutlineMenuFold fontSize={24} />
				</IconButton>
			</MenuBtn>
			<SearchInput
				placeholder="Search in mail"
				value={inputValue}
				onChange={onInputChange}
			/>
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

export default memo(Header);
