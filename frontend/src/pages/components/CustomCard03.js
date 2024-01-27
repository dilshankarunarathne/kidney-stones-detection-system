import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function DefaultCard03() {
  return (
    <Card sx={{ maxWidth: "100%", height: "350px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/kidney-stone04.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Cystine Stones
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Explore cystine kidney stones on our informative platform. Uncover rare hereditary factors and discover treatment approaches. From increased fluid intake to specialized medications, our website guides you in understanding and managing cystine stones for a healthier future.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}