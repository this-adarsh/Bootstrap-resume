import React, { useState, useEffect } from 'react'
import {useParams } from "react-router-dom";
import getPostList from '../Helpers/PostHelper';
import NoPage from './NoPage';
export default function Post() {
    const [excerpt, setExcerpt] = useState({ __html: "" });
    const [post, setPost] = useState([])
    const [is404, setIs404] = useState(false)
    let { slug } = useParams()
    useEffect(() => {
        const API = 'posts/slug:' + slug + '?fields=id,content,title';
        getPostList(API).then((res) => {
            if (res.hasOwnProperty('error')) setIs404(true)
            else {
                setPost(res)
                document.title = "Adarsh Shukla's Blog"+' - '+ res.title;
                setExcerpt({ __html: res.content });
            }
        })
    }, []);

    if (is404) return (<NoPage />)
    else return (
        <div className="card mt-5">
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text" dangerouslySetInnerHTML={excerpt}></p>
            </div>
        </div>
    )
}