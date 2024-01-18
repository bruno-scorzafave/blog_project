import React, { useEffect, useState} from 'react';

import axios from '../../axios';
import BlogPost from '../BlogPost/BlogPost';
import Newsletter from '../Newsletter/Newsletter';

function BlogPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('/get_posts/brunoscorza@hotmail.com').then((response) => {
            setPosts(response.data);
        })
    }, [])

    const half_point = Math.ceil(posts.qty/2)
    const posts_first_half = Object.values(posts).slice(0, half_point).map((value) =>
        <BlogPost post={value} />
    )
    const posts_second_half = Object.values(posts).slice(half_point, -2).map((value) =>
        <BlogPost post={value} />
    )

    return (
        <div>
            {posts_first_half}
            <Newsletter />
            {posts_second_half}
        </div>
    );
}

export default BlogPosts;
