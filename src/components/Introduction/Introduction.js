import React from "react"
import { Button, Grid, Typography } from "@mui/material"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(theme => ({
  descriptionItem: {
    marginBottom: `${theme.spacing(2)} !important`,
  },
}))

const Introduction = ({ className }) => {
  const classes = useStyles()
  const fileResponse = useStaticQuery(graphql`
    query {
      file(name: { eq: "Set_of_programmers" }) {
        publicURL
      }
    }
  `)
  return (
    <Grid
      container
      direction="row"
      className={className}
      alignItems="center"
      spacing={2}
    >
      <Grid item sx={{ marginLeft: "auto" }} xs={5}>
        <Typography className={classes.descriptionItem} variant="h2">
          Tomorrow is for the Taking
        </Typography>
        <Typography className={classes.descriptionItem} variant="subtitle1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
          mollis nibh. Nulla a risus vitae sem lobortis iaculis nec sed nunc.
          Praesent placerat quis nisi vel viverra. Sed rutrum porta elementum.
        </Typography>
        <Button className={classes.descriptionItem} variant="contained">
          Get Started
        </Button>
      </Grid>
      <Grid item xs={6}>
        <img
          src={fileResponse?.file?.publicURL}
          width="100%"
          alt="programmer"
        />
      </Grid>
    </Grid>
  )
}

export default Introduction
