import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia, CardActionArea } from '@mui/material';
import img from '../../../assets/inmuebles/apto1.jpg';

interface Props {
  photo: string;
  title: string;
  price: number;
}

const CardInmueble: React.FC<Props> = (props) => {
  return (
    <Card>
      <CardMedia component="img" image={props.photo} alt="Foto inmueble" />
      <CardActionArea>
        <CardContent>
          <Typography variant="h5">{props.title}</Typography>
          <Typography variant="body2">
            Precio de Venta $ {props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardInmueble;
