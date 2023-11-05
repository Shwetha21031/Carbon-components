import { Column, DataTable, Grid, Table, TableBatchAction, TableBody, TableCell, TableContainer, TableHead, TableHeader, TableRow, TableToolbar } from '@carbon/react';
import React from 'react'
import { Link } from 'react-router-dom';

const Data_Table = () => {
  return (
    <>
          <h5>Data table</h5>
          <Table aria-label="sample table">
            <TableHead>
              <TableRow>
                <TableHeader>Name</TableHeader>
                <TableHeader isSortable>Rule</TableHeader>
                <TableHeader>Status</TableHeader>
                <TableHeader>Other</TableHeader>
                <TableHeader>Example</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Load Balancer 1</TableCell>
                <TableCell>Round robin</TableCell>
                <TableCell>Starting</TableCell>
                <TableCell>Test</TableCell>
                <TableCell>22</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Load Balancer 2</TableCell>
                <TableCell>DNS delegation</TableCell>
                <TableCell>Active</TableCell>
                <TableCell>Test</TableCell>
                <TableCell>22</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Load Balancer 3</TableCell>
                <TableCell>Round robin</TableCell>
                <TableCell>Disabled</TableCell>
                <TableCell>Test</TableCell>
                <TableCell>22</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Load Balancer 4</TableCell>
                <TableCell>Round robin</TableCell>
                <TableCell>Disabled</TableCell>
                <TableCell>Test</TableCell>
                <TableCell>22</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Load Balancer 5</TableCell>
                <TableCell>Round robin</TableCell>
                <TableCell>Disabled</TableCell>
                <TableCell>Test</TableCell>
                <TableCell>22</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Load Balancer 6</TableCell>
                <TableCell>Round robin</TableCell>
                <TableCell>Disabled</TableCell>
                <TableCell>Test</TableCell>
                <TableCell>22</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Load Balancer 7</TableCell>
                <TableCell>Round robin</TableCell>
                <TableCell>Disabled</TableCell>
                <TableCell>Test</TableCell>
                <TableCell>22</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <br></br>
          <br></br>
            Batch actions
          <br></br>
          <br></br>

          <br></br>
          <br></br>
            sorting
          <br></br>
          <br></br>

          <br></br>
          <br></br>
            Expansion
          <br></br>
          <br></br>

          <br></br>
          <br></br>
            Filtering  
          <br></br>
          <br></br>
        
        
    </>
  );
}

export default Data_Table