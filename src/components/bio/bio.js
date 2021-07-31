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
            fluid(maxWidth: 0, toFormat: WEBP) {
                ...GatsbyContentfulFluid
            }
        }
      }
    `
    )
    console.log(bioIcon)
    return (
        
            
            <div className="header-container">
	            <h1>Emily Kardum</h1>
	            <h3><span>journalist | media producer | social media marketer</span></h3>
	           
                </div>
                
       
    )
}

export default Bio