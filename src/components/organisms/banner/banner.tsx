import React, { Component, useState } from 'react';
import { selectItem } from '../../../shared/models/select.model';
import _Button from '../../atoms/button/button';
import Input from '../../atoms/input/input';
import _Select from '../../atoms/select/select';
import './banner.scss';

export default function Banner() {
  const [tipoInmueble, setTipoInmueble] = useState('');
  const [caracteristicaInmueble, setCaracteristicaInmueble] = useState('');
  const [inputInmueble, setInputInmueble] = useState('');

  const tiposInmueble: selectItem[] = [
    { value: 1, description: 'Apartamento' },
    { value: 2, description: 'Casa' },
  ];

  const caracteristicasInmueble: selectItem[] = [
    { value: 1, description: 'Nuevas' },
    { value: 2, description: 'Usadas' },
  ];

  const changeTipoInmueble = (value: string) => {
    setTipoInmueble(value);
  };
  const changeCaracteristicaInmueble = (value: string) => {
    setCaracteristicaInmueble(value);
  };
  const changeInputInmueble = (value: string) => {
    setInputInmueble(value);
  };

  return (
    <div className="banner">
      <div className="banner__wrap">
        <h2>Encuentra inmuebles en venta y arriendo:</h2>
        <div className="banner__form">
          <_Select
            label="Tipo de inmueble"
            items={tiposInmueble}
            value={tipoInmueble}
            onChange={changeTipoInmueble}
          />
          <_Select
            label="Estado"
            items={caracteristicasInmueble}
            value={caracteristicaInmueble}
            onChange={changeCaracteristicaInmueble}
          />
          <Input placeholder="Ciudad, Barrio" onChange={changeInputInmueble} />
          <_Button />
        </div>
      </div>
    </div>
  );
}
