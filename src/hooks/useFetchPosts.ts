import React, { useState, useEffect } from 'react'
import type { Post } from '../types'
import { getPosts } from '../api'

const useFetchPosts = () => {
    const [posts, setPosts] = useState<Post[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const fetchPosts = async () => {
        setIsLoading(true)
        setError(null)
        try{
            const posts = await getPosts()
            setPosts(posts)
        } catch(error){
            setError("Failed to load posts")
            console.log(error)
        } finally{
            setIsLoading(false)
        }
    }
    
    useEffect(() => {
        fetchPosts()
    }, [])

  return {
    posts, isLoading, error
  }
}

export default useFetchPosts
