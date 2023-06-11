import React from 'react';
import { Helmet } from 'react-helmet-async';
import useInstructors from '../../hooks/useInstructors';
import InstructorCard from './InstructorsCard';

const Instructors = () => {
    const {instructors} = useInstructors();
    
    
    return (
        <>
        <Helmet>
            <title>All Instructor Page</title>
        </Helmet>
        <div className='my-14'>
            <h2 className='text-2xl font-bold text-[#066466] text-center'>All Instructors Profile</h2>
        </div>
        {/* Instructors Section */}
        <div className="md:grid grid-cols-3 gap-5 my-14">
        {instructors.map((instructorData) => (
          <InstructorCard
            key={instructorData._id}
            instructorData={instructorData}
          ></InstructorCard>
        ))}
      </div>
        </>
    );
};

export default Instructors;