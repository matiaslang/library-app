import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
} from '@mui/material'

const BookList = ({ books, SetCurrentBook }) => {
  const HandleClick = (id) => {
    SetCurrentBook(id)
  }
  return (
    <Paper style={{ maxHeight: 500, overflow: 'auto' }}>
      <List>
        {books.map((book) => (
          <ListItem divider='true'>
            <ListItemButton onClick={() => HandleClick(book.id)}>
              <ListItemText primary={book.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}

export default BookList
