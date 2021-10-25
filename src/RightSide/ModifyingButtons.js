import { Grid, TextField, Button } from '@mui/material'
import Delete from '../Client/Delete'
import SaveNew from '../Client/SaveNew'

const ModifyingButtons = ({
  focused,
  setFocused,
  title,
  author,
  description,
  id,
  mutation,
}) => {
  const handleSave = () => {
    SaveNew(title, author, description, id)
      .then(mutation.mutation.mutation.reset())
      .then(mutation.mutation.mutation.mutate())
  }

  const handleDelete = () => {
    Delete(id)
      .then(mutation.mutation.mutation.reset())
      .then(mutation.mutation.mutation.mutate())
  }

  return (
    <Grid
      container
      direction='row'
      justifyContent='flex-start'
      alignItems='flex-start'
      padding={3}
    >
      <Grid item xs={3}>
        <Button
          variant='outlined'
          disabled={focused}
          onClick={() => handleSave()}
        >
          Save new
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant='outlined'
          disabled={!focused}
          onClick={() => handleSave()}
        >
          Save
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant='outlined'
          disabled={!focused}
          onClick={() => handleDelete()}
        >
          Delete
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant='outlined'
          disabled={!focused}
          onClick={() => setFocused(false)}
        >
          Cancel
        </Button>
      </Grid>
    </Grid>
  )
}

export default ModifyingButtons
