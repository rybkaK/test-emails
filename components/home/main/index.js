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
import IconButton from '../../shared/iconButton';
import Dropdown from '../../shared/dropdown';
import Mail from '../mail';
import { formatDate } from '../../../utils/formatDate';
import { getSearchValue } from '../../../redux/slices/ui';

const MainContainer = styled.main`
	padding: 40px 75px 40px 35px;

	display: flex;
	flex-direction: column;

	@media (max-width: 768px) {
		padding: 40px 20px 40px 20px;
	}
`;

const MainHeader = styled.div`
	padding: 10px 0 10px 20px;

	display: flex;
	align-items: center;

	flex-wrap: wrap;
`;

const PaginationContainer = styled.div`
	margin-left: auto;

	display: flex;
	align-items: center;

	min-width: 105px;
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

const MAX_ITEMS_ON_PAGE = 10;

const Main = ({ mails }) => {
	const searchValue = useSelector(getSearchValue);

	const [selectedMailsIds, setSelectedMailsIds] = useState([]);

	const [page, setPage] = useState(0);

	const filteredMails = useMemo(
		() =>
			mails.filter((mail) =>
				(mail.name || '').toLowerCase().includes(searchValue.toLowerCase()),
			),
		[mails, searchValue],
	);

	const finalMails = useMemo(
		() =>
			filteredMails.filter(
				(_, index) =>
					index >= page * MAX_ITEMS_ON_PAGE &&
					index < (page + 1) * MAX_ITEMS_ON_PAGE,
			),
		[filteredMails, page],
	);

	const maxPage = useMemo(
		() => Math.ceil((filteredMails.length || 1) / MAX_ITEMS_ON_PAGE),
		[filteredMails.length],
	);

	const isSelectedAllMailsCheckbox = useMemo(
		() => selectedMailsIds.length === finalMails.length,
		[finalMails.length, selectedMailsIds.length],
	);

	const toggleAllMailsCheckbox = useCallback(() => {
		setSelectedMailsIds(() => {
			if (!isSelectedAllMailsCheckbox) {
				return [...finalMails.map((mail) => mail.id)];
			}
			return [];
		});
	}, [finalMails, isSelectedAllMailsCheckbox]);

	const toggleMailsCheckbox = useCallback((mailId) => {
		setSelectedMailsIds((prev) => {
			if (prev.includes(mailId)) return prev.filter((id) => id !== mailId);
			return [...prev, mailId];
		});
	}, []);

	const handlePrevPage = useCallback(() => {
		if (page > 0) setPage((prev) => prev - 1);
	}, [page]);

	const handleNextPage = useCallback(() => {
		if (page < maxPage - 1) setPage((prev) => prev + 1);
	}, [maxPage, page]);

	return (
		<MainContainer>
			<MainHeader>
				<Checkbox
					checked={!!(isSelectedAllMailsCheckbox && finalMails.length)}
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
					<PaginationInfo>
						{page + 1} of {maxPage}
					</PaginationInfo>
					<IconButton onClick={handlePrevPage}>
						<MdOutlineArrowBackIos fontSize={16} />
					</IconButton>
					<IconButton onClick={handleNextPage}>
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
						onToggle={() => toggleMailsCheckbox(id)}
						checked={selectedMailsIds.includes(id)}
					/>
				))}
			</MainBody>
		</MainContainer>
	);
};

export default memo(Main);
