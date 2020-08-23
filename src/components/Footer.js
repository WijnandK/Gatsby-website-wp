import React from "react"

import tangoFB from "../images/tango-facebook-icon.svg"
import tangoIG from "../images/tango-instagram-icon.svg"
import tangoLI from "../images/tango-linkedin-icon.svg"

import { FooterWrapper } from "./styles/FooterStyles"

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="whiteText">Contact</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h3>Wijnie Js</h3>
            <p className="tango-contact">
              <a href="mailto:anders@test.com">testme@test.com</a>
            </p>
            <p className="tango-contact">(0)61212t</p>
            <span className="social">
              <img src={tangoLI} alt="tango-li" />
            </span>
          </div>
          <div className="col-md-4">
            <h3>Wijnie Js</h3>
            <p className="tango-contact">
              <a href="mailto:anders@test.com">testme@test.com</a>
            </p>
            <p className="tango-contact">(0)61212t</p>
            <span className="social">
              <img src={tangoFB} alt="tango-li" />
            </span>
          </div>
          <div className="col-md-4">
            <h3>Wijnie Js</h3>
            <p className="tango-contact">
              <a href="mailto:anders@test.com">testme@test.com</a>
            </p>
            <p className="tango-contact">(0)61212t</p>
            <span className="social">
              <img src={tangoIG} alt="tango-li" />
            </span>
          </div>
        </div>
      </div>
    </FooterWrapper>
  )
}

export default Footer
