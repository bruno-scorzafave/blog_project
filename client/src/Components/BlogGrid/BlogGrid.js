import { useState } from 'react';

import PageHeader from '../PageHeader/PageHeader'
import BlogPost from '../BlogPost/BlogPost';
import BlogPost2 from '../BlogPost2/BlogPost2';

function blogPosts() {
    return (
        [
        <BlogPost />,
        <BlogPost />,
        <BlogPost />,
        <BlogPost2 />,
        <BlogPost2 />,
        <BlogPost />,
        <BlogPost />,
        <BlogPost2 />
        ]
    )
}

function BlogGrid() {
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(3)
    const pageNumbers = []

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = blogPosts().slice(indexOfFirstPost, indexOfLastPost)
    const lastPage = Math.ceil(blogPosts().length / postsPerPage)

    for (let i = 1; i <= lastPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <>
        <PageHeader title={"My Blog"}/>
        {currentPosts}
        <div className="row px-3 pb-5 bg-white">
            <nav aria-label="Page navigation">
                <ul className="pagination m-0 mx-3">
                    <li id='prev' className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button className="page-link" aria-label="Previous" disabled={currentPage === 1} onClick={() => {setCurrentPage(currentPage - 1)}}>
                            <span aria-hidden="true">«</span>
                            <span className="sr-only">Previous</span>
                        </button>
                    </li>
                    {pageNumbers.map((number) => (
                        <li id={number} className={`page-item ${currentPage === number ? 'active' : ''}`}><button className="page-link">{number}</button></li>
                    ))}
                    <li id='next' className={`page-item ${currentPage === lastPage ? 'disabled' : ''}`}>
                        <button className={"page-link"} disabled={currentPage === lastPage} aria-label="Next" onClick={() => {setCurrentPage(currentPage + 1)}}>
                            <span aria-hidden="true">»</span>
                            <span className="sr-only">Next</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
        </>
    );
}
  
export default BlogGrid;
