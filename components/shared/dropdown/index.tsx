import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

const DropDownContainer = styled.div`
	margin: 0 15px;
	position: relative;
`;

const DropDownHeader = styled.div`
	padding: 10px 20px;
	border-radius: 20px;

	font-weight: 500;
	font-size: 16px;
	color: #555555;
	background-color: #ffffff;

	-webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.8);
	box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.3);
	cursor: pointer;

	:hover {
		background-color: #79797922;
	}
`;

const DropDownList = styled.ul`
	position: absolute;
	top: 45px;

	padding: 10px 0;
	margin: 0;

	border-radius: 5px;
	background-color: #ffffff;
	-webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.8);
	box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.3);
`;

const ListItem = styled.li`
	list-style: none;

	min-width: 150px;
	padding: 10px 15px;
	color: #555555;

	cursor: pointer;

	:hover {
		background-color: #79797922;
	}
`;

interface DropdownProps {
	options: string[];
	onSelect?: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = useCallback(() => setIsOpen((prev) => !prev), []);

	const handleOptionSelect = useCallback((value) => {
		if (onSelect) onSelect(value);
		setIsOpen(false);
	}, []);

	return (
		<DropDownContainer>
			<DropDownHeader onClick={toggleDropdown}>Status</DropDownHeader>
			{isOpen && (
				<DropDownList>
					{options.map((option, index) => (
						<ListItem onClick={() => handleOptionSelect(option)} key={index}>
							{/* TODO replace index by id */}
							{option}
						</ListItem>
					))}
				</DropDownList>
			)}
		</DropDownContainer>
	);
};

export default Dropdown;
