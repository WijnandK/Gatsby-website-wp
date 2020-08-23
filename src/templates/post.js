import React from "react"
import { graphql } from "gatsby"

import styled from "styled-components"
import Layout from "../components/layout"

// import Breadcrumb from "../components/BreadCrumb"
import PostSidebar from "../components/post/PostSidebar"

const PostContent = styled.article`
  margin: 20px 0 0 0;
`

const postTemplate = ({ data }) => {
  return (
    <Layout>
      <div className="container">
        <div className="row" style={{ marginBottom: "40px" }}>
          <PostSidebar
            date={data.post.date}
            author={data.post.author.name}
            categories={data.post.categories}
          />
          <PostContent className="col-lg-9">
            <h1 dangerouslySetInnerHTML={{ __html: data.post.title }} />
            <div dangerouslySetInnerHTML={{ __html: data.post.content }} />
          </PostContent>
        </div>
      </div>
    </Layout>
  )
}

export default postTemplate

export const pageQuery = graphql`
  query($id: String!) {
    post: wordpressPost(id: { eq: $id }) {
      title
      content
      author {
        name
      }
      date(formatString: "DD, MMM, YYYY")
      categories {
        name
        id
        slug
      }
    }
  }
`
