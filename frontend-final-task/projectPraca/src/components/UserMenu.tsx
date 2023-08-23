import React from 'react';
import styled from 'styled-components';
import { StyledMenu } from './styled/Header.styled.js';
import { userData } from './User.js';
import { Image } from './styled/Login.styled.js';

const UserAvatar = styled(Image)`
	width: 45px;
	height: 45px;
	border-radius: 50%;
`;

const { photo } = userData;
export const UserMenu = () => {
	return (
		<StyledMenu action='#'>
			<UserAvatar src={photo} alt='' />
			<label htmlFor='userMenu'>Mateusz Kowalik</label>
			<select name='userMenu' id='userMenu'>
				<option value='wyloguj'></option>
				<option value='konto'>Konto</option>
				<option value='wyloguj'>Wyloguj</option>
			</select>
		</StyledMenu>
	);
};
