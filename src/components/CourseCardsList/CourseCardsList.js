import React from "react"
import CourseCard from "../CourseCard/CourseCard"
import { Grid, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "#ffd984",
    borderRadius: 30,
    maxWidth: 420,
    paddingBottom:20
  },
}))
const data = [
  { title: "HTML/CSS", technologies: "HTML,CSS3,SCCS", price: 40,sellPrice:10, },
  { title: "JavaScript", technologies: "JavaScript", price: 40, sellPrice:10, },
  { title: "React", technologies: "React", price: 40, sellPrice:10, },
]

const CourseCardsList = () => {
  const classes = useStyles()
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
      {data.map(item => (
        <Grid item>
          <CourseCard courseItem={item} />
        </Grid>
      ))}
    </Grid>
  )
}

export default CourseCardsList
