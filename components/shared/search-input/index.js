import React from 'react';
import { FiSearch } from 'react-icons/fi';
import styled from 'styled-components';

const SearchInputContainer = styled.div`
	width: 100%;
	position: relative;

	& > svg {
		position: absolute;
		right: 20px;
		top: 50%;
		transform: translateY(-50%);
	}
`;

const StyledSearchInput = styled.input`
	padding: 15px;

	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 10px;
	font-size: 16px;
	font-weight: 400;

	border: 1px solid #5757572f;
	color: #555555;

	width: 100%;
	outline: none;
`;

const SearchInput = ({ placeholder, value, onChange }) => {
	return (
		<SearchInputContainer>
			<StyledSearchInput
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
			<FiSearch fontSize={20} color="#555555" />
			{/* here we can add onSubmit handler or formik etc */}
		</SearchInputContainer>
	);
};

export default SearchInput;
