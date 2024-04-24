import propTypes from "prop-types";
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";

export default function ButtonSlider({ direction, moveSlide }) {
  return (
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    <button
      type="button"
      onClick={moveSlide}
      className={`${
        direction === "next" ? "right-0" : "left-0"
      } absolute w-9 h-9 md:w-16 md:h-16 cursor-pointer bg-white rounded-full mx-2 bottom-1/2 transform translate-y-1/2 transition-transform hover:scale-110`}
    >
      <img src={`${direction === "next" ? rightArrow : leftArrow}`} alt="" />
    </button>
  );
}

ButtonSlider.propTypes = {
  direction: propTypes.oneOf(["next", "prev"]).isRequired,
  moveSlide: propTypes.func.isRequired,
};
