import React from 'react';
import Slider from '../Slider/Slider';
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Fluent Language Academy</title>
            </Helmet>
            <Slider></Slider>
        </div>
    );
};

export default Home;