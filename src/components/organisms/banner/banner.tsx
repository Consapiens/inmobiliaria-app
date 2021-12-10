import React, { Component, useState } from 'react';
import { selectItem } from '../../../shared/models/select.model';
import _Button from '../../atoms/button/button';
import Input from '../../atoms/input/input';
import _Select from '../../atoms/select/select';
import './banner.scss';

export default function Banner() {
  const [tipoInmueble, setTipoInmueble] = useState('');
  const [caracteristicaInmueble, setCaracteristicaInmueble] = useState('');
  const [ciudad, setCiudad] = useState('');

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

  const changeCiudad = (value: string) => {
    setCiudad(value);
  };

  return (
    <div className="banner">
      <div className="banner__wrap">
        <h3>Encuentra inmuebles en venta:</h3>
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
          <Input
            value={ciudad}
            placeholder="Ciudad, Barrio"
            onChange={changeCiudad}
          />
          <_Button />
        </div>
      </div>
    </div>
  );
}
