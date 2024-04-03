import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

// eslint-disable-next-line react/prop-types
export default function Accordion({ title, answer }) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className=" py-2 mt-4">
      <button
        type="button"
        onClick={() => setAccordionOpen(!accordionOpen)}
        className=" flex justify-between w-full "
      >
        <span>{title}</span>

        <div className="flex items-center">
          <div>{accordionOpen ? <SlArrowUp /> : <SlArrowDown />}</div>
        </div>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm  ${
          accordionOpen
            ? " grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        } `}
      >
        <div className=" overflow-hidden">{answer}</div>
      </div>
    </div>
  );
}
