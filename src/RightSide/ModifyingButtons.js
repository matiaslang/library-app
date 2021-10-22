import { Grid, TextField, Button } from '@mui/material'

const ModifyingButtons = ({ focused, setFocused }) => {
  return (
    <Grid
      container
      direction='row'
      justifyContent='flex-start'
      alignItems='flex-start'
      padding={3}
    >
      <Grid item xs={3}>
        <Button variant='outlined' disabled={focused}>
          Save new
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button variant='outlined' disabled={!focused}>
          Save
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button variant='outlined' disabled={!focused}>
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
