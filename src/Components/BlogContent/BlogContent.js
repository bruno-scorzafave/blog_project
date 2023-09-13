import BlogPost from '../../Components/BlogPost/BlogPost';
import Newsletter from '../../Components/Newsletter/Newsletter';

import './BlogContent.scss';

function BlogContent() {
  return (
    <div className="BlogContent container bg-white pt-5">
        <BlogPost />
        <Newsletter />
    </div>
  );
}

export default BlogContent;