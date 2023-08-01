import React, { useState, useEffect } from 'react'
import PostCard from '../Components/Post/PostCard';
import getPostList from '../Helpers/PostHelper';
export default function Home() {
    const [post, setPostList] = useState([])
    useEffect(() => {
        const API = 'posts?fields=id,excerpt,title,slug&tag=home';
        getPostList(API).then((res) => setPostList(res.posts))
        document.title = "Adarsh Shukla's Blog - Home Page";
    }, [])
    return (
        <>
            <h3 className='text-center'>Trending Posts</h3>
            <ul>
                {post.map((item, i) => {
                    return <PostCard key={item.ID} post={item} />
                })}
            </ul>
        </>
    )
}