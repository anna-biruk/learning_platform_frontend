import React from "react"
import { Button, Grid, IconButton, Rating, Typography } from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"
import { makeStyles } from "@mui/styles"
import LanguageIcon from "@mui/icons-material/Language"
import dayjs from "dayjs"
import { useQuery } from "@apollo/client"
import { getSelectedCourseQuery } from "../../graphql/courses"

const useStyles = makeStyles(theme => ({
  container: {
    paddingLeft: 26
  },
  image: {
    borderRadius: 40,
    padding: "16px 16px 0px 0px",
    maxHeight: 250,
    width: "100%",
    objectFit: "cover",
    marginBottom: 0
  }
}))

const data = [{
  title: "100% Online Course",
  description: "Lorem ipsum dolor"
}, {
  title: "100% Online Course",
  description: "Lorem ipsum dolor"
}, {
  title: "100% Online Course",
  description: "Lorem ipsum dolor"
}, {
  title: "100% Online Course",
  description: "Lorem ipsum dolor"
}
]

const FullCourseDescription = ({ courseItem }) => {
  const classes = useStyles()
  const [value] = React.useState(5)
  const fileResponse = useStaticQuery(graphql`
      query {
          file(name: { eq: "react-dark" }) {
              publicURL
          }
      }
  `)

  const course = useQuery(getSelectedCourseQuery)

  return (
    <Grid
      container
      direction="column"
      spacing={2}
      className={classes.container}
    >
      <Grid item xs={1}>
        <img
          className={classes.image}
          src={fileResponse?.file?.publicURL}
          alt="technology"
        />
      </Grid>
      <Grid item xs={1}>
        <Rating name="read-only" value={value} readOnly />
      </Grid>
      <Grid item xs={1}>
        <Typography variant="h4">
          {course.data?.selectedCourse?.title}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography variant="subtitle4">
          {course.data?.selectedCourse?.description}
        </Typography>
      </Grid>
      <Grid item container xs={2} direction="row">
        <Grid item xs={3}>
          <Button variant="contained">Enroll for free</Button>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="subtitle3">
            Entroll to start your 7-day full access free trial
          </Typography>
          <Typography variant="subtitle2">
            Starts {dayjs().format(" MMM DD,YYYY")}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="row"
        alignItems="center"
        spacing={2}
        xs={3}
      >
        {data.map((item) => {
          return (
            <Grid item container xs={6} spacing={1}>
              <Grid item>
                <IconButton variant="secondary">
                  <LanguageIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <Typography variant="h5">{item.title}</Typography>
                <Typography variant="subtitle2">{item.description}</Typography>
              </Grid>
            </Grid>
          )
        })}
      </Grid>
      <Grid item>
        <Typography variant="subtitle4">
          {course.data?.selectedCourse?.fullDescription}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default FullCourseDescription
