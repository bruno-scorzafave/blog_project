import './Newsletter.scss';

function Newsletter() {
  return (
    <div className="Newsletter container py-5 px-4 bg-secondary text-center mb-5">
        <h1 className="text-white font-weight-bold">Subscribe My Newsletter</h1>
        <p className="text-white">Subscribe and get my latest article in your inbox</p>
        <form className="form-inline justify-content-center">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Your Email" />
                <div className="input-group-append">
                    <button className="btn btn-primary" type="submit">Subscribe</button>
                </div>
                </div>
        </form>
    </div>
  );
}

export default Newsletter;