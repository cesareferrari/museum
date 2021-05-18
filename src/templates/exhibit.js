import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import {GatsbyImage, getImage} from "gatsby-plugin-image"

const Exhibit = ({ data }) => {
  const {
    id,
    frontmatter: { artist, title, cover },
    body,
  } = data.mdx

  return (
    <>
      <GatsbyImage image={getImage(cover)} />

      <h2>{title}</h2>
      <h4>{artist}</h4>

      <MDXRenderer>{body}</MDXRenderer>

      <Link to="/">Back to Home</Link>
    </>
  )
}

export const query = graphql`
  query GetExhibit($id: String!) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        slug
        artist
        title
        cover {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`

export default Exhibit
