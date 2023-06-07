import React from "react";
import { FaClock, FaEnvelope, FaHome, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import fblogo from "../../../assets/facebook.png"
import linkedInlogo from "../../../assets/linkedin.png"
import ytlogo from "../../../assets/youtube.png"
import vimeologo from "../../../assets/vimeo.png"

const Footer = () => {
  return (
    <div>
      <div className="bg-[#06646630]">
        <footer className="footer py-10 px-5 text-base-content ">
          <div className="">
            <div className="inline-flex items-center">
              <img
                className="w-10 rounded-full  me-2"
                src="/logo.png"
                alt="logo"
              />
              <Link className=" text-2xl font-bold text-[#066466]">
                Fluent Language Academy
              </Link>
            </div>
            <p className="w-80">
              What is the description of language learning? Language learning is
              an active process that begins at birth and continues throughout
              life. Students learn language as they use it to communicate their
              thoughts, feelings, and experiences, establish relationships with
              family members and friends, and strive to make sense and order of
              their world.
            </p>
          </div>

          <div>
            <span className="footer-title opacity-100 text-[#066466]">
              Information
            </span>
            <Link className="link link-hover flex items-center gap-2">
              <FaHome className="text-[#066466]"></FaHome> Burggraben 1A,
              Geisenheim, Hesse, Germany
            </Link>
            <Link className="link link-hover flex items-center gap-2">
              <FaPhone className="text-[#066466]"></FaPhone> +4925632552 |
              +4900122333
            </Link>
            <Link className="link link-hover flex items-center gap-2">
              <FaEnvelope className="text-[#066466]"></FaEnvelope>
              contact@fluentlanguageacademy.com
            </Link>
            <Link className="link link-hover flex items-center gap-2">
              <FaClock className="text-[#066466]"></FaClock>10:00AM - 5:00PM
            </Link>
          </div>
          <div>
            <span className="footer-title opacity-100 text-[#066466]">
              Legal & Privacy
            </span>
            <Link className="link link-hover">Terms of use</Link>
            <Link className="link link-hover">Privacy policy</Link>
            <Link className="link link-hover">Cookie policy</Link>
            <Link className="link link-hover">Contact</Link>
          </div>
          <div>
            <span className="footer-title opacity-100 text-[#066466]">
              Join Our Newsletter
            </span>
            <div className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="kidstoys@site.com"
                  className="input input-bordered w-full pr-16"
                />
                <button className="btn bg-[#066466] text-white hover:bg-[#066466] outline-none border-none absolute top-0 right-0 rounded-l-none">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </footer>
        {/* Footer Bottom */}
        <div className="px-5 mx-auto">
          <div className="items-center flex justify-between pb-10">
            <h4 className="text-xl font-bold text-[#066466] uppercase">
              Be connected with our social media
            </h4>
            <div className=" flex space-x-10 ">
                <Link><img className="w-10" src={fblogo} alt="facebook logo" /></Link>
                <Link><img className="w-10" src={linkedInlogo} alt="LinkedIn logo" /></Link>
                <Link><img className="w-10" src={ytlogo} alt="Youtube logo" /></Link>
                <Link><img className="w-10" src={vimeologo} alt="Youtube logo" /></Link>
            </div>
          </div>
          <hr />
          <p className="text-center text-[#066466] py-5">
            Copyright © 2023 - All right reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
