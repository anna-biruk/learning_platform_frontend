import * as React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "./layout.css"
import { ThemeProvider } from "@mui/material/styles"
import theme from "../theme"

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <Header />
          <main>{children}</main>
        </>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
