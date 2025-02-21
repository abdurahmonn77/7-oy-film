import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function MovieCard({image, title, description}) {
  return (
    <Card sx={{ maxWidth: 345 }} className='!bg-[#0A1F44]'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt='movie name'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='text-[#D4AF37] font-mono !font-bold font-[Nunito] h-[50px]'>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} className='line-clamp-5 !text-white'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
// src={`${IMG_URL}/${item.poster_path}`}