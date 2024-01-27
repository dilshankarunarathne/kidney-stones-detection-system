import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function DefaultCard() {
  return (
    <Card sx={{ maxWidth: "100%", height: "70px", alignItems: "center" }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          AI Based kidney Stones Detection System
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}