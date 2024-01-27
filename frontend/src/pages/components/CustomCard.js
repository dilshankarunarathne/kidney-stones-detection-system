import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function DefaultCard() {
  return (
    <Card sx={{ maxWidth: "100%", height: "350px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/kidney-stone01.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Calcium Oxalate Stones
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Explore insights into calcium oxalate kidney stones - causes, symptoms, and treatments. Discover lifestyle changes, medications, and surgical options for managing and preventing these painful stones, ensuring a healthier, stone-free life.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}