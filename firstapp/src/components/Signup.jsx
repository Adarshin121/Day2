import React, { useState } from 'react'
import { Typography,TextField, Button } from '@mui/material';

const Signup = () => {
    var[data,setData] = useState();
    const inputHandler = (e)=>{
        setData({...data,[e.target.name]:e.target.value});
        console.log(data);
        
    }
  return (
    <div>
        <Typography variant="h3">Signup Form</Typography>
        <br /><br /><br />
        <TextField label="Email" variant='outlined' name='email' onChange={inputHandler}/>
        <br /><br />
        <TextField label="Username" variant='outlined' name='fname' onChange={inputHandler}/>
        <br /><br />
        <TextField label="Password" variant='outlined' name='pwd' onChange={inputHandler}/>
        <br /><br />
        <Button variant='contained' color='secondary'>Submit</Button>


    </div>
  )
}

export default Signup