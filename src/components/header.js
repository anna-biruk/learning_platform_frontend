import * as React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@mui/styles"
import { Grid, Button, Avatar, Typography } from "@mui/material"
import PersonIcon from "@mui/icons-material/Person"

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: theme.palette.primary.light,
    padding: theme.spacing(2),
  },
  link: {
    textDecoration: "none",
    fontSize: 14,
    fontWeight: "bold",
    color: "#333333",
  },
  active: {
    color: "#fd5983",
  },
}))

const Header = () => {
  const classes = useStyles()
  return (
    <header className={classes.header}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={2}>
          Logo
        </Grid>
        <Grid item xs={6}>
          <Grid
            container
            justifyContent="flex-end"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Link
                className={classes.link}
                to="/"
                activeClassName={classes.active}
              >
                Home
              </Link>
            </Grid>
            <Grid item>
              <Link
                className={classes.link}
                to="/courses"
                activeClassName={classes.active}
              >
                Courses
              </Link>
            </Grid>
            <Grid item>
              <Link
                className={classes.link}
                to="/"
                activeClassName={classes.active}
              >
                Interviews
              </Link>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={2}
          container
          justifyContent="flex-end"
          direction="row"
          alignItems="center"
          spacing={1}
        >
          <Grid item>
            <Avatar variant="rounded">
              <PersonIcon />
            </Avatar>
          </Grid>
          <Grid item component={Typography} variant="subtitle2">
            Hi,Hanna
          </Grid>
        </Grid>
        <Grid container item justifyContent="center" xs={2}>
          <Button variant="contained" color="secondary">
            Start Studying
          </Button>
        </Grid>
      </Grid>
    </header>
  )
}

export default Header
