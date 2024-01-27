import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function DefaultCard02() {
  return (
    <Card sx={{ maxWidth: "100%", height: "350px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/kidney-stone02.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Uric Acid Stones
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Navigate our content on uric acid kidney stones. Gain insights into their diet and hydration links. Explore practical tips, dietary modifications, and medications to control uric acid levels. Empower yourself with knowledge for effective prevention and management.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}