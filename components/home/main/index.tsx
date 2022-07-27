import React, { useCallback, useState } from 'react';
import { AiOutlineReload } from 'react-icons/ai';
import { TbMail, TbTrashX } from 'react-icons/tb';
import {
	MdOutlineArrowBackIos,
	MdOutlineArrowForwardIos,
} from 'react-icons/md';
import styled from 'styled-components';

import Checkbox from '../../shared/checkbox';
import IconButton from '../../shared/icon-button';
import Dropdown from '../../shared/dropdown';

const MainContainer = styled.main`
	padding: 40px 75px 40px 35px;

	display: flex;
	flex-direction: column;
`;

const MainHeader = styled.div`
	padding: 10px;

	display: flex;
	align-items: center;
`;

const PaginationContainer = styled.div`
	margin-left: auto;

	display: flex;
	align-items: center;
`;

const PaginationInfo = styled.p`
	margin: 0;
	font-size: 12px;
	font-weight: 400;
	color: #555555;
`;

const Main: React.FC = () => {
	const [isAllMailsSelected, setIsAllMailsSelected] = useState(false);

	const [page, setPage] = useState(0);

	const toggleAllMailsCheckbox = useCallback(() => {
		setIsAllMailsSelected((prev) => !prev);
	}, []);

	return (
		<MainContainer>
			<MainHeader>
				<Checkbox
					checked={isAllMailsSelected}
					onToggle={toggleAllMailsCheckbox}
				/>
				<Dropdown
					options={[
						'Interested',
						'Negotiating',
						'Converted',
						'Followup',
						'Not Interested',
						'Update Status',
					]}
				/>
				<IconButton>
					<TbTrashX fontSize={20} />
				</IconButton>
				<IconButton>
					<TbMail fontSize={20} />
				</IconButton>
				<IconButton>
					<AiOutlineReload fontSize={20} />
				</IconButton>
				<PaginationContainer>
					<PaginationInfo>{page} of 30</PaginationInfo>
					<IconButton>
						<MdOutlineArrowBackIos fontSize={16} />
					</IconButton>
					<IconButton>
						<MdOutlineArrowForwardIos fontSize={16} />
					</IconButton>
				</PaginationContainer>
			</MainHeader>
		</MainContainer>
	);
};

export default Main;
