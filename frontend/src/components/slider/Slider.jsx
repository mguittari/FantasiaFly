/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from "react";
import { useParams } from "react-router-dom";
import ButtonSlider from "./ButtonSlider";
import pictures from "../../data/sliderDatas.json";

export default function Slider() {
  const { id } = useParams();

  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== pictures[0].slide_pictures.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === pictures[0].slide_pictures.length) {
      setSlideIndex(1);
    }
  };
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(pictures[0].slide_pictures.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="">
      <div className="w-[400px] h-[265px] md:w-[800px] md:h-[520px] overflow-hidden flex mx-auto my-5 rounded-3xl shadow-lg">
        <div className="container-slider relative w-full h-full">
          {pictures.map((picture, index) =>
            picture.slide_pictures.map((value) => {
              if (picture.id === parseInt(id, 10)) {
                return (
                  <img
                    key={value}
                    className={`${
                      slideIndex === index + 1 ? "opacity-100" : "opacity-0"
                    } w-full absolute transition-opacity duration-500 ease-in-out`}
                    src={`${value.path}`}
                    alt={`${value.id}`}
                  />
                );
              }
              return null;
            })
          )}

          <ButtonSlider moveSlide={nextSlide} direction="next" />
          <ButtonSlider moveSlide={prevSlide} direction="prev" />
          <div className="container-dots absolute flex bottom-0 right-1/2 transform translate-x-1/2">
            {Array.from({ length: 3 }).map((item, index) => (
              <button
                type="button"
                onClick={() => moveDot(index + 1)}
                key={item}
                className={`${
                  slideIndex === index + 1
                    ? "bg-gray-700 border-2 md:border-4 border-white"
                    : "bg-white"
                }  w-3 h-3 md:w-6 md:h-6 rounded-full mx-2 mb-2 z-10 cursor-pointer transition-transform hover:scale-110`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// md:max-w-[1300px] md:h-[800px]
