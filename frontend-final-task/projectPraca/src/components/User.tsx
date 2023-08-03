import React from 'react';
import randomUser from '../assets/random_user.jpg';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import photo from '../assets/random_user.jpg';

export const userDara = {
	name: 'Jan',
	surname: 'Kowalski',
	mobile: '511625489',
	email: 'jankowalski@gmail.com',
	photo,
};
const User = () => {
	const { name, surname, mobile, email } = userDara;
	return (
		<Box
			sx={{
				width: 250,
				height: 700,
				backgroundColor: '#292A2B',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-start',
				alignItems: 'center',
			}}>
			<Box
				sx={{
					width: 250,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					backgroundColor: 'inherit',
				}}>
				<Avatar
					src={randomUser}
					sx={{
						width: 100,
						height: 100,
						display: 'flex',
						margin: '30px 50px 12px 50px ',
					}}
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
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'baseline',
						marginBottom: '10px',
					}}>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'flex-start',
							alignItems: 'center',
							gap: '10px',
							fontSize: '1.6em',
							marginBottom: '10px',
							marginTop: '10px',
						}}>
						<LocalPhoneIcon
							sx={{
								color: '#4D4D4D',
								fontSize: '1.3rem',
							}}
						/>
						<p style={{ fontSize: '1rem' }}>{mobile}</p>
					</Box>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'flex-start',
							alignItems: 'center',
							gap: '10px',
							fontSize: '1.6em',
							marginBottom: '10px',
						}}>
						<EmailIcon
							sx={{
								color: '#4D4D4D',
								fontSize: '1.3rem',
							}}
						/>
						<p style={{ fontSize: '1rem' }}>{email}</p>
					</Box>
					<p style={{ color: '#4D4D4D' }}>O mnie</p>
				</div>
				<p style={{ textAlign: 'left', margin: '30px' }}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Fugiat excepturi, repellat, ad veniam cumque sit eos unde
					tempora minus mollitia, nostrum maxime fuga! Obcaecati
					aperiam dicta nobis perspiciatis, praesentium mollitia.
				</p>
				<Box
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '14px 0',
					}}>
					<Button variant='contained' color='error' fullWidth={true}>
						Brak Zainteresowania
					</Button>
					<Button variant='contained' color='error' fullWidth={true}>
						Zatrudniony
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default User;
