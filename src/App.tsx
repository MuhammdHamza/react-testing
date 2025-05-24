import { Container, Typography, Box } from '@mui/material'
import { TodoList } from './presentation/TodoList/TodoList'

function App() {
  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" gutterBottom>
          My Todo App
        </Typography>
        <TodoList />
      </Box>
    </Container>
  )
}

export default App
