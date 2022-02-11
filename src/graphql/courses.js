import { gql } from "@apollo/client"

export const getCoursesQuery = gql`
    query Courses($searchString: String, $language: String) {
        courses(searchString: $searchString, language: $language) {
            id
            title
            description
            fullDescription
            price
            sellPrice
            questions {
                id
                question
                answer
                category
                media
                references
            }
            technologies
            rating
            language
            imageUrl
        }
    }

`

export const getSelectedCourseQuery = gql`
    query Query {
        selectedCourse @client {
            id
            title
            description
            fullDescription
            price
            sellPrice
            technologies
            rating
            language
            imageUrl
        }
    }
`

