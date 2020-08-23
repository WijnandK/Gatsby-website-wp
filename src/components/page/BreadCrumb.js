import React from "react"
import { Link } from "gatsby"
import { BreadCrumbWrapper } from "../styles/BreadCrumbStyles"

const BreadCrumb = ({ parent }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-9 offset-lg-3">
          <BreadCrumbWrapper>
            <Link to="/">
              <span>Tango brand alliiance</span>
            </Link>
            <span className="divider"> / </span>
            {parent ? (
              <>
                <Link to={parent.link}>
                  <span
                    dangerouslySetInnerHTML={{ __html: parent.title }}
                  ></span>
                </Link>
              </>
            ) : null}
          </BreadCrumbWrapper>
        </div>
      </div>
    </div>
  )
}

export default BreadCrumb
