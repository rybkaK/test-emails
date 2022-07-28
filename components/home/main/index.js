import { memo, useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
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
import Mail from '../mail';
import { formatDate } from '../../../utils/formatDate';
import { getSearchValue } from '../../../redux/slices/ui';

const MainContainer = styled.main`
	padding: 40px 75px 40px 35px;

	display: flex;
	flex-direction: column;
`;

const MainHeader = styled.div`
	padding: 10px 0 10px 20px;

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

const MainBody = styled.div`
	overflow: auto;
	max-height: calc(100vh - 250px);
	display: flex;
	flex-direction: column;

	border-radius: 5px;
	border: 1px solid #5757572f;
`;

const Main = ({ mails }) => {
	const searchValue = useSelector(getSearchValue);

	const [isAllMailsSelected, setIsAllMailsSelected] = useState(false);

	// eslint-disable-next-line no-unused-vars
	const [page, setPage] = useState(0);

	const toggleAllMailsCheckbox = useCallback(() => {
		setIsAllMailsSelected((prev) => !prev);
	}, []);

	const finalMails = useMemo(
		() =>
			mails.filter((mail) =>
				(mail.name || '').toLowerCase().includes(searchValue.toLowerCase()),
			),
		[mails, searchValue],
	);

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
			<MainBody>
				{finalMails.map(({ id, name, description, date }) => (
					<Mail
						key={id}
						title={name}
						description={description}
						date={formatDate(date)}
					/>
				))}
			</MainBody>
		</MainContainer>
	);
};

export default memo(Main);
