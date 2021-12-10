import React from 'react';
import CardInmueble from '../../molecules/card-inmueble/card-inmueble';
import './inmuebles.scss';
import img from '../../../assets/inmuebles/apto1.jpg';

const inmbueblesList = [
  {
    photo: '../../../assets/inmuebles/apto1.jpg',
    title: 'Apartamento en Venta, Calí',
    price: 250000000,
    tipoInmueble: 1,
    estado: 1,
  },
  {
    photo: '',
    title: 'Apartamento en Venta, Medellín',
    price: 204052023,
    tipoInmueble: 2,
    estado: 1,
  },
  {
    photo: '',
    title: 'Apartamento en Venta, Barranquilla',
    price: 502205563,
    tipoInmueble: 2,
    estado: 2,
  },
  {
    photo: '',
    title: 'Apartamento en Venta, Cartagena',
    price: 102205563,
    tipoInmueble: 1,
    estado: 1,
  },
  {
    photo: '',
    title: 'Apartamento en Venta, Cúcuta',
    price: 100205563,
    tipoInmueble: 2,
    estado: 2,
  },
  {
    photo: '',
    title: 'Apartamento en Venta, Barranquilla',
    price: 502205563,
    tipoInmueble: 1,
    estado: 2,
  },
  {
    photo: '',
    title: 'Apartamento en Venta, Cartagena',
    price: 102205563,
    tipoInmueble: 2,
    estado: 1,
  },
  {
    photo: '',
    title: 'Apartamento en Venta, Cúcuta',
    price: 100205563,
    tipoInmueble: 2,
    estado: 2,
  },
  {
    photo: '',
    title: 'Apartamento en Venta, Cúcuta',
    price: 100205563,
    tipoInmueble: 1,
    estado: 1,
  },
  {
    photo: '',
    title: 'Apartamento en Venta, Barranquilla',
    price: 502205563,
    tipoInmueble: 1,
    estado: 2,
  },
  {
    photo: '',
    title: 'Apartamento en Venta, Cartagena',
    price: 102205563,
    tipoInmueble: 1,
    estado: 2,
  },
  {
    photo: '',
    title: 'Apartamento en Venta, Cúcuta',
    price: 100205563,
    tipoInmueble: 1,
    estado: 1,
  },
];

const Inmuebles = () => {
  return (
    <div className="inmueble">
      <h3>Inmuebles Destacados</h3>
      <div className="inmueble__wrap">
        {inmbueblesList.map((item, index) => (
          <div className="inmueble__card">
            <CardInmueble title={item.title} photo={img} price={item.price} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inmuebles;
