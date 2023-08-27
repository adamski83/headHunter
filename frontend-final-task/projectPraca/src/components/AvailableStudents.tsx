import React from 'react';
import styled from 'styled-components';
import { Wrapper } from './styled/Header.styled.js';
import { StyledStudentsHeader } from './styled/StydentsList.styled.js';
import { Button } from './styled/Login.styled.js';

const CustomHeaderButton = styled(Button)`
	position: relative;
	font-weight: normal;
	color: #f7f7f7;
	letter-spacing: 0px;
	text-align: left;
	height: 30px;
	margin-left: 15px;
	cursor: pointer;

	&:before {
		content: '';
		position: absolute;
		border-bottom: 4px solid #e02735;
		width: 130px;
		bottom: -21px;
		left: -15px;
	}
`;

export const AvailableStudents = () => {
	return (
		<Wrapper color='#222224'>
			<StyledStudentsHeader>
				<div
					style={{
						display: 'flex',
						width: '220px',
						justifyContent: 'space-between',
					}}>
					<CustomHeaderButton background='inherit'>
						Dostępni kursanci
					</CustomHeaderButton>
					<CustomHeaderButton background='inherit'>
						Do rozmowy
					</CustomHeaderButton>
				</div>
			</StyledStudentsHeader>
		</Wrapper>
	);
};
