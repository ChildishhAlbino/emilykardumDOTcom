import React from "react"
import ArticleCard from "../article-card/article-card"
import "./article-bar.scss"

class ArticleBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = { ...props }
    }

    render() {
        const { articles, maxArticles, mobileMax, smallDesktopMax } = this.state
        const sliced = articles.slice(0, maxArticles)
        return (
            <span className="article-bar-container">
                {sliced.map((item, index) => {
                    console.log(index)
                    let className = ""
                    if (index == 0) {
                        className = "article-bar-all"
                    }
                    else if (index < mobileMax) {
                        className = "article-bar-mobile"
                    }
                    else if (index < smallDesktopMax) {
                        className = "article-bar-small-desktop"
                    }
                    else {
                        className = "article-bar-desktop"
                    }
                    console.log(className)
                    return <ArticleCard className={className} key={item.id} article={item}></ArticleCard>
                })}
            </span>
        )
    }
}

ArticleBar.defaultProps = {
    articles: [],
    maxArticles: 3,
    mobileMax: 1,
    smallDesktopMax: 2,
};

export default ArticleBar

