/* eslint-disable operator-linebreak */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getFirestore, getDocs } from 'firebase/firestore/lite'
import { initializeApp } from 'firebase/app'
import firebaseConfigData from '../components/firebaseConfigData'

const DetailPage = (props) => {
  const [data, setData] = useState([])
  const [article, setArticle] = useState([])
  const [sectionStyle, setSectionStyle] = useState({})

  const firebaseConfig = firebaseConfigData()
  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  async function getArticles () {
    const arts = collection(db, 'financial_blog_articles')
    const citySnapshot = await getDocs(arts)
    const artsList = citySnapshot.docs.map(doc => doc.data())
    setData(artsList)
    return artsList
  }
  useEffect(() => {
    getArticles()
  }, [])

  const articleParams = useParams()

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
       {article.title ?
       <>
          <h1>{article.title}</h1>
          <div className='img-fluid' style={ sectionStyle }></div>
          <div className='content'>{article.description}</div>
          <div className='comment'>
              <h2>Experts Comment</h2>
              <div>{article.expertComment}</div>
          </div>
          </>
         :
        <div>Loading...</div>}
    </div>
  )
}

export default DetailPage
