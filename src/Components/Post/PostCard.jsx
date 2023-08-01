import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
export default function PostCard(props) {

    const [excerpt, setExcerpt] = useState({ __html: "" });

    useEffect(() => {
        setExcerpt({ __html: props.post.excerpt });
    }, []);

    return (
        <div className="card mt-4">
            <div className="card-body">
                <h5 className="card-title">{props.post.title}</h5>
                <p className="card-text" dangerouslySetInnerHTML={excerpt}></p>
                <Link to={`/post/${props.post.slug}`} className="btn btn-dark bg-dark bg-gradient" >See More...</Link>
            </div>
        </div>
    )
}