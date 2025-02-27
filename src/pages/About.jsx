import React from "react";
import { NewsletterBox, Title } from "../components";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            excepturi blanditiis saepe similique nihil officia repellat omnis
            est, nesciunt perferendis?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            sequi?
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            necessitatibus repudiandae nisi impedit pariatur totam modi atque ab
            est magni.
          </p>
        </div>
      </div>
      <div className="text-2xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            sapiente, sed magni obcaecati suscipit necessitatibus.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            sapiente, sed magni obcaecati suscipit necessitatibus.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Services</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            sapiente, sed magni obcaecati suscipit necessitatibus.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
