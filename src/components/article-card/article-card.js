import React from 'react';
import { Link } from "gatsby"
import { FaBookOpen } from 'react-icons/fa'
import './article-card.scss';
import Img from "gatsby-image"


const ArticleCard = ({ className, article }) => {
    return (
        <div key={article.id} className={"article-card-container " + className}>
            <div className={`article-card-wrapper landscape-article`}>
                <div className="article-header">
                    <Link to={article.slug}><h5>{article.title}</h5></Link>
                    {/* <h6>{article.subtitle}</h6> */}
                </div>
                {article.thumbnail === null && (<div className="article-icon"><h1><FaBookOpen></FaBookOpen></h1></div>)}
                {article.thumbnail !== null && (
                    <div className={`article-image-container`}>
                        <div
                            style={{ "backgroundImage": `url(${article.thumbnail.fluid.src})` }}
                            className="article-image-blur"
                        />
                        <div className="article-image landscape-article">
                            <div>
                                <Img
                                    fluid={article.thumbnail.fluid}
                                    // THIS IS HOW YOU FIXED THE IMAGES
                                    imgStyle={{ objectFit: 'contain' }}
                                />
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default ArticleCard