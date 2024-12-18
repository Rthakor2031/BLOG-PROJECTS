import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BlogForm = () => {
    const [form, setForm] = useState({ title: '', author: '', content: '', tags: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/posts', { ...form, tags: form.tags.split(',') }).then(() => navigate('/'));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="title" placeholder="Title" onChange={handleChange} />
            <input name="author" placeholder="Author" onChange={handleChange} />
            <textarea name="content" placeholder="Content" onChange={handleChange} />
            <input name="tags" placeholder="Tags (comma-separated)" onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default BlogForm;
