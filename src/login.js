import React from 'react'

import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="login-login">
        <img
          alt="IMAGEreallygreasite22002"
          src="/external/imagereallygreasite22002-cvlq-1000h.png"
          className="login-imag-ereallygreasite2"
        />
        <div className="login-group3">
          <div className="login-group1">
            <span className="login-text">
              <span>GO</span>
            </span>
          </div>
          <span className="login-text02">
            <span>WELCOME</span>
          </span>
          <div className="login-form">
            <div className="login-inputfield">
              <div className="login-frame-inputfieldbase">
                <div className="login-inputwithlabel">
                  <span className="login-text04 Body2Medium">
                    <span>ID</span>
                  </span>
                  <div className="login-input">
                    <div className="login-content">
                      <span className="login-text06 Body1Regular">
                        <span>Enter your ID</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="login-inputfield1">
              <div className="login-frame-inputfieldbase1">
                <div className="login-inputwithlabel1">
                  <span className="login-text08 Body2Medium">
                    <span>Password</span>
                  </span>
                  <div className="login-input1">
                    <div className="login-content1">
                      <span className="login-text10 TextmdNormal">
                        <span>••••••••</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
