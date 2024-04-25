import React from "react";

const Testimonials = () => {
  return (
    <header className="mx-auto max-w-full my-24 hidden md:block bg-btn-green  text-app-white py-12">
      <div className="flex justify-center">
        <button className="border bg-[#3A8A57] border-[#3A8A57] text-xl text-app-white shadow-lg rounded-full font-bold px-12 py-5 mb-4">
          Testimonials
        </button>
      </div>
      <div className="flex justify-center">
        <h1 className="text-center text-[40px] font-bold text-app-white">
          What our clients say about us.
        </h1>
      </div>
      <div className="flex justify-center">
        <h1 className="text-center text-[40px] font-bold text-app-white">""</h1>
      </div>
      <div className="carousel w-full">
        <div id="testimonial1" className="carousel-item relative w-full">
          <div className="max-w-[80%] mx-auto text-center">
            <p className="max-w-[70%] mx-auto my-8 italic">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage .
            </p>
            <p className="font-bold text-lg">James Toriff</p>
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
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage .
            </p>
            <p className="font-bold text-lg">Diane Wallace</p>
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
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage .
            </p>
            <p className="font-bold text-lg">Susan Pwajok</p>
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
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage .
            </p>
            <p className="font-bold text-lg">Andy Bannerman</p>
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
    </header>
  );
};

export default Testimonials;
