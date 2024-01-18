import React, { useEffect, useState} from 'react';

import axios from '../../axios';

function Comments({post_id}) {
    const [comments, setComments] = useState([])
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    useEffect(() => {
        axios.get(`/get_comments/${post_id}`).then((response) => {
            setComments(response.data)
            console.log(response.data)
            console.log(post_id)
        })
    }, [post_id])

    const handleSubmit = (e) => {
        e.preventDefault();
  
        axios.post('/insert/comment', {
            post_id: post_id,
            name: name,
            email:email,
            message:message
        }).then((response) => {
            console.log('response', response)
            if (response.data.success === true){
                window.location.reload()
            }
        }).catch((error) => {
            console.log('error', error)
        })
    }

    return (
        <>
        <div className="col-12 py-4">
            <h3 className="mb-4 font-weight-bold">{ comments && (comments.length === 1 ? '1 comment': comments.length + ' comments' )}</h3>
            <div className="media mb-4">
                <div className="media-body">
                    {comments && comments.map(
                        (comment) => (
                            // update date to "01 Jan 2045 at 12:00pm" format
                            // add reply
                            <>
                                <h4>{comment.name} <small><i>{comment.created_at.slice(0,10) + ' at ' + comment.created_at.slice(10,16)}</i></small></h4>
                                <p>{comment.message}</p>
                            </>
                    ))}
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
