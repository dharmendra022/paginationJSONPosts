import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PaginationMian from './PaginationMian'
import Posts from './Posts'


const PagiExample = () => {

    const[post,setPost]=useState([])
    // for pagination
    const[loading,setLoading]=useState(false)
    const[currentPage,setCurrentPage]=useState(1)
    const[postPerPage,setPostPerPage]=useState(10)

    // Get current posts
    const indexOfLastPost=currentPage*postPerPage;
    const indexOfFirstPost=indexOfLastPost-postPerPage;
    const currentPost=post.slice(indexOfFirstPost,indexOfLastPost)


    const GetData=async ()=>{
        setLoading(true)
        await axios.get('https://jsonplaceholder.typicode.com/comments').then((res)=>{
            console.log(res)
            setPost(res.data)
            // setLoading(false)

        }).catch((err)=>{
            console.log(err)
        })
        setLoading(false)

    }

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)

        })
        GetData()
    },[])

    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <>
       
        <Posts post={currentPost} loading={loading}/>
        <PaginationMian postPerPage={postPerPage} totalPost={post.length}
        paginate={paginate}/>
           


        </>
    )
}

export default PagiExample
