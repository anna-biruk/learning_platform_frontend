import React from "react"
import CourseCard from "../CourseCard/CourseCard"
import { Grid, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { useQuery } from "@apollo/client"
import { getCoursesQuery } from "../../graphql/courses.js"

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "#ffd984",
    borderRadius: 30,
    maxWidth: 420,
    paddingBottom: 20
  }
}))


const CourseCardsList = () => {
  const classes = useStyles()
  const coursesResponse = useQuery(getCoursesQuery)
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      className={classes.container}
    >
      <Grid item>
        <Typography variant="h4">Best of the week</Typography>
      </Grid>

      {coursesResponse?.data?.courses?.map(item => (
        <Grid item>
          <CourseCard courseItem={item} />
        </Grid>
      ))}
    </Grid>
  )
}

export default CourseCardsList
