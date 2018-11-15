import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const BlogPage = ({ data }) => (
  <Layout>
    <h1>Latest Posts</h1>
    <p>Check out our latest posts.</p>
    { data.allMarkdownRemark.edges.map(post => 
        <div key={ post.node.id }>
            <h3>{ post.node.frontmatter.title}</h3>
            <small>Posted by: { post.node.frontmatter.author } on { post.node.frontmatter.date }</small>
            <br />
            <Link to={ post.node.frontmatter.path }>Read More</Link>
            <br />
            <hr />
        </div>
    ) }
  </Layout>
)

export const pageQuery = graphql`
    query BlogIndexQuery {
            allMarkdownRemark {
              edges {
                node {
                    id
                    frontmatter {
                      path
                      title
                      date
                      author
                    }
                }
              }
            }
          }
`;

export default BlogPage
