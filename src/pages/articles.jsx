/* eslint-disable multiline-ternary */
import React, { useState, useEffect } from 'react'
import customData from './financial-market-news-blog-project.json'
import Card from '../components/Card'
import firebaseConfigData from '../components/firebaseConfigData'
import { doc, setDoc, collection, getFirestore, getDocs } from 'firebase/firestore/lite'
import { initializeApp } from 'firebase/app'

const Articles = () => {
  const [data, setData] = useState([])
  const [getData, setgetData] = useState(false)

  const firebaseConfig = firebaseConfigData()
  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  async function getArticles () {
    const arts = collection(db, 'financial_blog_articles')
    const citySnapshot = await getDocs(arts)
    const artsList = citySnapshot.docs.map(doc => doc.data())
    setgetData(true)
    setData(artsList)
  }

  useEffect(() => {
    getArticles()
  }, [getData])

  useEffect(() => {
    if (!getData && data.length === 0) {
      // eslint-disable-next-line no-unused-vars
      function setAllData (customData) {
        async function setArticles (index) {
          await setDoc(doc(db, 'financial_blog_articles', '' + index + ''), customData[index])
        }
        customData.map((article, index) => setArticles(index))
      }
    }
  }, [customData])

  return (
    <div className='container'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>

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
