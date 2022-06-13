import { AppBar, Box, Button, Toolbar } from '@mui/material'
import React from 'react'
import { ReactComponent as Logo } from '../assets/brand.svg'

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#dadadade' }}>
        <Toolbar >
          <Box sx={{ flexGrow: 1 }}>
            <Logo alt="brand Logo" />
          </Box>
          <Button
            variant={"contained"}
            color='success'
            sx={{ marginRight: '10px' }}
            href='https://github.com/wwnp/mindbox-tesk-task-todos'
            target="_blank"
          >
            GitHub Repo
          </Button>
          <Button
            variant={"contained"}
            color="success"
            href='https://github.com/wwnp'
            sx={{ marginRight: '10px' }}
            target="_blank"
          >
            GitHub Overview
          </Button>
          <Button
            variant={"contained"}
            color="success"
            href='https://spb.hh.ru/resume/e958213aff09d3ce9a0039ed1f724654675655'
            target="_blank"
          >
            HH Summary
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header