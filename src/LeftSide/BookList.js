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
    <div style={{ width: '90%', height: '100%', overflow: 'auto' }}>
      <Paper>
        <List style={{}}>
          {books.map((book) => (
            <ListItem divider='true'>
              <ListItemButton onClick={() => HandleClick(book.id)}>
                <ListItemText primary={book.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  )
}

export default BookList
