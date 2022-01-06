import { Grid} from "@mui/material"
import React from "react"
import { makeStyles } from "@mui/styles"
import clsx from "clsx"
import AdvantageCard from "../AdvantageCard/AdvantageCard"

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "#ffff",
    borderRadius: 50,
    padding: 30,
  },
}))

const Footer = ({ className }) => {
  const classes = useStyles()
  return (
    <Grid
      container
      className={clsx(classes.container, className)}
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={4}>
        <AdvantageCard />
      </Grid>
      <Grid item xs={4}>
        <AdvantageCard />
      </Grid>
      <Grid item xs={4}>
        <AdvantageCard />
      </Grid>
    </Grid>
  )
}

export default Footer
