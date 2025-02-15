import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import tangoLogo from "../images/tango_logo.svg"
import { HeaderWrapper } from "./styles/HeaderStyles"
import Navigation from "./Navigation"

const Header = () => {
  const {
    menu: {
      edges: [{ node: menu }],
    },
  } = useStaticQuery(graphql`
    query HeaderQuery {
      menu: allWordpressWpApiMenusMenusItems(
        filter: { wordpress_id: { eq: 5 } }
      ) {
        totalCount
        edges {
          node {
            items {
              title
              url
              wordpress_children {
                title
                url
              }
            }
            name
          }
        }
      }
    }
  `)
  return (
    <HeaderWrapper>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Link to="/">
              <img src={tangoLogo} alt="My great gatsby" />
            </Link>
          </div>
          <div className="col-md-8 menu">
            <Navigation menu={menu} />
          </div>
        </div>
      </div>
    </HeaderWrapper>
  )
}

export default Header
