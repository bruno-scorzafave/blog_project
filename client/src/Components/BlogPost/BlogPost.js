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
                <h3 className="mt-md-4 px-md-3 mb-2 py-2 bg-white font-weight-bold">Lorem ipsum dolor sit amet</h3>
                <PostIcons tag={'small'}/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                </p>
                <Link className="btn btn-link p-0 text-primary" href={"/post/" + post.title}>Read More <FontAwesomeIcon icon={solid('angle-right')} className='text-primary'/></Link>
            </div>
        </div>
    </div>
  );
}

export default BlogPost;
