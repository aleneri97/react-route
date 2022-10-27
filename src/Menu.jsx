import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Menu = () => {
  const linkActiveStyle = isActive => ({ color: isActive ? 'red' : 'blue' });

  const routes = [
    {
      path: '/',
      text: 'Home'
    },
    {
      path: '/blog',
      text: 'Blog'
    },
    {
      path: '/profile',
      text: 'Profile'
    },
  ];
  
	return (
		<nav>
			<ul>
				{routes.map(route => (
					<li>
						<NavLink
							style={({isActive}) => linkActiveStyle(isActive)}
							to={route.path}
              end
						>
							{route.text}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
