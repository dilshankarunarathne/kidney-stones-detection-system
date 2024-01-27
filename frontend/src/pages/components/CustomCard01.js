import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function DefaultCard01() {
  return (
    <Card sx={{ maxWidth: "100%", height: "350px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/kidney-stone03.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Struvite Stones
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Uncover struvite kidney stones on our site. Learn about their rapid growth, connection to infections, and treatment strategies. Explore prevention measures and surgical interventions, ensuring an informed journey toward kidney health.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}