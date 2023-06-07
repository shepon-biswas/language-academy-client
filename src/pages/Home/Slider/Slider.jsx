import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Slide } from "react-awesome-reveal";

const Slider = () => {
  return (
    <div>
      <Carousel autoPlay={true}>
        <div className="max-h-[550px]">
          <img src="https://i.ibb.co/8KTmV4T/korean-banner.jpg" />
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-[#06646601] to-[#066466c5] rounded">
            <div className=" absolute bottom-20 left-[10%] text-center w-5/6 mx-auto text-white">
              <Slide direction="right">
                <h4 className="text-2xl md:text-4xl font-bold my-3">
                  [Nae eoneojeok hangyeneun nae segyeui hangyeda]
                  <br />
                  <span>
                    The limits of my language are the limits of my world.
                  </span>
                </h4>
              </Slide>
              <p className="text-gray-200">-Learn Korean Language</p>
            </div>
          </div>
        </div>
        <div className="max-h-[550px]">
          <img src="https://i.ibb.co/K67vMWj/spanish-banner.jpg" />
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-[#06646601] to-[#066466c5] rounded">
            <div className=" absolute bottom-20 left-[10%] text-center w-5/6 mx-auto text-white   ">
              <Slide direction="right">
              <h4 className="text-2xl md:text-4xl font-bold my-3">
                [El aprendizaje es experiencia, todo lo demás es información.]
                <br />
                <span>
                  Learning is experience. Everything else is information.{" "}
                </span>
              </h4>
              </Slide>
              <p className="text-gray-200">-Learn Spanish Language</p>
            </div>
          </div>
        </div>
        <div className="max-h-[550px]">
          <img src="https://i.ibb.co/Z2G11CG/chinese-banner.jpg" />
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-[#06646601] to-[#066466c5] rounded">
            <div className=" absolute bottom-20 left-[10%] text-center w-5/6 mx-auto text-white   ">
              <Slide direction="right">
              <h4 className="text-2xl md:text-4xl font-bold my-3">
                [学如登山 - xué rú dēng shān]
                <br />
                <span>Studying is like climbing a mountain.</span>
              </h4>
              </Slide>
              <p className="text-gray-200">-Learn Chinese Language</p>
            </div>
          </div>
        </div>
        <div className="max-h-[550px]">
          <img src="https://i.ibb.co/4YDwbzb/germen-banner.jpg" />
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-[#06646601] to-[#066466c5] rounded">
            <div className=" absolute bottom-20 left-[10%] text-center w-5/6 mx-auto text-white   ">
              <Slide direction="right">
              <h4 className="text-2xl md:text-4xl font-bold my-3">
                [Eine andere Sprache zu haben, ist wie eine zweite Seele zu
                besitzen]
                <br />
                <span>
                  To have another language is to possess a second soul.
                </span>
              </h4>
              </Slide>
              <p className="text-gray-200">-Learn German Language</p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
