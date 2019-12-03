import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledCase = styled.article``

const Case = ({ title, url, imageData, children }) => {
  return (
    <StyledCase>
      <h3>{title}</h3>
      <div>
        <a href={url} target="_blank" rel="noopener noreferrer">
          Ga naar de website
        </a>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Img fluid={imageData.childImageSharp.fluid} />
        </a>
      </div>
      <div>{children}</div>
    </StyledCase>
  )
}

Case.propTypes = {
  title: PropTypes.node.isRequired,
  url: PropTypes.node.isRequired,
  imageData: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}

export default Case
