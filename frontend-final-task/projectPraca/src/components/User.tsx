import React from 'react';
import randomUser from '../assets/random_user.jpg';

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
	return <></>;
};

export default User;
