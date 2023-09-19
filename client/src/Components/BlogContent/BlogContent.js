import { Route, Switch } from "wouter";

import BlogPost from '../BlogPost/BlogPost';
import Newsletter from '../Newsletter/Newsletter';
import Copyright from '../Copyright/Copyright';
import Navbar from '../Navbar/Navbar';
import BlogCarousel from '../BlogCarousel/BlogCarousel';
import AboutMe from '../AboutMe/AboutMe';

import './BlogContent.scss';

function BlogContent() {
  return (
    <Switch>
      <Route path='/'>
        <div className="BlogContent container bg-white pt-5">
          <Navbar activeBar={0} />
          <BlogCarousel />
          <BlogPost />
          <Newsletter />
          <BlogPost />
          <Copyright />
        </div>
      </Route>
      <Route path='/about'>
        <div className="BlogContent container bg-white pt-5">
          <Navbar activeBar={1}/>
          <AboutMe />
          <Copyright />
        </div>
      </Route>
      <Route>
        <div className="BlogContent container bg-white pt-5">
          <Navbar activeBar={-1} />
            404 Error
          <Copyright />
        </div>
      </Route>
    </Switch>
  )
}

export default BlogContent;
