import axios from 'axios'
import { useMutation, useQuery } from 'react-query'
import qs from 'qs'
import GetToken from './GetToken'

const SaveNew = (title, author, description, id) => {
  var postData = {
    id: id,
    title: title,
    author: author,
    description: description,
  }

  console.log(postData)
  var axiosConfig = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }
  var url = 'https://libraryapi.matiaslang.info/api/books'
  var url2 = 'http://localhost:5000/books'

  return axios
    .post(url, postData, {
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

export default SaveNew
