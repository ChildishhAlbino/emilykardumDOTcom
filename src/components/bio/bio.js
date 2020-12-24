import React from 'react'
import './bio.scss'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Bio = () => {
    const { bioIcon } = useStaticQuery(
        graphql`
      query {
        bioIcon: contentfulAsset(title: {eq: "BIO_ICON"}) {
            contentful_id
            fluid(maxWidth: 300, toFormat: WEBP) {
                ...GatsbyContentfulFluid
            }
        }
      }
    `
    )
    console.log(bioIcon)
    return (
        <div className="bio-wrapper">
            <div className="bio-container">
                <h1>Hi! I'm Emily.</h1>
                <section>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto saepe corrupti fuga! Quae ducimus dolore voluptate soluta expedita sequi fugit? Delectus aperiam libero magni perferendis cumque consectetur dicta facilis magnam incidunt, architecto earum neque aut nam eum quisquam debitis laboriosam ab rerum laudantium ut! Repellendus maiores quibusdam nobis sed doloremque!
                </p>
                </section>
            </div>
            <div className="bio-image-wrapper">
                <Img
                    fluid={bioIcon?.fluid}
                    imgStyle={{ objectFit: 'contain' }}
                />
            </div>
        </div>
    )
}

export default Bio