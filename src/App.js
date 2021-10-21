import logo from './logo.svg'
import './App.css'
import { Grid, Paper, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useState, useEffect } from 'react'
import BookList from './BookList'
import InputFields from './InputFields'

const data = require('./mockdata.json')

const App = () => {
  const [books, setBooks] = useState(data)
  const [selectedBook, setSelectedBook] = useState(null)

  function SetCurrentBook(id) {
    setSelectedBook(id)
  }

  useEffect(() => {
    setBooks(data)
  }, [])

  useEffect(() => {
    console.log(selectedBook)
  }, [selectedBook])

  var val = books.find((b) => b.id === selectedBook)
  console.log(val)
  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <div style={{ float: 'left' }}>
        <Paper rounded='true'>
          <BookList books={books} SetCurrentBook={setSelectedBook} />
        </Paper>
      </div>
      <div style={{ float: 'left', paddingLeft: 200 }}>
        <Paper>
          <InputFields book={val} />
        </Paper>
      </div>
    </div>
  )
}

export default App
