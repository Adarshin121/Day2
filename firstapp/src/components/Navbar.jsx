import { AppBar,Toolbar,Button,Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div >
        <AppBar position='static'>
            <Toolbar>
                <Typography sx={{flexGrow:1}} align='left' variant='h6'>App</Typography>
                <Button >
                  <Link to='/' style={{color:'white'}} >Login</Link>
                </Button>
                <Button style={{color:'white'}}>
                   <Link to='/sign' style={{color:'white'}} >Signup</Link>
                </Button>
                <Button style={{color:'white'}}>
                <Link to='/c' style={{color:'white'}} >Counter</Link>
                </Button>
                <Button style={{color:'white'}}>
                <Link to='/t' style={{color:'white'}} >Table</Link>
                </Button>
                <Button style={{color:'white'}}>
                <Link to='/l' style={{color:'white'}} >List</Link>
                </Button>
                <Button style={{color:'white'}}>
                <Link to='/a' style={{color:'white'}} >Api</Link>
                </Button>
                <Button style={{color:'white'}}>
                <Link to='/g' style={{color:'white',textDecoration:'none'}} >Grid</Link>
                </Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar