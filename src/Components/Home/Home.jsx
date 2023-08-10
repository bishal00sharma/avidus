import React from 'react'
import Hero from './Hero'
import Banner from './Banner'
import { Link } from "react-router-dom";
import "./Home.css"
import MainBox from '../Navbar/MainBox';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div>
      <MainBox />
        <Hero>
        <Banner
          title="Book now Pay at Hotel"
          subtitle="luxurious rooms starting at ₹999"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Footer />
    </div>
  )
}

export default Home