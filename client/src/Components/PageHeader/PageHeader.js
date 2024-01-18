function PageHeader({title}) {
    return (
        <div className="container py-5 px-2 bg-primary">
            <div className="row py-5 px-4">
                <div className="col-sm-6 text-center text-md-left">
                    <h1 className="mb-3 mb-md-0 text-white text-uppercase font-weight-bold">{title}</h1>
                </div>
                <div className="col-sm-6 text-center text-md-right">
                    <div className="d-inline-flex pt-2">
                        <h4 className="m-0 text-white"><a className="text-white" href="">Home</a></h4>
                        <h4 className="m-0 text-white px-2">/</h4>
                        <h4 className="m-0 text-white">{title}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default PageHeader;
  