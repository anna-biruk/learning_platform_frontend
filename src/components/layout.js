import * as React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "./layout.css"
import { ThemeProvider } from "@mui/material/styles"
import theme from "../theme"
import { ApolloClient, ApolloProvider } from "@apollo/client"
import { typeDefs } from "../graphql/clientSchema"
import cache from "../graphql/cache"


const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache,
  typeDefs
})


const Layout = ({ children }) => {
  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <>
            <Header />
            <main>{children}</main>
          </>
        </ThemeProvider>
      </ApolloProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
