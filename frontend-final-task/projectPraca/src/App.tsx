import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from './components/Login';
import CreateUserData from './components/CreateUserData';
import './App.css';
import { UsersList } from './components/UsersList';

function App() {
	return (
		<div>
			<Routes>
				<Route path='login' element={<Login />} />
				<Route path='usersList' element={<UsersList />} />
			</Routes>
		</div>
	);
}

export default App;
