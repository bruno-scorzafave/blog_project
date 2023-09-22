import PageHeader from '../PageHeader/PageHeader'
import PostIcons from '../PostIcons/PostIcons';

function PostDetail({post}) {
  return (
    <>
    <PageHeader title={decodeURI(post.title)} />
    <div className="container py-5 px-2 bg-white">
        <div className="row px-4">
            <div className="col-12">
                <img className="img-fluid mb-4" src={process.env.PUBLIC_URL + "/img/detail.jpg"} alt="Image"/>
                <h2 className="mb-3 font-weight-bold">Nonumy ipsum takimata et sanct</h2>
                <PostIcons tag={'p'} />
                <p>Clita duo sadipscing amet ea ut kasd amet dolore, sed erat at dolore vero tempor et sit amet, amet amet elitr et consetetur ea duo. Gubergren tempor rebum clita at sit diam. Ea sadipscing voluptua et sit diam diam sed, gubergren magna ipsum lorem clita dolores nonumy dolor. Gubergren duo invidunt elitr amet labore dolores justo sanctus nonumy. Accusam diam tempor at ea clita dolores dolor et ipsum, dolor voluptua consetetur gubergren sit, no consetetur kasd vero invidunt clita dolore elitr eos, accusam amet et labore sed sadipscing accusam labore dolores. Eirmod no lorem sed dolor nonumy consetetur tempor sed.</p>
                <h3 className="mb-3 font-weight-bold">Est dolor lorem et ea</h3>
                <img className="w-50 float-left me-4 mb-3" src={process.env.PUBLIC_URL + "/img/blog-1.jpg"} alt="Image"/>
                <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd clita ipsum et. Takimata kasd diam justo est eos erat aliquyam et ut. Ea sed sadipscing no justo et eos labore, gubergren ipsum magna dolor lorem dolore, elitr aliquyam takimata sea kasd dolores diam, amet et est accusam labore eirmod vero et voluptua. Amet labore clita duo et no. Rebum voluptua magna eos magna, justo gubergren labore sit voluptua eos. Dolores et no stet magna et gubergren amet dolor sit, lorem dolore est vero et.</p>
            </div>
            <div className="col-12 py-4">
                <a href="" className="btn btn-sm btn-outline-primary mb-1 me-1">Lorem</a>
                <a href="" className="btn btn-sm btn-outline-primary mb-1 me-1">Lorem</a>
                <a href="" className="btn btn-sm btn-outline-primary mb-1 me-1">Lorem</a>
                <a href="" className="btn btn-sm btn-outline-primary mb-1 me-1">Lorem</a>
                <a href="" className="btn btn-sm btn-outline-primary mb-1 me-1">Lorem</a>
                <a href="" className="btn btn-sm btn-outline-primary mb-1 me-1">Lorem</a>
                <a href="" className="btn btn-sm btn-outline-primary mb-1 me-1">Lorem</a>
            </div>
            <div className="col-12 py-4">
                <div className="btn-group btn-group-lg w-100">
                    <button type="button" className="btn btn-outline-primary"><i className="fa fa-angle-left me-2"></i> Previous</button>
                    <button type="button" className="btn btn-outline-primary">Next<i className="fa fa-angle-right ms-2"></i></button>
                </div> 
            </div>
            <div className="col-12 py-4">
                <h3 className="mb-4 font-weight-bold">3 Comments</h3>
                <div className="media mb-4">
                    <img src={process.env.PUBLIC_URL + "/img/user.jpg"} alt="Image" className="me-3 mt-1 rounded-circle" style={{width: "60px"}}/>
                    <div className="media-body">
                        <h4>John Doe <small><i>01 Jan 2045 at 12:00pm</i></small></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <button className="btn btn-sm btn-light">Reply</button>
                    </div>
                </div>
                <div className="media mb-4">
                    <img src={process.env.PUBLIC_URL + "/img/user.jpg"} alt="Image" className="me-3 mt-1 rounded-circle" style={{width: "60px"}}/>
                    <div className="media-body">
                        <h4>John Doe <small><i>01 Jan 2045 at 12:00pm</i></small></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <button className="btn btn-sm btn-light">Reply</button>
                        <div className="media mt-4">
                            <img src={process.env.PUBLIC_URL + "/img/user.jpg"} alt="Image" className="me-3 mt-1 rounded-circle" style={{width: "60px"}}/>
                            <div className="media-body">
                                <h4>John Doe <small><i>01 Jan 2045 at 12:00pm</i></small></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <button className="btn btn-sm btn-light">Reply</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <h3 className="mb-4 font-weight-bold">Leave a comment</h3>
                <form>
                    <div className="form-group">
                        <label for="name">Name *</label>
                        <input type="text" className="form-control" id="name"/>
                    </div>
                    <div className="form-group">
                        <label for="email">Email *</label>
                        <input type="email" className="form-control" id="email"/>
                    </div>
                    <div className="form-group">
                        <label for="website">Website</label>
                        <input type="url" className="form-control" id="website"/>
                    </div>

                    <div className="form-group">
                        <label for="message">Message *</label>
                        <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Leave Comment" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  );
}

export default PostDetail;