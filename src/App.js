import logo from './logo.svg'
import './App.css'
import { Grid, Paper, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useState, useEffect } from 'react'
import BookList from './LeftSide/BookList'
import RightColumn from './RightSide/RightColumn'
import { AutoFixOffSharp } from '@mui/icons-material'
import axios from 'axios'
import { useMutation, useQuery } from 'react-query'
import GetToken from './Client/GetToken'

const data = require('./mockdata.json')

const App = () => {
  const [books, setBooks] = useState(data)
  const [selectedBook, setSelectedBook] = useState(null)
  const [selectedBookId, setSelectedBookId] = useState(null)
  const [bookSelected, setBookSelected] = useState(false)
  const tokenUrl = 'https://dev-wuhb2z2r.us.auth0.com/oauth/token'

  require('dotenv').config()

  var token =
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlREMTl0VHZMT0Z4bmhXODVWNVp1ciJ9.eyJpc3MiOiJodHRwczovL2Rldi13dWhiMnoyci51cy5hdXRoMC5jb20vIiwic3ViIjoiWFB3WUJIUElOS1BLR3MyRzdrREQzZHFmd1JjZVdKdVRAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vYXV0aDAtand0LWF1dGhvcml6ZXIiLCJpYXQiOjE2MzQ3MjMwMzAsImV4cCI6MTYzNDgwOTQzMCwiYXpwIjoiWFB3WUJIUElOS1BLR3MyRzdrREQzZHFmd1JjZVdKdVQiLCJzY29wZSI6ImdldE5hbWVzIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.LQQq8CTsPn-GlzAIE11u18siFKTG4kBW2g7fn2Va3fQRQ9rI8dm3EzXWutVjkGnLOcfOHmKnJZR39R0nO-fh2NC9H1ts2PkheYjOD2oOAytie2_9-WwC3xZM3hzo6adfuKzzr56ZpdRSVickbMxQ2YHpRjYQUYATQJ-BRmJo4gqQo42FTQETbsYmAt9zBFsS0nsBrgWmlBu667THLIcYTwQ3ZPMUen2AkTiWGdDvfwBguk70h1iMahfAPIygzk_e2q1OZQblnpX12YFOlvpXxNNck51VXE-6s-K2KR2H5bQ_jQUICCE1mWldNZrVWn8g3-OWqfp981ouEK1ENZCDJQ'

  useEffect(() => {
    mutation.mutate()
    setBooks(data)
  }, [])

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
      'https://libraryapi.matiaslang.info/api/books',
      {
        headers: {
          'Content-Type': 'application/json',
          //todo: this is temporary, have to modify so that the token is fetched for every request. Currently the token is valid for a day
          Authorization: `Bearer ${token}`,
        },
      },
      books
    )
  })

  if (mutation.isSuccess) {
    setBooks(mutation.data.message)
  }

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
            'Fetching books from the shell, please wait...'
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
        />
      </div>
    </div>
  )
}

export default App
