import { Grid, TextField } from '@mui/material'
import { useEffect, useState } from 'react'

const InputFields = ({ book, focused }) => {
  const [title, setTitle] = useState()
  const [author, setAuthor] = useState()
  const [description, setDescription] = useState()
  const [id, setId] = useState()

  useEffect(() => {
    if (book != null) {
      setTitle(book.title)
      setAuthor(book.author)
      setDescription(book.description)
      setId(book.id)
    }
  }, [book])

  useEffect(() => {
    if (!focused) {
      setTitle('')
      setAuthor('')
      setDescription('')
      setId('')
    }
  }, [focused])

  useEffect(() => {
    console.log('OK; NYMMYÖ LATASIMMA')
  }, [])

  console.log('OK, TÄSSÄ KIRJA')
  return (
    <div>
      <Grid
        container
        direction='row'
        justifyContent='flex-start'
        alignItems='flex-start'
        spacing={3}
        paddingLeft={3}
        paddingRight={3}
      >
        <Grid item xs={6}>
          <TextField
            fullWidth
            id='title'
            label='Title'
            type='text'
            margin='normal'
            value={title}
            multiline={true}
            focused={focused}
            onChange={(e) => setTitle(e.value)}
          />
        </Grid>
        <Grid item xs={6} spacing={3}>
          <TextField
            fullWidth
            id='author'
            label='Author'
            type='text'
            margin='normal'
            value={author}
            multiline={true}
            focused={focused}
            onChange={(e) => setAuthor(e.value)}
          />
        </Grid>
      </Grid>
      <Grid
        container
        direction='row'
        justifyContent='flex-start'
        alignItems='flex-start'
        spacing={3}
        paddingLeft={3}
        paddingRight={3}
      >
        <Grid item xs={6} spacing={3}>
          <TextField
            fullWidth
            id='description'
            label='description'
            type='text'
            margin='normal'
            value={description}
            multiline={true}
            minRows='3'
            focused={focused}
            onChange={(e) => setDescription(e.value)}
          />
        </Grid>
        <Grid item xs={6} spacing={3}>
          <TextField
            fullWidth
            id='ID'
            label='ID'
            type='text'
            margin='normal'
            value={id}
            multiline={true}
            focused={focused}
            onChange={(e) => setId(e.value)}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default InputFields
