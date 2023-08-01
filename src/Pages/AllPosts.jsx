import React, { useState, useEffect } from 'react'
import PostCard from '../Components/Post/PostCard';
import getPostList from '../Helpers/PostHelper';
export default function AllPosts() {
    const [post, setPostList] = useState([])
    useEffect(() => {
        const API = 'posts?fields=id,excerpt,title,slug,tags';
        getPostList(API).then((res) => setPostList(res.posts))
        document.title = "Adarsh Shukla's Blog - Home Page";
    }, [])
    return (
        <>
            <h3 className='text-center'>Trending Posts</h3>
            <ul>
                {post.map((item, i) => {
                   if(!item.tags.hasOwnProperty('page')) return <PostCard key={item.ID} post={item} />
                })}
            </ul>
        </>
    )
}