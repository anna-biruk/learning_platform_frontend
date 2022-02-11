import { gql, InMemoryCache } from "@apollo/client"

const cache = new InMemoryCache()


export const setSelectedCourse = selectedCourse => {
  cache.writeQuery({
    query: gql`{ selectedCourse }`,
    data: {
      selectedCourse: { ...selectedCourse }
    }
  })
}


export default cache