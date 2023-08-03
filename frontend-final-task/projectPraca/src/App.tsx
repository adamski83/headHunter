import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CreateUser from './components/CreateUser';
import CreateUserData from './components/CreateUserData';
import './App.css';

function App() {
	return (
		<div>
			<Routes>
				<Route path='login' element={<CreateUser />} />
				<Route path='userCv' element={<CreateUserData />} />
			</Routes>
		</div>
	);
}

export default App;
