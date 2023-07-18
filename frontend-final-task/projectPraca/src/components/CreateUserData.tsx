import React, { useState } from 'react';

const CreateUserData = () => {
	const [education, setEducation] = useState('');
	const [course, setCourse] = useState('');
	const [expirience, setExpirience] = useState('');
	const [contractType, setContractType] = useState('');
	const [experienceTime, setExperienceTime] = useState('');
	const [salary, setSalry] = useState(0);

	return (
		<div>
			<form>
				<input type='text' placeholder='edukacja' />
				<input type='text' placeholder='kursy' />
				<input type='text' placeholder='doświadczenie' />
				<select
					value={contractType}
					onChange={(e) => setContractType(e.target.value)}>
					<option value='B2B'>B2B</option>
					<option value='UOW'>Umowa o Pracę</option>
					<option value='Staż'>Staż</option>
				</select>
				<select
					value={experienceTime}
					onChange={(e) => setExperienceTime(e.target.value)}>
					<option value={0}>Brak doświadczenia komercyjnego</option>
					<option value={1}>1 rok doświadczenia</option>
					<option value={3}>3 lata doświadczenia</option>
					<option value={5}>5 lata doświadczenia</option>
					<option value={10}>ponad 10 lat doświadczenia</option>
				</select>
				<select
					value={salary}
					onChange={(e) => setSalry(e.target.value)}>
					<option value={0}>Brak doświadczenia komercyjnego</option>
					<option value={1}>1 rok doświadczenia</option>
					<option value={3}>3 lata doświadczenia</option>
					<option value={5}>5 lata doświadczenia</option>
					<option value={10}>ponad 10 lat doświadczenia</option>
				</select>
			</form>
		</div>
	);
};

export default CreateUserData;
