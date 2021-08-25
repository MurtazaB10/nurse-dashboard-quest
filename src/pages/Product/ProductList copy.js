import React, { useEffect, useState } from "react";
import axios from "axios";
import {TableContainer,Table,TableHead,TableCell,TableRow,TableBody,Paper} from '@material-ui/core'
function ProductList() {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const result = await axios.get(
        "nurse/productList"
      );
      setData(result.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <TableContainer component={Paper}>
      <Table aria-label="a simple table" title='Product List'>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="left">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
export default ProductList;
