import React from "react"
import { Grid } from "@mui/material"
import CourseCardSmall from "../CourseCard/CourseCardSmall"
import { useQuery } from "@apollo/client"
import { getCoursesQuery, getSelectedCourseQuery } from "../../graphql/courses"


const CoursesListByLevel = () => {
  const coursesResponse = useQuery(getCoursesQuery)
  const course = useQuery(getSelectedCourseQuery)

  console.log({ course })
  return (
    <Grid container direction="column" spacing={2}>
      {coursesResponse?.data?.courses?.map(item => {
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
