/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const StyledMain = styled.main`
  max-width: 768px;
  margin: 0 auto;
`

const Layout = ({ children }) => (
  <>
    <Header />
    <StyledMain>{children}</StyledMain>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
