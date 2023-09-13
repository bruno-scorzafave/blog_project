import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import './BlogPost.scss';

function BlogPost() {
  return (
    <div className="BlogPost row blog-item px-3 pb-5">
        <div className="col-md-5">
            <img className="img-fluid mb-4 mb-md-0" src="img/blog-1.jpg" alt="" />
        </div>
        <div className="col-md-7">
            <h3 className="mt-md-4 px-md-3 mb-2 py-2 bg-white font-weight-bold">Lorem ipsum dolor sit amet</h3>
            <div className="d-flex mb-3">
                <small className="mr-2 text-muted"><FontAwesomeIcon icon={solid('calendar-days')} /> 01-Jan-2045</small>
                <small className="mr-2 text-muted"><FontAwesomeIcon icon={solid('folder')} /> Web Design</small>
                <small className="mr-2 text-muted"><FontAwesomeIcon icon={solid('comments')} /> 15 Comments</small>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
            </p>
            {/* TODO change href */}
            <a className="btn btn-link p-0 text-primary" href="/">Read More <FontAwesomeIcon icon={solid('angle-right')} className='text-primary'/></a>
        </div>
    </div>
  );
}

export default BlogPost;
