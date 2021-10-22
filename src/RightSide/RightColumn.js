import InputFields from './InputFields'
import { Grid, Paper, Box } from '@mui/material'
import ModifyingButtons from './ModifyingButtons'

const RightColumn = ({ book, focused, setFocused }) => {
  return (
    <Paper>
      <InputFields book={book} focused={focused} />
      <ModifyingButtons focused={focused} setFocused={setFocused} />
    </Paper>
  )
}

export default RightColumn
