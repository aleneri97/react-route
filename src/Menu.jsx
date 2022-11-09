import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {useAuth} from './auth';

export const Menu = () => {
	const linkActiveStyle = (isActive) => ({color: isActive ? 'red' : 'blue'});
	const auth = useAuth();

	const routes = [
		{
			path: '/',
			text: 'Home',
			permission: 'all',
		},
		{
			path: '/blog',
			text: 'Blog',
			permission: 'all',
		},
		{
			path: '/profile',
			text: 'Profile',
			permission: 'private',
		},
		{
			path: '/login',
			text: 'Login',
			permission: 'public',
		},
		{
			path: '/logout',
			text: 'Logout',
			permission: 'private',
		},
	];

	return (
		<nav>
			<ul>
				{routes.map((route) => {
          if(auth.user && route.permission === 'public') return null;
          if(!auth.user && route.permission === 'private') return null;
          return (
					<li key={route.path}>
						<NavLink
							style={({isActive}) => linkActiveStyle(isActive)}
							to={route.path}
							end
						>
							{route.text}
						</NavLink>
					</li>);
				})}
			</ul>
		</nav>
	);
};
