import { Route, Switch } from "wouter";

import BlogPost from '../BlogPost/BlogPost';
import Newsletter from '../Newsletter/Newsletter';
import Copyright from '../Copyright/Copyright';
import Navbar from '../Navbar/Navbar';
import BlogCarousel from '../BlogCarousel/BlogCarousel';
import AboutMe from '../AboutMe/AboutMe';
import Contact from "../Contact/Contact";
import BlogGrid from "../BlogGrid/BlogGrid";

import './BlogContent.scss';

function BlogContent() {
  return (
    <Switch>
      <Route path='/'>
        <div className="BlogContent">
          <Navbar activeBar={0} />
          <BlogCarousel />
          <BlogPost />
          <Newsletter />
          <BlogPost />
          <Copyright />
        </div>
      </Route>
      <Route path='/about'>
        <div className="BlogContent">
          <Navbar activeBar={1}/>
          <AboutMe />
          <Copyright />
        </div>
      </Route>
      <Route path='/contact'>
        <div className="BlogContent">
          <Navbar activeBar={2}/>
          <Contact />
          <Copyright />
        </div>
      </Route>
      <Route path='/blog'>
        <div className="BlogContent">
          <Navbar />
          <BlogGrid />
          <Copyright />
        </div>
      </Route>
      <Route>
        <div className="BlogContent">
          <Navbar activeBar={-1} />
            404 Error
          <Copyright />
        </div>
      </Route>
    </Switch>
  )
}

export default BlogContent;
