import React, { useEffect, useState} from 'react';

import axios from '../../axios';

function Comments() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
  
        await axios.post('/insert/comment', {
            name: name,
            email:email,
            message:message
        })
    }

    return (
        <>
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
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="name">Name *</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        onChange={(e) => {setName(e.target.value)}}
                    />
                </div>
                <div className="form-group">
                    <label for="email">Email *</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        onChange={(e) => {setEmail(e.target.value)}}
                    />
                </div>

                <div className="form-group">
                    <label for="message">Message *</label>
                    <textarea
                        id="message"
                        cols="30"
                        rows="5"
                        className="form-control"
                        onChange={(e) => {setMessage(e.target.value)}}
                    ></textarea>
                </div>
                <div className="form-group">
                    <input type="submit" value="Leave Comment" className="btn btn-primary" />
                </div>
            </form>
        </div>
        </>
    );
}

export default Comments;
