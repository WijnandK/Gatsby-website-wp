import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import ArchiveSidebar from "../components/archive/ArchiveSidebar"
import BreadCrumb from "../components/page/BreadCrumb"
import Pagination from "../components/archive/Pagination"

import { PageContent, StyledH2 } from "./styles/archiveStyles"

const archiveTemplate = ({
  data: { file, allWordpressPost },
  pageContext: {
    catId,
    catName,
    catSlug,
    categories,
    humanPageNumber,
    numberOfPages,
  },
}) => {
  return (
    <Layout>
      <BreadCrumb
        parent={{
          link: "/trends/alla-trendspaningar",
          title: "trends",
        }}
      />

      <div className="container">
        <div className="row" style={{ marginBottom: "0" }}>
          <ArchiveSidebar catId={catId} categories={categories} />
          <PageContent className="col-lg-9">
            <h1 dangerouslySetInnerHTML={{ __html: catName }} />
            {allWordpressPost.edges.map(post => (
              <article key={post.node.id} className="entry-content">
                <Link to={`/trends/${post.node.slug}`}>
                  <StyledH2
                    dangerouslySetInnerHTML={{ __html: post.node.title }}
                  />
                </Link>
              </article>
            ))}
            <Pagination
              catSlug={catSlug}
              page={humanPageNumber}
              totalPages={numberOfPages}
            />
          </PageContent>
        </div>
      </div>
    </Layout>
  )
}

export default archiveTemplate

export const pageQuery = graphql`
  query($catId: String!, $skip: Int!, $limit: Int!) {
    allWordpressPost(
      filter: { categories: { elemMatch: { id: { eq: $catId } } } }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "DD, MMM, YYYY")
        }
      }
    }
  }
`
