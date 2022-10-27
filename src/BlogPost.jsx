import React from 'react';
import {useParams} from 'react-router-dom';
import {blogdata} from './blogdata';

export const BlogPost = () => {
	const {slug} = useParams();
	const blogpost = blogdata.find((post) => post.slug === slug);

	return (
		<>
			<h1>{blogpost.title}</h1>
			<p>{blogpost.author}</p>
			<p>{blogpost.content}</p>
		</>
	);
};
