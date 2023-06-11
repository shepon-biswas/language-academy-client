import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const Reviews = () => {
  return (
    <>
      <div className="my-14">
        <h2 className="text-2xl font-bold text-center">
          ---- What Our
          <span className="text-[#066466]"> Learners Say</span> ----
        </h2>
      </div>
      <div className="md:grid grid-cols-3 gap-5 items-center mb-14">
        <div className="col-span-2 md:grid grid-cols-2  gap-10">
            <div className="shadow-md px-5 py-10 border relative">
                <div className="inline-flex items-center gap-3 ">
                    <img className="rounded-full w-14 h-14" src="https://i.ibb.co/GCk9ZGN/pexels-photo-3936894.jpg" alt="user image" />
                    <h3 className="font-bold text-[#066466]">Jessy Costa</h3> 
                </div>
                <p className="z-10">As a visual learner, I appreciate the visual aids and graphics used in this language learning website. They make the lessons more engaging and memorable. It's an excellent platform for anyone looking to learn a new language at their own pace.</p>
                <FaQuoteRight className="absolute top-8 right-8 w-28 h-28 opacity-50 text-[#066466]"></FaQuoteRight>
            </div>
            <div className="shadow-md px-5 py-10 border relative">
                <div className="inline-flex items-center gap-3 ">
                    <img className="rounded-full w-14 h-14" src="https://i.ibb.co/D5YXGJv/pexels-photo-7077368.jpg" alt="user image" />
                    <h3 className="font-bold text-[#066466]">Mark D.Colony</h3> 
                </div>
                <p className="z-10">I've tried several language learning platforms, but this website stands out from the rest. The content is well-structured and covers all aspects of language learning, including grammar, vocabulary, and conversation. </p>
                <FaQuoteRight className="absolute top-8 right-8 w-28 h-28 opacity-50 text-[#066466]"></FaQuoteRight>
            </div>
            <div className="shadow-md px-5 py-10 border relative">
                <div className="inline-flex items-center gap-3 ">
                    <img className="rounded-full w-14 h-14" src="https://i.ibb.co/51HB9VX/pexels-photo-6497112.jpg" alt="user image" />
                    <h3 className="font-bold text-[#066466]">Rebecca Liona</h3> 
                </div>
                <p className="z-10">I've been using this language learning website for a few weeks now, and I'm impressed by the community aspect it offers. The discussion forums and language exchange feature allow me to connect with fellow learners and native speakers.</p>
                <FaQuoteRight className="absolute top-8 right-8 w-28 h-28 opacity-50 text-[#066466]"></FaQuoteRight>
            </div>
            <div className="shadow-md px-5 py-10 border relative">
                <div className="inline-flex items-center gap-3 ">
                    <img className="rounded-full w-14 h-14" src="https://i.ibb.co/fYJsVHX/pexels-photo-6497112.jpg" alt="user image" />
                    <h3 className="font-bold text-[#066466]">Shamantha Caprio</h3> 
                </div>
                <p className="z-10">I absolutely love this language learning website! The interface is clean and intuitive, making it easy for me to navigate through the lessons. The interactive exercises and quizzes have been incredibly helpful in improving my language skills. </p>
                <FaQuoteRight className="absolute top-8 right-8 w-28 h-28 opacity-50 text-[#066466]"></FaQuoteRight>
            </div>
        </div>
        <div>
            
            <img src="https://i.ibb.co/KKY3dcG/feedback.jpg" alt="reivew image" />
        </div>

      </div>
    </>
  );
};

export default Reviews;
