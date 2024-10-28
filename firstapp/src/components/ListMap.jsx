import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const ListMap = () => {
    var[inp,setInp] = useState(["ICTAK"])
    var[data,setdata]=useState("");
    const inputhanlde = (e)=>{
        // console.log("on")
        setdata(e.target.value)
        // console.log("inp",data)
    }
    const add = ()=>{
        console.log("c")
        setInp([...inp, data]);
        console.log("sub",inp)
        setdata("");

    }
  return (
    <div style={{marginTop:'50px'}}>
        <TextField variant='outlined' label="Enter your Name"
        onChange={inputhanlde}
        value={data}
        />
        <br /><br />
        <Button variant="contained" onClick={add}>
            Submit
        </Button>
        <br /><br />
        <ul>
            {inp.map((v,i)=>{
                return <li key={i}>{v}</li>
                

            })}
        </ul>
    </div>
  )
}

export default ListMap