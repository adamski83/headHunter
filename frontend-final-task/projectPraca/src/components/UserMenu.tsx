import React from 'react';
import styled from 'styled-components';
import { DropDownProfile } from './styled/Header.styled.js';
import { userData } from './User.js';
import { Image } from './styled/Login.styled.js';

const UserAvatar = styled(Image)`
	width: 45px;
	height: 45px;
	border-radius: 50%;
`;
const { name, surname } = userData;

const { photo } = userData;
export const UserMenu = () => {
	return (
		<DropDownProfile>
			<UserAvatar src={photo} />
			<div>
				<button>{`${name} ${surname}`}</button>
				<div className='content'>
					<a href='#1'>Konto</a>
					<a href='#2'>Wyloguj</a>
				</div>
			</div>
		</DropDownProfile>
	);
};
