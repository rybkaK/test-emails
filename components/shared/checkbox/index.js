import React from 'react';
import styled from 'styled-components';
import { AiOutlineCheck } from 'react-icons/ai';

const CheckboxContainer = styled.div`
	width: 18px;
	height: 18px;

	margin: 0 5px;

	display: flex;
	align-items: center;
	justify-content: center;

	border: 2px solid #555555;
	border-radius: 4px;

	cursor: pointer;
`;

const Checkbox = ({ checked, onToggle }) => {
	return (
		<CheckboxContainer onClick={onToggle}>
			{checked && <AiOutlineCheck />}
		</CheckboxContainer>
	);
};

export default Checkbox;
