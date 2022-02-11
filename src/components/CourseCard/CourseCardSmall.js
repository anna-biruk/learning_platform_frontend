import React from "react"
import { Grid, Typography } from "@mui/material"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@mui/styles"
import { setSelectedCourse } from "../../graphql/cache"

const useStyles = makeStyles(theme => ({
  image: {
    borderRadius: 10,
    marginBottom: 0
  },
  container: {
    backgroundColor: "#ffffffad",
    borderRadius: 30,
    padding: 10,
    paddingTop: 8,
    "&:hover": {
      backgroundColor: "#ffffff6b"
    }
  }
}))

const CourseCardSmall = ({ courseItem }) => {
  const classes = useStyles()
  const fileResponse = useStaticQuery(graphql`
      query {
          file(name: { eq: "react-dark" }) {
              publicURL
          }
      }
  `)

  const handleClick = () => {
    setSelectedCourse({ ...courseItem, __typename: undefined })
  }

  return (
    <Grid
      container
      direction="row"
      spacing={1}
      justifyContent="center"
      className={classes.container}
      onClick={handleClick}
    >
      <Grid item xs={4}>
        <img
          className={classes.image}
          src={fileResponse?.file?.publicURL}
          alt="technology"
        />
      </Grid>
      <Grid item xs={8}>
        <Typography variant="h5">{courseItem.title}</Typography>
        <Typography variant="subtitle3">{courseItem.description}</Typography>
      </Grid>
    </Grid>
  )
}

export default CourseCardSmall
