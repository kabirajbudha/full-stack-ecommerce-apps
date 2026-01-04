import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox.jsx"

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16 ">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            We are a team dedicated to providing quality products and a smooth
            experience for our customers. Our focus is on delivering reliable
            solutions and improving continuously to meet your needs.
          </p>
          <p>
            Over time, we have continued to grow by learning from challenges and
            listening to feedback. Our commitment is to maintain high standards,
            stay consistent, and always look for better ways to serve. Every
            decision we make is guided by our mission to offer dependable
            solutions that people can rely on with confidence.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to provide reliable and high-quality solutions that
            make a real difference for our customers. We focus on innovation,
            consistency, and understanding user needs to create experiences
            people can trust and enjoy.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            We prioritize quality in every step of our process, ensuring that
            our products and services meet the highest standards. Our team
            carefully checks each detail to deliver reliable and consistent
            results that customers can trust.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            We make every interaction simple and hassle-free for our customers.
            From easy access to our services to smooth support and quick
            solutions, we ensure a convenient experience at every step.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            We are committed to providing friendly, responsive, and helpful
            support at every stage. Our team goes the extra mile to ensure that
            all customer questions are answered, concerns are resolved, and
            experiences are positive and memorable.
          </p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  );
};

export default About;
