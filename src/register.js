import React from 'react'

import { Helmet } from 'react-helmet'

import './register.css'

const Register = (props) => {
  return (
    <div className="register-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="register-register">
        <div className="register-group3">
          <div className="register-group1">
            <img
              alt="Rectangle3470"
              src="/external/rectangle3470-0p9-200h.png"
              className="register-rectangle3"
            />
            <span className="register-text">
              <span>Register</span>
            </span>
          </div>
          <span className="register-text02">
            <span>WELCOME</span>
          </span>
          <div className="register-form">
            <div className="register-inputfield">
              <div className="register-frame-inputfieldbase">
                <div className="register-inputwithlabel">
                  <span className="register-text04 Body2Medium">
                    <span>Email</span>
                  </span>
                  <div className="register-input">
                    <div className="register-content">
                      <span className="register-text06 Body1Regular">
                        <span>Enter your Email</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="register-inputfield1">
              <div className="register-frame-inputfieldbase1">
                <div className="register-inputwithlabel1">
                  <span className="register-text08 Body2Medium">
                    <span>Password</span>
                  </span>
                  <div className="register-input1">
                    <div className="register-content1">
                      <span className="register-text10 TextmdNormal">
                        <span>••••••••</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="register-inputfield2">
              <div className="register-frame-inputfieldbase2">
                <div className="register-inputwithlabel2">
                  <span className="register-text12 Body2Medium">
                    <span>Contact no</span>
                  </span>
                  <div className="register-input2">
                    <div className="register-content2"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="register-inputfield3">
              <div className="register-frame-inputfieldbase3">
                <div className="register-inputwithlabel3">
                  <span className="register-text14 Body2Medium">
                    <span>Gender</span>
                  </span>
                  <div className="register-input3">
                    <div className="register-content3"></div>
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

export default Register
