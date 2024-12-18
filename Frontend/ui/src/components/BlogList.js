import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/posts').then((res) =>{
            setPosts(res.data);
            console.log(res.data)
        });
    }, []);

    return (
        <div>
            <h1>All Blog Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post._id}>
                        <Link to={`/posts/${post._id}`}>{post.title}</Link> by {post.author}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogList;
