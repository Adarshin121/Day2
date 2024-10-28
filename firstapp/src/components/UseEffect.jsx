import { Button, Typography } from '@mui/material'
import React, { useState,useEffect } from 'react'


const UseEffect = () => {
    var[x,setX] = useState();
    const inpt = ()=>{
        setX("React")
    }
    const inpt2 = ()=>{
        setX("Angular")
    }
    const inpt3 = ()=>{
        setX("Next")
    }
   useEffect(()=>{
    inpt2();
   },[])
  return (
    <div>
        <br /><br /><br />
        <Typography variant='h3'>Welcome to {x} </Typography>
        <br /><br />
        <Button variant='contained' color='primary' onClick={inpt}>React</Button>&nbsp;
        <Button variant='contained' color='secondary' onClick={inpt2}>Angular</Button>&nbsp;
        <Button variant='contained' color='success' onClick={inpt3}>Next</Button>

        <Button variant='contained' color='primary' >React</Button>&nbsp;
        <Button variant='contained' color='secondary' >Angular</Button>&nbsp;
        <Button variant='contained' color='success' >Next</Button>
    </div>
  )
}

export default UseEffect