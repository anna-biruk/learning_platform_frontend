import * as React from "react"
import { Grid } from "@mui/material"
import { Link } from "gatsby"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: "none",
    fontSize: 14,
    fontWeight: "bold",
    color: "#333333",
  },
}))
const CoursesMenu = () => {
  const classes = useStyles()
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <Grid item>
        <Link className={classes.link} to="">
          Frontend
        </Link>
      </Grid>
      <Grid item>
        <Link className={classes.link} to="">
          Backend
        </Link>
      </Grid>
      <Grid item>
        <Link className={classes.link} to="">
          Devops
        </Link>
      </Grid>
      <Grid item>
        <Link className={classes.link} to="">
          Testing
        </Link>
      </Grid>
    </Grid>
  )
}

export default CoursesMenu
