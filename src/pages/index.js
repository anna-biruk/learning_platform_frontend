import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CourseCardsList from "../components/CourseCardsList/CourseCardsList"
import { Grid } from "@mui/material"
import Introduction from "../components/Introduction/Introduction"
import { makeStyles } from "@mui/styles"
import Footer from "../components/Footer/Footer"

const useStyles = makeStyles(theme => ({
  container: {
    // TODO: use theme
    backgroundColor: "#fef7ec",
  },
  rightItem: {
    paddingTop: 16,
  },
  footerItem: {
    marginTop: "70px !important",
  },
}))

const IndexPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <Seo title="Home Page" />
      <Grid container className={classes.container}>
        <Grid item xs={8} md={9}>
          <Introduction />
          <Footer className={classes.footerItem} />
        </Grid>
        <Grid item xs={4} md={3} className={classes.rightItem}>
          <CourseCardsList />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default IndexPage
