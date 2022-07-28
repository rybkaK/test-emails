import { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Sidebar from '../sidebar';
import Header from '../header';
import { getSearchValue, updateSearchValue } from '../../redux/slices/ui';

const LayoutContainer = styled.div`
	padding: 0;
	margin: 0;
	height: 100vh;
	width: 100%;

	display: flex;
	flex-direction: column;
`;

const ListContainer = styled.div`
	padding-left: ${(props) => (props.desktopOpened ? '250px' : '80px')};

	@media (max-width: 1024px) {
		padding-left: 0;
	}
	width: 100%;
	transition: padding 0.5s ease-in-out;
`;

const Layout = ({ children }) => {
	const dispatch = useDispatch();

	const [isOpenedMobileSidebar, setIsOpenedMobileSidebar] = useState(false);
	const [isOpenedDesktopSidebar, setIsOpenedDesktopSidebar] = useState(false);

	const searchValue = useSelector(getSearchValue);

	const toggleMobileSidebar = useCallback(() => {
		setIsOpenedMobileSidebar((prev) => !prev);
	}, []);

	const toggleDesktopSidebar = useCallback(() => {
		setIsOpenedDesktopSidebar((prev) => !prev);
	}, []);

	const handleInputChange = useCallback(
		(value) => {
			dispatch(updateSearchValue(value));
		},
		[dispatch],
	);

	return (
		<LayoutContainer>
			<Sidebar
				isOpenMobile={isOpenedMobileSidebar}
				onMobileToggle={toggleMobileSidebar}
				isOpenDesktop={isOpenedDesktopSidebar}
				onDesktopToggle={toggleDesktopSidebar}
			/>
			<ListContainer desktopOpened={isOpenedDesktopSidebar}>
				<Header
					inputValue={searchValue}
					onInputChange={handleInputChange}
					toggleMobileSidebar={toggleMobileSidebar}
				/>
				{children}
			</ListContainer>
		</LayoutContainer>
	);
};

export default Layout;
