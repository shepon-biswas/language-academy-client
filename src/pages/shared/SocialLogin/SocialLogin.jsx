import React from 'react';
import { FaGoogle } from "react-icons/fa";

const SocialLogin = ({handleGoogleSignIn}) => {
    return (
        <>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className="btn btn-outline border-[#066466] text-[#066466] w-full hover:bg-[#066466] hover:text-white "> <FaGoogle></FaGoogle> Continue With Google</button>
        </>
    );
};

export default SocialLogin;