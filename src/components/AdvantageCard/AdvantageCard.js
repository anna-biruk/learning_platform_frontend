import { Grid, Typography } from "@mui/material"
import React from "react"
import SupportAgentIcon from "@mui/icons-material/SupportAgent"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(theme => ({
  container: {
    border: "2px solid #ffd984",
    borderRadius: 20,
    padding: 20,
  },
  icon: {
    color: "#ffd984",
    width: "50px !important",
    height: "auto !important",
  },
}))

const AdvantageCard = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={classes.container}
    >
      <Grid item xs={4}>
        <SupportAgentIcon
          classes={{ root: classes.icon }}
          className={classes.icon}
        />
      </Grid>
      <Grid item xs={2}>
        <Typography variant="h4">Test</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="subtitle1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          volutpat, enim id tempus cursus, diam purus convallis sapien, quis
          gravida purus ipsum iaculis enim.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default AdvantageCard
