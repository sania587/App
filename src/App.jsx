import React from 'react'

import { Helmet } from 'react-helmet'

import './main-page.css'

const MainPage = (props) => {
  return (
    <div className="main-page-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="main-page-main-page">
        <div className="main-page-group1">
          <span className="main-page-text">
            <span>Login</span>
          </span>
        </div>
        <div className="main-page-group2">
          <span className="main-page-text2">
            <span>Register</span>
            <br></br>
          </span>
        </div>
      </div>
      <img
        alt="IMAGEreallygreasite12002"
        src="/external/imagereallygreasite12002-uhw-1400w.png"
        className="main-page-imag-ereallygreasite1"
      />
    </div>
  )
}

export default MainPage
