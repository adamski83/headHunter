import React, { useState } from 'react';
import Logo from '../assets/logo.avif';
import CreateUserStyle from './CreateUser.module.css';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		setEmail('');
		setPassword('');
		// if something, then
		// navigate('/createUser');
	};

	return (
		<div>
			<div>
				<img src={Logo} alt='logo' />
			</div>
			<form onSubmit={handleSubmit}>
				<section className={CreateUserStyle.login__input}>
					<input
						type='text'
						placeholder='E-mail'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type='text'
						placeholder='Hasło'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</section>
				<p>Zapomniałeś Hasła ?</p>
				<section
					style={{
						display: 'flex',
						justifyContent: 'space-around',
					}}>
					<p>
						Nie masz konta? <a href='#'>Zarejestruj się</a>
					</p>
					<button type='submit' className={CreateUserStyle.btn}>
						Zaloguj się
					</button>
				</section>
			</form>
		</div>
	);
};

export default CreateUser;
