import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link } from "wouter"

import PostIcons from '../PostIcons/PostIcons';

import './BlogPost.scss';

function BlogPost({post}) {
    return (
        <div className='BlogPost container bg-white pt-5'>
            <div className="row blog-item px-3 pb-5">
                <div className="col-md-5">
                    <img className="img-fluid mb-4 mb-md-0" src="img/blog-1.jpg" alt="" />
                </div>
                <div className="col-md-7">
                    <h3 className="px-md-3 mb-2 py-2 bg-white font-weight-bold">{post.title}</h3>
                    <PostIcons tag={'small'} created_at={post.created_at} slug={post.slug}/>
                    <p>
                        {post.description}
                    </p>
                    <Link className="btn btn-link p-0 text-primary" href={"/post/" + post.title}>Read More <FontAwesomeIcon icon={solid('angle-right')} className='text-primary'/></Link>
                </div>
            </div>
        </div>
    );
}

export default BlogPost;
