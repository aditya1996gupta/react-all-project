import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const data = [
  { period: 'Apr-2024', sales: 86.51, snapSales: 11.65, otherIncome: 0.39, materialCost: 34.6, conversionCost: 11.89 },
  { period: 'Jun-2024', sales: 86.51, snapSales: 11.65, otherIncome: 0.39, materialCost: 34.6, conversionCost: 11.89 },
  { period: 'Jul-2024', sales: 86.51, snapSales: 11.65, otherIncome: 0.39, materialCost: 34.6, conversionCost: 11.89 },
];

function PLManagementTable() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Period</TableCell>
            <TableCell align="right">Sales</TableCell>
            <TableCell align="right">Snap Sales</TableCell>
            <TableCell align="right">Other Income</TableCell>
            <TableCell align="right">Material Cost</TableCell>
            <TableCell align="right">Conversion Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.period}>
              <TableCell>{row.period}</TableCell>
              <TableCell align="right">{row.sales}</TableCell>
              <TableCell align="right">{row.snapSales}</TableCell>
              <TableCell align="right">{row.otherIncome}</TableCell>
              <TableCell align="right">{row.materialCost}</TableCell>
              <TableCell align="right">{row.conversionCost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PLManagementTable;
