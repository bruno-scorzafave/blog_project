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

    const post_id = Object.keys(post)[0] || 0

    return (
        <>
        <PageHeader title={decodeURI(post[post_id] ? post[post_id].title : 'title')} />
        <div className="container py-5 px-2 bg-white">
            <div className="row px-4">
                { post[post_id] &&
                    <>
                        <PostIcons tag={'p'} created_at={ post[post_id].created_at } slug={ post[post_id].slug }/>
                        <div id='content' className="col-12">
                            { parse(post[post_id].content) }
                        </div>
                        <hr />
                        <Comments post_id={post_id}/>
                    </>
                }
            </div>
        </div>
        </>
    );
}

export default PostDetail;