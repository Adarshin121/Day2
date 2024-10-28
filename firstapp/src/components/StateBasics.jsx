import { Typography,TextField, Button } from '@mui/material';
import React, { useState } from 'react'

const StateBasics = () => {
   var[fname,setFname] =useState("Krishna");

   var[val,setVal] = useState()
   const handleInput = (e)=>{
    // console.log(e.target.value);
    setVal(e.target.value);
    console.log(val);
   }
   const submitHandler = ()=>{
    console.log("clicked");
    // setFname(val); //first show like this
    setFname(val);
   }
   
  return (
    <div>
        <br /><br />
        <Typography variant='h4'>Welcome {fname} </Typography>
        <br /><br />
        <TextField variant="outlined" onChange={handleInput} label="Type your name"/>
        <br /><br />
        <Button variant="contained" onClick={submitHandler}>Submit</Button>
    </div>
  )
}

export default StateBasics