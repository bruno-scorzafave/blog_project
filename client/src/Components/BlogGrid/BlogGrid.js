import { useState } from 'react';

import PageHeader from '../PageHeader/PageHeader'
import BlogPost from '../BlogPost/BlogPost';

function blogPosts() {
    return (
        [
        <BlogPost />,
        <BlogPost />,
        <BlogPost />,
        <BlogPost />,
        <BlogPost />,
        <BlogPost />,
        <BlogPost />,
        <BlogPost />,
        <BlogPost />
        ]
    )
}

function BlogGrid() {
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(3)

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = blogPosts().slice(indexOfFirstPost, indexOfLastPost)
    const lastPage = Math.ceil(blogPosts().length / postsPerPage )

    return (
        <>
        <PageHeader title={"My Blog"}/>
        {currentPosts}
        <div class="row px-3 pb-5">
            <nav aria-label="Page navigation">
                <ul class="pagination m-0 mx-3">
                <li class={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                    <span class="sr-only">Previous</span>
                    </a>
                </li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">»</span>
                    <span class="sr-only">Next</span>
                    </a>
                </li>
                </ul>
            </nav>
        </div>
        </>
    );
}
  
export default BlogGrid;
