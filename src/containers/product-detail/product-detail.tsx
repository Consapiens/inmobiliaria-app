import React from 'react';
import { useParams } from 'react-router-dom';
import InmuebleDetail from '../../components/templates/template-product/template-product';

function Inmueble() {
  // const { id } = useParams;

  return (
    <div className="App">
      <InmuebleDetail />
    </div>
  );
}

export default Inmueble;
