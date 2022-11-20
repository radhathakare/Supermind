import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect, useState} from 'react';
import axios from 'axios';



export default function BasicTable() {
    const[info,setInfo] = useState([]);
    const[search,setSearch] = useState("");
    const getpdata = async() =>{
        try{
    const data = await axios.get("https://random-data-api.com/api/users/random_user?size=5");
    console.log(data.data);
    setInfo(data.data);
        }
        catch(e){
            console.log(e);
        }
    };
    useEffect(() =>{
        getpdata();
    },[]);
  return (
    <div>
      
    <TableContainer component={Paper}>
      
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell> 
            <input
        type="text"
        placeholder="Search here"
        onChange={e =>{
            setSearch(e.target.value);
        }}
        /></TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Gender&nbsp;</TableCell>
            <TableCell align="right">Credit Card Number&nbsp;</TableCell>
            <TableCell align="right">Address&nbsp;</TableCell>
          </TableRow>
          {info.filter(item => {
            if(search == ""){
                return item;
            }else if(item.first_name.toLowerCase().includes(search.toLowerCase())){
                return item;

            }
          }).map((item) => (
            <TableRow
              key={item.first_name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.first_name}
              </TableCell>
              <TableCell align="right">{item.subscription.status}</TableCell>
              <TableCell align="right">{item.gender}</TableCell>
              <TableCell align="right">{item.credit_card.cc_number}</TableCell>
              <TableCell align="right">{item.address.state},{item.address.country}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </TableContainer>
    
    </div>
  );
}
