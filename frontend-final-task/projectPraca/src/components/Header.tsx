import React from 'react';
import Logo from '../../src/assets/logo.avif';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import PositionedMenu from './PositionedMenu';

const Header = () => {
	return (
		<Box
			sx={{
				width: '1200px',
				heigth: '80px',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}>
			<Avatar src={Logo} sizes='large' />
			<PositionedMenu />
		</Box>
	);
};

export default Header;
