import axios from 'axios'
import { useMutation, useQuery } from 'react-query'
import qs from 'qs'

const Delete = (id, mutation) => {
  var url = `https://libraryapi.matiaslang.info/api/books/${id}`
  var url2 = `http://localhost:5000/books/${id}`

  return axios
    .delete(url, {
      headers: {
        'Access-Control-Allow-Origin': 'true',
        'Content-Type': 'application/json',
      },
    })
    .then(
      (response) => {
        console.log(response)
      },
      (error) => {
        console.log(error)
      }
    )
}

export default Delete
