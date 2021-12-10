import React from 'react';
import Characteristics from '../../molecules/characteristics/characteristics';
import img from '../../../assets/inmuebles/apto2.jpg';
import _Button from '../../atoms/button/button';
import './details.scss';

const Details = () => {
  return (
    <div className="details">
      <div className="details__wrap">
        <div className="details__volver">
          <a href="/">
            <_Button text="volver" />
          </a>
        </div>
        <div className="details__image">
          <img src={img} alt="foto del inmueble" />
        </div>
        <div className="details__characteristics">
          <Characteristics />
        </div>
      </div>
    </div>
  );
};

export default Details;
