import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'

const Home = ({ data }) => {
  const exhibits = data.allMdx.nodes

  return (
    <div>
      <h1>Museum</h1>

      <p>This is the museum website. Check out our exhibits</p>

      {exhibits.map(exhibit => {
        const {
          id,
          frontmatter: { artist, cover, title, slug },
          excerpt,
        } = exhibit

        return (
          <Card key={id} className="exhibit">
            <GatsbyImage image={getImage(cover)} className="exhibit-img" />

            <div>
              <h2>{title}</h2>
              <h4>{artist}</h4>
              <p>{excerpt}</p>
              <Link to={slug}>More &rarr;</Link>
            </div>
          </Card>
        )
      })}

    </div>
  )
}

const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem auto 2rem;;
  padding: 1rem;

  .exhibit-img {
    width: 200px;
    margin-right: 2rem;
  }
`


export const query = graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          artist
          slug
          title
          cover {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
        id
        excerpt
      }
    }
  }
`

export default Home
