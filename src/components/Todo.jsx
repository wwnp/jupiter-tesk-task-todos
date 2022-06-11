// import { Card, Container } from '@material-ui/core'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Card, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';

const Todo = ({
  id,
  title,
  completed,
  removeTodo,
  toggleCompleted
}) => {
  return (
    <Card
      variant="outlined"
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center">
        <Grid
          item
          xs={8}
        >
          <h1 className="pl-1">{title}</h1>
        </Grid>
        <Grid
          container
          item
          xs={2}
          alignItems="center"
          justifyContent="center"
        >
          {
            completed
              ? <RemoveIcon
                onClick={() => toggleCompleted(id)}
                style={{ color: 'red' }}
              >

              </RemoveIcon>
              : <AddIcon
                onClick={() => toggleCompleted(id)}
                style={{ color: 'green' }}
              >

              </AddIcon>
          }

        </Grid>
        <Grid
          container
          item
          xs={2}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <DeleteIcon
            style={{ color: 'red' }}
            onClick={() => removeTodo(id)}
          >

          </DeleteIcon>
        </Grid>
      </Grid>
    </Card>
  )
}

export default Todo