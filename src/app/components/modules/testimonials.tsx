//@ts-nocheck
"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <header className="mx-auto max-w-full my-24 block bg-btn-green  text-app-white py-12">
      <div data-aos="zoom-in">
        <div className="flex justify-center">
          <button className="border bg-[#3A8A57] border-[#3A8A57] text-xl text-app-white shadow-lg rounded-full font-bold px-12 py-5 mb-4">
            Testimonials
          </button>
        </div>
        <div className="flex justify-center">
          <h1 className="text-center text-[28px] md:text-[32px] lg:text-[40px] font-bold text-app-white">
            What our clients say about us.
          </h1>
        </div>
        <div className="flex justify-center">
          <h1 className="text-center text-[40px] font-bold text-app-white">
            &quot;
          </h1>
        </div>
        <div className="carousel w-full">
          <div id="testimonial1" className="carousel-item relative w-full">
            <div className="max-w-[80%] mx-auto text-center">
              <p className="max-w-[70%] mx-auto my-8 italic">
                &quot;Carent Software has been a game-changer for our small car
                rental company. The intuitive interface and powerful automation
                features have streamlined our operations, allowing us to serve
                our customers more efficiently than ever before. The reporting
                tools provide valuable insights that help us make data-driven
                decisions to grow our business.&quot;
              </p>
              <p className="font-bold text-lg">
                James Toriff, Owner, Acme Car Rentals
              </p>
              <div className="rating mt-5">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-yellow-500"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-yellow-500"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-yellow-500"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-yellow-500"
                  checked
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-white"
                />
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/4">
              <a
                href="#testimonial4"
                className="btn btn-circle bg-[#3A8A57] text-app-white hover:text-app-dark"
              >
                ❮
              </a>
              <a
                href="#testimonial2"
                className="btn btn-circle bg-[#3A8A57] text-app-white hover:text-app-dark"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="testimonial2" className="carousel-item relative w-full">
            <div className="max-w-[80%] mx-auto text-center">
              <p className="max-w-[70%] mx-auto my-8 italic">
                &quot;As a new player in the car rental market, we needed a
                flexible and scalable software solution to help us get off the
                ground quickly. Carent provided the perfect combination of an
                easy-to-use platform, integrated website builder, and responsive
                customer support. Within weeks, we had a professional online
                presence and were able to start taking bookings. The software
                has grown with us as we&apos;ve expanded our fleet and customer
                base.&quot;
              </p>
              <p className="font-bold text-lg">
                Diane Wallace, Founder, Speedy Rentals
              </p>
              <div className="rating mt-5">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-yellow-500"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star bg-yellow-500"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star bg-yellow-500"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star bg-yellow-500"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star bg-yellow-500"
                  checked
                />
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/4">
              <a
                href="#testimonial1"
                className="btn btn-circle bg-[#3A8A57] text-app-white hover:text-app-dark"
              >
                ❮
              </a>
              <a
                href="#testimonial3"
                className="btn btn-circle bg-[#3A8A57] text-app-white hover:text-app-dark"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="testimonial3" className="carousel-item relative w-full">
            <div className="max-w-[80%] mx-auto text-center">
              <p className="max-w-[70%] mx-auto my-8 italic">
                &quot;Carent&apos;s all-in-one system has transformed the way we
                do business. We can now handle marketing, maintenance, payments,
                and reporting from a single platform. The automation features
                save us countless hours, while the reporting gives us a clear
                picture of our KPIs. We've seen a significant boost in
                efficiency and customer satisfaction since implementing.&quot;
              </p>
              <p className="font-bold text-lg">
                Susan Pwajok, Director, Reliable Rentals
              </p>
              <div className="rating mt-5">
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-star bg-yellow-500"
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-star bg-yellow-500"
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-star bg-yellow-500"
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-star bg-yellow-500"
                  checked
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-star bg-white"
                />
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/4">
              <a
                href="#testimonial2"
                className="btn btn-circle bg-[#3A8A57] text-app-white hover:text-app-dark"
              >
                ❮
              </a>
              <a
                href="#testimonial4"
                className="btn btn-circle bg-[#3A8A57] text-app-white hover:text-app-dark"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="testimonial4" className="carousel-item relative w-full">
            <div className="max-w-[80%] mx-auto text-center">
              <p className="max-w-[70%] mx-auto my-8 italic">
                &quot;Carent has streamlined our entire rental process, from
                online bookings to fleet management. The multi-channel booking
                system ensures we never miss an opportunity, while the
                intelligent CRM features help us provide a personalized
                experience for each customer. The ERP tool has consolidated all
                our data into one place, making it easier to manage billing,
                registrations, and more.&quot;
              </p>
              <p className="font-bold text-lg">
                Andy Bannerman, Manager, City Car Rental
              </p>
              <div className="rating mt-5">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star bg-yellow-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star bg-yellow-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star bg-yellow-500"
                  checked
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star bg-white"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star bg-white"
                />
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/4">
              <a
                href="#testimonial3"
                className="btn btn-circle bg-[#3A8A57] text-app-white hover:text-app-dark"
              >
                ❮
              </a>
              <a
                href="#testimonial1"
                className="btn btn-circle bg-[#3A8A57] text-app-white hover:text-app-dark"
              >
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Testimonials;
