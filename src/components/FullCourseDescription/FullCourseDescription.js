import React from "react"
import { Grid, Typography, Rating, IconButton, Button } from "@mui/material"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@mui/styles"
import LanguageIcon from "@mui/icons-material/Language"
import dayjs from "dayjs"

const useStyles = makeStyles(theme => ({
  container: {
    paddingLeft: 26,
  },
  image: {
    borderRadius: 40,
    padding: "16px 16px 0px 0px",
    maxHeight: 250,
    width: "100%",
    objectFit: "cover",
    marginBottom: 0,
  },
}))

const FullCourseDescription = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(5)
  const fileResponse = useStaticQuery(graphql`
    query {
      file(name: { eq: "react-dark" }) {
        publicURL
      }
    }
  `)
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
          The Complete React Developer Course
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography variant="subtitle4">
          Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux,
          React Routing, Animations, Next.js and way more!
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
        <Grid item container xs={6} spacing={1}>
          <Grid item>
            <IconButton variant="secondary">
              <LanguageIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h5">100% Online Course</Typography>
            <Typography variant="subtitle2">Lorem Ipsum dolar ipsum</Typography>
          </Grid>
        </Grid>
        <Grid item container xs={6} spacing={1}>
          <Grid item>
            <IconButton variant="secondary">
              <LanguageIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h5">100% Online Course</Typography>
            <Typography variant="subtitle2">Lorem Ipsum dolar ipsum</Typography>
          </Grid>
        </Grid>
        <Grid item container xs={6} spacing={1}>
          <Grid item>
            <IconButton variant="secondary">
              <LanguageIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h5">100% Online Course</Typography>
            <Typography variant="subtitle2">Lorem Ipsum dolar ipsum</Typography>
          </Grid>
        </Grid>
        <Grid item container xs={6} spacing={1}>
          <Grid item>
            <IconButton variant="secondary">
              <LanguageIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h5">100% Online Course</Typography>
            <Typography variant="subtitle2">Lorem Ipsum dolar ipsum</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="subtitle4">
          This course is the most up-to-date, comprehensive and bestselling
          React course on Udemy! It was completely updated and re-recorded from
          the ground up - it teaches the very latest version of React with all
          the core, modern features you need to know!
        </Typography>
      </Grid>
    </Grid>
  )
}

export default FullCourseDescription
