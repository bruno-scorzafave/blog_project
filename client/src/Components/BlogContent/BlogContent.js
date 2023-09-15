import BlogPost from '../BlogPost/BlogPost';
import Newsletter from '../Newsletter/Newsletter';
import Copyright from '../Copyright/Copyright';
import Navbar from '../Navbar/Navbar';
import BlogCarousel from '../BlogCarousel/BlogCarousel';

import './BlogContent.scss';

function BlogContent() {
  return (
    <div className="BlogContent container bg-white pt-5">
      <Navbar />
      <BlogCarousel />
      <BlogPost />
      <Newsletter />
      <BlogPost />
      <Copyright />
    </div>
  );
}

export default BlogContent;
