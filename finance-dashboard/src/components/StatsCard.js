import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function StatsCard({ title, value, change }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="h4" component="div">
          {value}
        </Typography>
        <Typography variant="body2" color={change.includes('+') ? 'green' : 'red'}>
          {change}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default StatsCard;
