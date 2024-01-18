import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import React, { useEffect, useState} from 'react';

import axios from '../../axios';

import './BlogCarousel.scss';

function BlogCarousel() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('/get_posts/brunoscorza@hotmail.com').then((response) => {
            setPosts(response.data);
        })
    }, [])

    return (
        <div className="BlogCarousel container p-0">
            <div id="blog-carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    { posts && Object.entries(posts).slice(0,-2).map((index, post_id, post) => (
                        <div className={post_id + 1 === 1 ? 'carousel-item active' : 'carousel-item'}>
                            <img className="BlogCarousel_Image w-100" src={`img/carousel-${post_id + 1}.jpg`} alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <h2 className="mb-3 text-white font-weight-bold">{post[post_id][1].title}</h2>
                                <div className="d-flex text-white px-5">
                                    <small className="me-2"><FontAwesomeIcon icon={solid('calendar-days')} /> {post[post_id][1].created_at.slice(0,10)}</small>
                                    <small className="me-2"><FontAwesomeIcon icon={solid('folder')} /> {post[post_id][1].slug}</small>
                                </div>
                                <a href={"/post/" + post[post_id][1].title} className="btn btn-lg btn-outline-light mt-4">Read More</a>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#blog-carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#blog-carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default BlogCarousel;