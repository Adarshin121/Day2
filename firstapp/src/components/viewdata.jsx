import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const viewdata = () => {

var[user,setUsers]=useState([]); //fetching data save in to a variable
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response.data)
            setUsers(response.data);
        })
    },[])
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>City</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {user.map((val,i)=>{
                        return(
                            <TableRow>
                                <TableCell key={i}>{val.name}</TableCell>
                                <TableCell key={i}>{val.username}</TableCell>

                                <TableCell key={i}>{val.address.city}</TableCell>


                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default viewdata