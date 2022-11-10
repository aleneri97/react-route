import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import { useAuth } from './auth';
import {blogdata} from './blogdata';

export const BlogPost = () => {
	const {slug} = useParams();
	const navigate = useNavigate();

	const auth = useAuth();

	const blogpost = blogdata.find((post) => post.slug === slug);
	const returnToBlog = () => {
		navigate('/blog');
	};

	return (
		<>
			<h1>{blogpost.title}</h1>
			<button onClick={returnToBlog}>Volver al blog</button>
			<p>{blogpost.author}</p>
			<p>{blogpost.content}</p>
			{(auth.user?.role === 300 || auth.user?.username === blogpost.author) &&  (
				<button>Eliminar blogpost</button>
			)}
		</>
	);
};
