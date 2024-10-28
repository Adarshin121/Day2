import React from 'react'
import { Typography,TextField,Button } from '@mui/material'
const Login = () => {
  return (
    <>
        <br /><br /><br />
        <h1>Login Page</h1>
        <br />
        <input placeholder='username'/>
        <br />
        <input placeholder='password'/>
        <br />
        <button>Submit </button>
        <br /><br /><br /><br />

        <Typography variant='h1'>Login Page</Typography>
        <br /><br />
        <TextField variant='outlined' label="username" />&nbsp;&nbsp;
        <TextField variant='standard' label="username" />&nbsp;&nbsp;
        <TextField variant='filled' label="username" />
        <br /><br /><br />
        <Button variant='contained'>Submit</Button>

    </  >
  )
}

export default Login