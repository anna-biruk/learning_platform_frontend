import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import { IconButton, Grid, Typography } from "@mui/material"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@mui/styles"
import clsx from "clsx"

const useStyles = makeStyles(theme => ({
  crossPrice: {
    textDecoration: "line-through",
  },
  sellPrice: {
    lineHeight: "0.5 !important",
  },
}))

const CourseCard = ({ courseItem }) => {
  const classes = useStyles()
  const fileResponse = useStaticQuery(graphql`
    query {
      file(name: { eq: "react-dark" }) {
        publicURL
      }
    }
  `)
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={fileResponse?.file?.publicURL}
        alt="react"
      />
      <CardContent>
        <Grid container gap={1} alignItems="center">
          <Grid item xs={2}>
            <IconButton color="secondary">
              <PlayArrowIcon />
            </IconButton>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="h5">{courseItem.title}</Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {courseItem.technologies}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              className={clsx({ [classes.crossPrice]: courseItem.sellPrice })}
            >
              {courseItem.price}$
            </Typography>
            {courseItem.sellPrice && (
              <Typography
                variant="subtitle1"
                color="secondary"
                className={classes.sellPrice}
              >
                {courseItem.sellPrice}$
              </Typography>
            )}
          </Grid>
          <Grid item xs={1}>
            <IconButton variant="default">
              <FavoriteBorderIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CourseCard
