import React from 'react';
import { Grid, Container } from '@mui/material';
import Header from './components/Header';
import RevenueExpensesChart from './components/RevenueExpensesChart';
import FinancialRingChart from './components/FinancialRingChart';
import TopExpensesBarChart from './components/TopExpensesBarChart';
import EbitdaLineGraph from './components/EbitdaLineGraph';
import PLManagementTable from './components/PLManagementTable';

function App() {
  return (
    <Container maxWidth="lg">
          <Header />
      <Grid container spacing={3} mt={3}>
        <Grid item xs={12} md={8}>
          <RevenueExpensesChart />
        </Grid>
        <Grid item xs={12} md={4}>
          <FinancialRingChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <TopExpensesBarChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <EbitdaLineGraph />
        </Grid>
        <Grid item xs={12}>
          <PLManagementTable />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
