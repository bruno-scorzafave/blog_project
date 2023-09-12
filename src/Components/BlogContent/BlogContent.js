import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

import './BlogContent.scss';

function BlogContent() {
  return (
    <div className="BlogContent container bg-white pt-5">
        <div class="row blog-item px-3 pb-5">
            <div class="col-md-5">
                <img class="img-fluid mb-4 mb-md-0" src="img/blog-1.jpg" alt="Image" />
            </div>
            <div class="col-md-7">
                <h3 class="mt-md-4 px-md-3 mb-2 py-2 bg-white font-weight-bold">Lorem ipsum dolor sit amet</h3>
                <div class="d-flex mb-3">
                    <small class="mr-2 text-muted"><FontAwesomeIcon icon={solid('calendar-days')} /> 01-Jan-2045</small>
                    <small class="mr-2 text-muted"><FontAwesomeIcon icon={solid('folder')} /> Web Design</small>
                    <small class="mr-2 text-muted"><FontAwesomeIcon icon={solid('comments')} /><i class="fa fa-comments"></i> 15 Comments</small>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                </p>
                <a class="btn btn-link p-0" href="">Read More <i class="fa fa-angle-right"></i></a>
            </div>
        </div>
    </div>
  );
}

export default BlogContent;