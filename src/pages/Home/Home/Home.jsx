import React from 'react';
import Slider from '../Slider/Slider';
import { Helmet } from "react-helmet-async";
import ForGrowth from '../ForGrowth/ForGrowth';
import Reviews from '../Reviews/Reviews';
import Partner from '../Partner/Partner';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Fluent Language Academy</title>
            </Helmet>
            <Slider></Slider>
            <ForGrowth></ForGrowth>
            <Reviews></Reviews>
            <Partner></Partner>
        </div>
    );
};

export default Home;