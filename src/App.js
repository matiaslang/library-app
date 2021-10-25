import logo from './logo.svg'
import './App.css'
import { Grid, Paper, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useState, useEffect } from 'react'
import BookList from './LeftSide/BookList'
import RightColumn from './RightSide/RightColumn'
import axios from 'axios'
import { useMutation, useQuery } from 'react-query'
import GetToken from './Client/GetToken'

const data = require('./mockdata.json')

const App = () => {
  const [books, setBooks] = useState(data)
  const [selectedBook, setSelectedBook] = useState(null)
  const [selectedBookId, setSelectedBookId] = useState(null)
  const [bookSelected, setBookSelected] = useState(false)
  const [token, setToken] = useState(false)

  const tokenUrl = 'https://dev-wuhb2z2r.us.auth0.com/oauth/token'

  require('dotenv').config()

  const Token = async () => {
    var newToken = null
    if (token === null) {
      newToken = await GetToken()
      setToken(newToken)
    }
    return newToken
  }

  const url = 'https://libraryapi.matiaslang.info/api/books'

  useEffect(() => {
    //console.log(selectedBook)
    var val = books.find((b) => b.id === selectedBookId)
    setSelectedBook(val)
    if (val != null) {
      setBookSelected(true)
    }
  }, [selectedBookId, books])

  const mutation = useMutation((books) => {
    var token = GetToken()
    return axios.get(
      url,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
      books
    )
  })

  useEffect(() => {
    mutation.mutate()
  }, [])

  useEffect(() => {
    if (mutation.isSuccess) {
      setBooks(mutation.data.data)
      //mutation.reset()
    }
  }, [mutation])

  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          width: '50%',
          overflow: 'auto',
          height: '100vh',
        }}
      >
        <Paper rounded='true'>
          {mutation.isLoading ? (
            'Fetching books from the shelf, please wait...'
          ) : (
            <>
              {mutation.isError ? (
                <div> An error occurred: {mutation.error.message}</div>
              ) : null}
              {mutation.isSuccess ? (
                <BookList books={books} SetCurrentBook={setSelectedBookId} />
              ) : null}
            </>
          )}
        </Paper>
      </div>
      <div style={{ width: '50%' }}>
        <RightColumn
          book={selectedBook}
          focused={bookSelected}
          setFocused={setBookSelected}
          mutation={{ mutation }}
        />
      </div>
    </div>
  )
}

export default App
