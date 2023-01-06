/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable multiline-ternary */
/* import React, { useState, useEffect } from 'react'
import axios from 'axios'
import customData from './financial-market-news-blog-project.json'
import Card from '../components/Card' */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import customData from './financial-market-news-blog-project.json'

const DetailPage = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([])
  const [articleId, setArticleId] = useState([])
  const [article, setArticle] = useState([])
  const [sectionStyle, setSectionStyle] = useState({})

  const articleParams = useParams()

  useEffect(() => {
    setData(customData)
  }, [])

  useEffect(() => {
    if (data.length > 0) {
      setArticle(data[Number(articleParams.articleId)])
    }
  }, [data])

  useEffect(() => {
    if (article) {
      setSectionStyle({ backgroundImage: 'url(' + article.imageUrl + ')' })
    }
  }, [article])

  return (
    <div className='container'>
      <h1>{article.title}</h1>
      <div className='img-fluid' style={ sectionStyle }></div>
      <div className='content'>{article.description}</div>
      <div className='comment'>
        <h2>Experts Comment</h2>
        <div>{article.expertComment}</div>
      </div>
    </div>
  )
}

export default DetailPage
