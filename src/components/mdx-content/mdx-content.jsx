import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import PropTypes from 'prop-types';

import "./mdx-content.scss"

class MdxContent extends React.Component {
    render() {
        const { content } = this.props
        console.log(this.props)
        return (
            <>
                {!!content && <MDXProvider components={{}} >
                    <MDXRenderer className="mdx-content">{content.body}</MDXRenderer>
                </MDXProvider>}
            </>
        )
    }
}

MdxContent.propTypes = {
    content: PropTypes.object,
}

MdxContent.defaultProps = {
    content: null
}

export default MdxContent

