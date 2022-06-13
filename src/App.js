import { useEffect, useState } from "react";
import { fetchTodos } from "./utils/api";
import Todo from './components/Todo';
import { Grid, Tab, Tabs, Container, Button, Card, TextField, Box, Typography } from "@mui/material";
import { a11yProps } from "./utils/auxiliary";
import Header from './components/Header';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { setCurrentLastIndexAction, setNewTodoValueAction, addTodoAction, removeTodoAction, setOutTodosAction, setTodosAction, setModeAction, toggleCompleteAction, clearCompletedAction } from './store/actions/index';
import { dbTodos, modes } from "./utils/config";

function App() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos.todos);
  const outTodos = useSelector((state) => state.todos.outTodos);
  const mode = useSelector((state) => state.todos.mode);
  const [value, setValue] = useState(0);

  useEffect(() => {
    dispatch(setTodosAction(dbTodos))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (mode === modes[0]) {
      dispatch(setOutTodosAction(todos))
    }
    if (mode === modes[1]) {
      dispatch(setOutTodosAction(todos.filter(todo => todo.completed)))
    }
    if (mode === modes[3]) {
      dispatch(setOutTodosAction(todos.filter(todo => !todo.completed)))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, todos])

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(setModeAction(modes[newValue]))
  }

  const addTodo = (e) => {
    e.preventDefault()

    dispatch(setCurrentLastIndexAction())
    dispatch(addTodoAction())
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
                  onInput={(e) => dispatch(setNewTodoValueAction(e.target.value))}
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
                  removeTodo={() => dispatch(removeTodoAction(todo.id))}
                  toggleCompleted={() => dispatch(toggleCompleteAction(todo.id))}
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
              onClick={() => dispatch(clearCompletedAction())}
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
