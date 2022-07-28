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
	padding-left: ${(props) => (props.opened ? '250px' : '80px')};
	width: 100%;
	transition: padding 0.5s ease-in-out;
`;

const Layout = ({ children }) => {
	const dispatch = useDispatch();

	const [isOpenedSidebar, setIsOpenedSidebar] = useState(true);

	const searchValue = useSelector(getSearchValue);

	const toggleSidebar = useCallback(() => {
		setIsOpenedSidebar((prev) => !prev);
	}, []);

	const handleInputChange = useCallback(
		(value) => {
			dispatch(updateSearchValue(value));
		},
		[dispatch],
	);

	return (
		<LayoutContainer>
			<Sidebar isOpen={isOpenedSidebar} onToggle={toggleSidebar} />
			<ListContainer opened={isOpenedSidebar}>
				<Header inputValue={searchValue} onInputChange={handleInputChange} />
				{children}
			</ListContainer>
		</LayoutContainer>
	);
};

export default Layout;
