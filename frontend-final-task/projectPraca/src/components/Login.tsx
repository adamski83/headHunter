import React, { useState } from 'react';
import {
	Image,
	SignInForm,
	StyledInput,
	Text,
	Link,
	Button,
} from './styled/Login.styled.js';
import Logo from '../assets/LogoMegaK.png';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
		e.preventDefault();

		setEmail('');
		setPassword('');
	};

	return (
		<div>
			<SignInForm onSubmit={handleSubmit}>
				<Image src={Logo} alt='logo' />
				<StyledInput
					autoComplete='true'
					placeholder='Email'
					type='text'
					value={email}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setEmail(e.target.value)
					}
				/>
				<StyledInput
					autoComplete='true'
					type='password'
					placeholder='Hasło'
					value={password}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setPassword(e.target.value)
					}
				/>{' '}
				<div style={{ width: '350px' }}>
					<Text>Zapomniałeś hasła ?</Text>
				</div>
				<div
					style={{
						width: '350px',
						display: 'flex',
						justifyContent: 'space-between',
						marginTop: '22px',
					}}>
					<Text>
						Nie masz konta? <Link href='#'>Zarejestruj się</Link>
					</Text>
					<Button>Zaloguj się</Button>
				</div>
			</SignInForm>
		</div>
	);
};
