import React, { Component, useState } from 'react';
import { selectItem } from '../../../shared/models/select.model';
import _Button from '../../atoms/button/button';
import _Select from '../../atoms/select/select';

export default function Banner() {
  const [tipoInmueble, setTipoInmueble] = useState('');

  const options = [
    { value: 'Tipo de inmueble', label: 'Tipo de inmueble' },
    { value: 'Proyectos Nuevos', label: 'Proyectos Nuevos' },
    { value: 'Ubicación ', label: 'Ubicación' },
  ];

  const tiposInmueble: selectItem[] = [
    { value: 1, description: 'Apartamento' },
    { value: 2, description: 'Casa' },
  ];

  const changeTipoInmueble = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTipoInmueble(event.target.value);
  };

  return (
    <div className="banner">
      <h2>Encuentra inmuebles en venta y arriendo:</h2>
      <_Select
        label="Tipo de inmueble"
        items={tiposInmueble}
        value={tipoInmueble}
        onChange={}
      />
      {/* <_Select />
      <_Select /> */}
      <_Button />
    </div>
  );
}
