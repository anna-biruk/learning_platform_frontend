// const { gql } = require("@apollo/client")

import { gql } from "@apollo/client"

export const typeDefs = gql`
    type SelectedCourse {
        id: String,
        title: String,
        description: String,
        fullDescription:String,
        price: Float,
        sellPrice: Float,
        technologies: [String],
        rating: Int,
        language: String,
        imageUrl: String,
    }

    extend type Query {
        selectedCourse: SelectedCourse
    }

`

// module.exports = { typeDefs }