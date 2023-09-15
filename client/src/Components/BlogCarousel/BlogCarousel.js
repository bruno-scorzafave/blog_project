import './BlogCarousel.scss';

function BlogCarousel() {
  return (
    <div className="BlogCarousel container p-0">
        <div id="blog-carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <h2 className="mb-3 text-white font-weight-bold">Lorem ipsum dolor sit amet</h2>
                        <div className="d-flex text-white">
                            <small className="mr-2"><i className="fa fa-calendar-alt"></i> 01-Jan-2045</small>
                            <small className="mr-2"><i className="fa fa-folder"></i> Web Design</small>
                            <small className="mr-2"><i className="fa fa-comments"></i> 15 Comments</small>
                        </div>
                        <a href="" className="btn btn-lg btn-outline-light mt-4">Read More</a>
                    </div>
                </div>
                {/*<div className="carousel-item">
                    <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <h2 className="text-white font-weight-bold">Lorem ipsum dolor sit amet</h2>
                        <div className="d-flex">
                            <small className="mr-2"><i className="fa fa-calendar-alt"></i> 01-Jan-2045</small>
                            <small className="mr-2"><i className="fa fa-folder"></i> Web Design</small>
                            <small className="mr-2"><i className="fa fa-comments"></i> 15 Comments</small>
                        </div>
                        <a href="" className="btn btn-lg btn-outline-light mt-4">Read More</a>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="img/carousel-3.jpg" alt="Image" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <h2 className="text-white font-weight-bold">Lorem ipsum dolor sit amet</h2>
                        <div className="d-flex">
                            <small className="mr-2"><i className="fa fa-calendar-alt"></i> 01-Jan-2045</small>
                            <small className="mr-2"><i className="fa fa-folder"></i> Web Design</small>
                            <small className="mr-2"><i className="fa fa-comments"></i> 15 Comments</small>
                        </div>
                        <a href="" className="btn btn-lg btn-outline-light mt-4">Read More</a>
                    </div>
                </div>*/}
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