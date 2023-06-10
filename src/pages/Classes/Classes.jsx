import React from 'react';
import useClasses from '../../hooks/useClasses';

const Classes = () => {
    const {classes} = useClasses("approved");
    console.log(classes)
    return (
        <div>
            <h2>This is classes page</h2>
        </div>
    );
};

export default Classes;