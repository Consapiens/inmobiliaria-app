import React from 'react';
import Banner from '../../organisms/banner/banner';
import Footer from '../../organisms/footer/footer';
import Header from '../../organisms/header/header';
import Inmuebles from '../../organisms/inmuebles/inmuebles';

const TemplateHome = () => {
  return (
    <div className="home">
      <Header />
      <Banner />
      <Inmuebles />
      <Footer />
    </div>
  );
};

export default TemplateHome;
