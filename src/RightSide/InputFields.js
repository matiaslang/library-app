import { Grid, TextField } from '@mui/material'
import { useEffect, useState } from 'react'

const InputFields = ({
  book,
  focused,
  title,
  setTitle,
  author,
  setAuthor,
  description,
  setDescription,
  id,
  setId,
}) => {
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
            required
            onChange={(e) => setTitle(e.target.value)}
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
            required
            onChange={(e) => setAuthor(e.target.value)}
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
            required
            onChange={(e) => setDescription(e.target.value)}
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
            onChange={(e) => setId(e.target.value)}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default InputFields
