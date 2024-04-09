"use client";
import { useEffect } from "react";
import Arrow from "../common/icons/arrow";

const ArrowUpButton = () => {
  const calcScrollValue = () => {
    const {
      documentElement: { scrollTop, scrollHeight, clientHeight },
    } = document;

    const pos = scrollTop;
    const calcHeight = scrollHeight - clientHeight;
    const scrollValue = Math.round((pos * 100) / calcHeight);

    const scrollProgress = document.getElementById("progress");
    if (!scrollProgress) return;

    if (pos > 120) {
      scrollProgress.style.display = "flex";
    } else {
      scrollProgress.style.display = "none";
    }

    scrollProgress.style.background = `conic-gradient(#C1285D ${scrollValue}%,#d7d7d7 ${scrollValue}%)`;
  };

  useEffect(() => {
    window.addEventListener("scroll", calcScrollValue);

    return () => {
      window.removeEventListener("scroll", calcScrollValue);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      id="progress"
      className={`
      fixed bottom-10 right-10 flex hidden h-[50px] w-[50px] 
      cursor-pointer items-center justify-center rounded-full 
      bg-primary shadow	 `}
      onClick={scrollToTop}
    >
      <div className="progress-value flex h-[calc(100%-15px)] w-[calc(100%-15px)] items-center justify-center rounded-full bg-white">
        <Arrow className="arrow-icon" />
      </div>
    </div>
  );
};

export default ArrowUpButton;
