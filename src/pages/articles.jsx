/* eslint-disable react/jsx-key */
/* eslint-disable multiline-ternary */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import customData from './financial-market-news-blog-project.json'
import Card from '../components/Card'

const Articles = () => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([])

  // const url = 'financial-market-news-blog-project.json'
  const url = 'https://jsonplaceholder.typicode.com/posts?_limit=15'

  const fetchPosts = async () => {
    try {
      return await axios.get(url)
    } catch (error) {
      console.error(error)
    }
  }

  // eslint-disable-next-line no-unused-vars
  const postsData = async () => {
    const posts = await fetchPosts()
    if (posts.data) {
      setData(posts.data)
    }
  }

  /* useEffect(() => {
    postsData()
  }, [url]) */

  useEffect(() => {
    setData(customData)
  }, [url])

  return (
    <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

        {data.length > 0 ? data.map(({ title, imageUrl }, index) => (

        <Card
        title={title}
        imageUrl={imageUrl}
        index={index}
        key={index}
        />

        )) : <div>Loading...</div>}

        </div>
    </div>
  )
}

export default Articles
