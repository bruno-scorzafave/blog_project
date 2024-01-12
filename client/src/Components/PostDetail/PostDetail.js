import React, { useEffect, useState} from 'react';
import parse from 'html-react-parser';

import axios from '../../axios';
import PageHeader from '../PageHeader/PageHeader'
import PostIcons from '../PostIcons/PostIcons';
import Comments from '../Comments/Comments';

import './PostDetail.scss'

function PostDetail({params}) {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get(`/get_post/brunoscorza@hotmail.com/${params.title}`).then((response) => {
            setPost(response.data);
        })
    }, [])

    console.log(post)

    return (
        <>
        <PageHeader title={decodeURI(post.title)} />
        <div className="container py-5 px-2 bg-white">
            <div className="row px-4">
                <div id='content' className="col-12">
                    { post.content && parse(post.content) }
                </div>
                <hr />
                <Comments />
            </div>
        </div>
        </>
    );
}

export default PostDetail;