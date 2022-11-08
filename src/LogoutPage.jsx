import React from 'react';
import { useAuth } from './auth';

export const LogoutPage = () => {
    const auth = useAuth();
	const logout = (e) => {
		e.preventDefault();
        auth.logout();
	};
	return (
		<>
			<h1>Logout</h1>
			<form onSubmit={logout}>
				<label>¿Segur@?</label>
				<button type='submit'>Sí</button>
			</form>
		</>
	);
};
