import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
} from '@mui/material'

//List of the books on the left side of the screen. Just present title and author of every book found
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
                <ListItemText primary={book.title + ' - ' + book.author} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  )
}

export default BookList
