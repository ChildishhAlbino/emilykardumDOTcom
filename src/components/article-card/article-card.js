import React from 'react';
import { Link } from "gatsby"
import { FaBookOpen } from 'react-icons/fa'
import './article-card.scss';


const ArticleCard = ({ article }) => {
    return (
        <div key={article.id} className="carousel-section article-card-wrapper">
            <div className="article-header">
                <Link to={article.slug}><h2>{article.title}</h2></Link>
                <h3>{article.subtitle}</h3>
            </div>
            {article.thumbnail === undefined && (<div className="article-icon"><h1><FaBookOpen></FaBookOpen></h1></div>)}
        </div>
    )
}

export default ArticleCard