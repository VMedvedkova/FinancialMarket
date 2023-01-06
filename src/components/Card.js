/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import Modal from "./Modal";

const Card = props => {
  const [sectionStyle, setSectionStyle] = useState({})
  useEffect(() => {
    setSectionStyle({ backgroundImage: 'url(' + props.imageUrl + ')' })
  }, [])

  return (
    <div className="col">
        <div className="card">
            <div className='card-img' style={ sectionStyle }></div>
            <div className="card-body">
                <p className="card-text">
                <Link className="link" to={'/article/' + props.index}>{props.title}</Link>
                </p>
                <div className="d-flex justify-content-between align-items-center">
                <Link className="link" to={'/article/' + props.index}>
                    {'https://www.reuters.com/article/' + props.index}
                </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card
