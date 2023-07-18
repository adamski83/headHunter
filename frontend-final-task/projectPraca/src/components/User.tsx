import React from 'react';
import randomUser from '../assets/random_user.jpg';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const userDara = {
	name: 'Jan',
	surname: 'Kowalski',
	mobile: '511625489',
	email: 'jankowalski@gmail.com',
};
const User = () => {
	const { name, surname, mobile, email } = userDara;
	return (
		<Box
			sx={{
				width: 300,
				height: 300,
				backgroundColor: 'transparent',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-start',
				alignItems: 'center',
				// '&:hover': {
				// 	backgroundColor: 'primary.main',
				// 	opacity: [0.9, 0.8, 0.7],
				// },
			}}>
			<Avatar
				src={randomUser}
				sx={{ width: 150, height: 150, display: 'flex' }}
			/>
			<Typography variant='h6'>{`${name} ${surname}`}</Typography>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'flex-start',
					alignItems: 'center',
					gap: '10px',
				}}>
				<GitHubIcon color='primary' />
				<Link href='#'>{`${name} ${surname}`}</Link>
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'flex-start',
					alignItems: 'center',
					gap: '10px',
					fontSize: '1.6em',
				}}>
				<LocalPhoneIcon sx={{ color: '#555', fontSize: '1.1em' }} />
				<Typography variant='h6'>{mobile}</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'flex-start',
					alignItems: 'center',
					gap: '10px',
					fontSize: '1.6em',
				}}>
				<EmailIcon sx={{ color: '#555', fontSize: '1.1em' }} />
				<Typography variant='h6'>{email}</Typography>
			</Box>
		</Box>
	);
};

export default User;
