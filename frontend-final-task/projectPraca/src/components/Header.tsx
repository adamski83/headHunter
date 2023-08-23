import React from 'react';
import { StyledHeader, Wrapper } from './styled/Header.styled.js';
import { UserMenu } from './UserMenu';
import { Image } from './styled/Login.styled.js';
import Logo from '../assets/LogoMegaK.png';

export const Header = () => {
	return (
		<Wrapper>
			<StyledHeader>
				<Image src={Logo} />
				<UserMenu />
			</StyledHeader>
		</Wrapper>
	);
};
