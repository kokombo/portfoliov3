import useScrollHeight from "@/utilities/hooks/useScrollHeight";
import { Fragment } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {
  const { scrollHeight } = useScrollHeight();

  return (
    <Fragment>
      {scrollHeight && scrollHeight > 2500 && (
        <button
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
          className=" flex items-center justify-center fixed z-[100] h-10 w-10 rounded-full md:right-10 md:bottom-20 right-5 bottom-10 bg-fadedWhite dark:bg-gray"
        >
          <FaArrowUp />
        </button>
      )}
    </Fragment>
  );
};

export default ScrollTop;
