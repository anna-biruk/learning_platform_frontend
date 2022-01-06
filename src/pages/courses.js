import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Grid } from "@mui/material"
import { makeStyles } from "@mui/styles"
import CoursesMenu from "../components/CoursesMenuByTechnologies/CoursesMenuByTechnologies"
import CoursesListByLevel from "../components/CoursesListByLevel/CoursesListByLevel"
import FullCourseDescription from "../components/FullCourseDescription/FullCourseDescription"

const useStyles = makeStyles(theme => ({
  container: {
    // TODO: use theme
    backgroundColor: "#fef7ec",
  },
  containerByLevel: {
    // TODO: use theme
    backgroundColor: "#ffd984",
    borderRadius: 30,
    padding: 20,
  },
}))
const CoursesPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <Seo title="Courses page" />
      <Grid container direction="row" className={classes.container}>
        <Grid item xs={2}>
          <CoursesMenu />
        </Grid>
        <Grid item xs={4} className={classes.containerByLevel}>
          <CoursesListByLevel />
        </Grid>
        <Grid item xs={6}>
          <FullCourseDescription />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default CoursesPage
