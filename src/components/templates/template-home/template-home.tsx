import React from 'react';
import Banner from '../../organisms/banner/banner';
import Body from '../../organisms/body/body';
import Footer from '../../organisms/footer/footer';
import Header from '../../organisms/header/header';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Banner />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
