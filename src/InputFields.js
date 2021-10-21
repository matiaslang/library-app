import { Grid, TextField } from '@mui/material'
import { useEffect, useState } from 'react'

const InputFields = ({ book }) => {
  const [title, setTitle] = useState('Title')
  const [author, setAuthor] = useState('Author')
  const [description, setDescription] = useState('Description')
  const [id, setId] = useState('ID')

  useEffect(() => {
    if (book != null) {
      setTitle(book.title)
      setAuthor(book.author)
      setDescription(book.setDescription)
      setId(book.id)
    }
  }, [book])

  console.log('OK, TÄSSÄ KIRJA')
  console.log(book)
  return (
    <div>
      <Grid
        container
        direction='column'
        justifyContent='flex-start'
        alignItems='flex-start'
        width='100'
        spacing={3}
      >
        <Grid item xs='auto'>
          <TextField
            id='title'
            label='Title'
            type='text'
            margin='normal'
            defaultValue={title}
          />
        </Grid>
        <Grid item xs='auto' spacing={3}>
          <TextField
            id='author'
            label='Author'
            type='text'
            margin='normal'
            defaultValue={author}
          />
        </Grid>
        <Grid item xs='auto' spacing={3}>
          <TextField
            id='description'
            label='description'
            type='text'
            margin='normal'
            defaultValue={description}
          />
        </Grid>
        <Grid item xs='auto' spacing={3}>
          <TextField
            id='ID'
            label='ID'
            type='text'
            margin='normal'
            defaultValue={id}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default InputFields
