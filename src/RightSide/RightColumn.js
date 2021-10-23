import InputFields from './InputFields'
import { Grid, Paper, Box } from '@mui/material'
import ModifyingButtons from './ModifyingButtons'
import { useEffect, useState } from 'react'

const RightColumn = ({ book, focused, setFocused, mutation }) => {
  const [title, setTitle] = useState()
  const [author, setAuthor] = useState()
  const [description, setDescription] = useState()
  const [id, setId] = useState()

  console.log('OK; KATOTAAMPA MUTAATIOTA')
  console.log(mutation)

  return (
    <Paper>
      <InputFields
        book={book}
        focused={focused}
        title={title}
        setTitle={setTitle}
        author={author}
        setAuthor={setAuthor}
        description={description}
        setDescription={setDescription}
        id={id}
        setId={setId}
      />
      <ModifyingButtons
        focused={focused}
        setFocused={setFocused}
        title={title}
        author={author}
        description={description}
        id={id}
        mutation={{ mutation }}
      />
    </Paper>
  )
}

export default RightColumn
