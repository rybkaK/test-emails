import React from 'react';
import { AiOutlineReload } from 'react-icons/ai';
import { TbMailOpened, TbTrashX } from 'react-icons/tb';
import styled from 'styled-components';
import Checkbox from '../../shared/checkbox';
import IconButton from '../../shared/iconButton';

const MailContainer = styled.div`
	position: relative;

	padding: 5px 20px;
	height: 60px;
	min-height: 60px;

	display: flex;
	align-items: center;

	border-bottom: 1px solid #5757572f;
	cursor: pointer;

	:hover {
		background-color: #ffeea0;

		div > div {
			display: flex;
		}
	}
	:last-child {
		border-bottom: none;
	}
`;

const MailTitle = styled.div`
	font-size: 16px;

	padding: 0 15px;
	min-width: 120px;
`;

const MailDescription = styled.div`
	font-size: 14px;

	@media (max-width: 768px) {
		display: none;
	}
`;

const MailDate = styled.div`
	margin-left: auto;
	font-size: 14px;

	min-width: 75px;
	text-align: end;
`;

const MailHover = styled.div`
	position: absolute;
	right: 130px;

	width: 120px;
	padding-right: 20px;
	background-color: #ffeea0;

	@media (max-width: 768px) {
		right: 0;
	}
`;

const MailHoverContainer = styled.div`
	display: none;
`;

const Mail = ({ title, description, date, onToggle, checked }) => {
	return (
		<MailContainer>
			<Checkbox checked={checked} onToggle={onToggle} />
			<MailTitle>{title}</MailTitle>
			<MailDescription>{description}</MailDescription>
			<MailDate>{date}</MailDate>
			<MailHover>
				<MailHoverContainer>
					<IconButton>
						<TbTrashX fontSize={20} />
					</IconButton>
					<IconButton type="cube">
						<TbMailOpened fontSize={20} />
					</IconButton>
					<IconButton type="cube">
						<AiOutlineReload fontSize={20} />
					</IconButton>
				</MailHoverContainer>
			</MailHover>
		</MailContainer>
	);
};

export default Mail;
