import { useEffect, useState } from "react";
import { fetchTodos } from "./utils/api";
import Todo from './components/Todo';
import { Grid, Tab, Tabs, Container, Button, Card, TextField, Box, Typography } from "@mui/material";
import { a11yProps } from "./utils/auxiliary";
import Header from './components/Header';

const modes = [
  'all',
  'completed',
  'active'
]

function App() {
  const [todos, setTodos] = useState([])
  const [outTodos, setOutTodos] = useState([])
  const [mode, setMode] = useState(modes[0])
  const [value, setValue] = useState(0);
  const [newTodoValue, setNewTodoValue] = useState('')
  const [currentLastIndex, setCurrentLastIndex] = useState(todos.length)
  useEffect(() => {
    fetchTodos()
      .then(data => {
        setTodos(data)
        setCurrentLastIndex(data.length - 1)
      })
  }, [])

  useEffect(() => {
    if (mode === 'all') {
      setOutTodos(todos)
    }
    if (mode === 'completed') {
      setOutTodos(todos.filter(todo => todo.completed))
    }
    if (mode === 'active') {
      setOutTodos(todos.filter(todo => !todo.completed))
    }
  }, [mode, todos])

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleCompleted = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))

  }

  const clearCompleted = () => {
    setTodos(todos.map(todo => {
      todo.completed = false
      return todo
    }))
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setMode(modes[newValue])
  }

  const addTodo = (e) => {
    e.preventDefault()
    setCurrentLastIndex(currentLastIndex + 1)
    const newTodo = {
      id: currentLastIndex + 1,
      title: newTodoValue,
      completed: false
    }
    setTodos([...todos, newTodo])
  }
  return (
    <>
      <Header></Header>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <Typography variant="h1" component="h2" sx={{ marginTop: '15px', marginBottom: '15px' }}>
            Todos
          </Typography>
        </Box>

        <Grid
          container
          spacing={2}
          direction={"column"}
        >
          <form
            onSubmit={(e) => addTodo(e)}
          >
            <Grid
              container
            >
              <Grid
                item
                xs={12}
                sm={10}
              >
                <TextField
                  fullWidth
                  label="New todo"
                  id="newTodoValue"
                  value={newTodoValue}
                  onInput={(e) => setNewTodoValue(e.target.value)}
                />
              </Grid>
              <Grid
                item
                container
                justifyContent={'center'}
                xs={12}
                sm={2}
              >
                <Button
                  fullWidth
                  variant="contained"
                  color="success"
                  type="submit"
                >
                  Add
                </Button>
              </Grid>
            </Grid>
          </form>
          {
            outTodos.length === 0
              ? (
                <Card
                  variant="outlined"
                >
                  <h1 className="pl-1">No todos</h1>
                </Card>
              )
              : outTodos.map(todo => {
                return <Todo
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  completed={todo.completed}
                  removeTodo={removeTodo}
                  toggleCompleted={toggleCompleted}
                >
                </Todo>
              })
          }
        </Grid>

        <Grid
          container
          spacing={2}
          style={{ marginTop: '5px' }}
        >
          <Grid
            item
            container
            // justifyContent={'center'}
            alignItems='center'
            xs={12}
            sm={6}
            md={2}
          >
            <span className="text-secondary">
              {todos.filter(todo => !todo.completed).length} todos left
            </span>

          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="All" {...a11yProps(0)} />
              <Tab label="Completed" {...a11yProps(1)} />
              <Tab label="Active" {...a11yProps(2)} />
            </Tabs>
          </Grid>
          <Grid
            item
            container
            justifyContent={'center'}
            sm={12}
            md={3}
          >
            <Button
              variant="contained"
              color="error"
              onClick={clearCompleted}
              size={'small'}
            >
              Clear completed
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
