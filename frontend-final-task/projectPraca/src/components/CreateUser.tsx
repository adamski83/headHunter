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

const CreateUser = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email);

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
					onChange={(e) => setEmail(e.target.value)}
				/>
				<StyledInput
					autoComplete='true'
					type='password'
					placeholder='Hasło'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>{' '}
				<div style={{ width: '100%' }}>
					<Text>Zapomniałeś hasła ?</Text>
				</div>
				<div
					style={{
						width: '100%',
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

export default CreateUser;
