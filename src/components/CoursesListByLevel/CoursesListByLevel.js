import React from "react"
import { Grid } from "@mui/material"
import CourseCardSmall from "../CourseCard/CourseCardSmall"

const data = [
  {
    title: "Modern React with Redux",
    description:
      "Master React and Redux with React Router, Webpack, and Create-React-App. Includes Hooks.",
  },
  { title: "JavaScript", description: "JavaScript" },
  { title: "React", description: "React" },
  { title: "HTML/CSS", description: "HTML,CSS3,SCCS" },
  { title: "JavaScript", description: "JavaScript" },
  { title: "React", description: "React" },
]

const CoursesListByLevel = () => {
  return (
    <Grid container direction="column" spacing={2}>
      {data.map(item => {
        return (
          <Grid item>
            <CourseCardSmall courseItem={item} />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default CoursesListByLevel
