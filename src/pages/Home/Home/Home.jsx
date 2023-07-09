import React from 'react';
import Slider from '../Slider/Slider';
import { Helmet } from "react-helmet-async";
import ForGrowth from '../ForGrowth/ForGrowth';
import Reviews from '../Reviews/Reviews';
import Partner from '../Partner/Partner';
import PopularInstructor from '../PopularInstructor.jsx/PopularInstructor';
import PopularClasses from '../PopularClasses/PopularClasses';
import Overview from '../Overview/Overview';
import UpcomingCourse from '../UpcomingCourse/UpcomingCourse';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Fluent Language Academy</title>
            </Helmet>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
            <ForGrowth></ForGrowth>
            <Overview></Overview>
            <Reviews></Reviews>
            <UpcomingCourse></UpcomingCourse>
            <Partner></Partner>
        </div>
    );
};

export default Home;