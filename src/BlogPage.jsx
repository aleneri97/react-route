import React from 'react';
import {Link} from 'react-router-dom';
import {blogdata} from './blogdata';

export const BlogPage = () => {
	return (
		<>
			<h1>BlogPage</h1>
			{blogdata.map((post) => (
				<BlogLink post={post} />
			))}
		</>
	);
};

const BlogLink = ({post}) => {
	return (
		<li>
			<Link to={`/blog/${post.slug}`}>{post.title}</Link>
		</li>
	);
};
