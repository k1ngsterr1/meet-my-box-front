// src/components/Loader.js
import logo from "@assets/brandmark-design.svg";
import useLoaderAnimation from "../animation/useLoaderAnimation";

export const Loader = () => {
  const loaderRef = useLoaderAnimation();

  return (
    <div
      ref={loaderRef}
      className="w-full fixed z-50 h-full bg-white flex flex-col items-center justify-center"
    >
      <img src={logo.src} alt="Logo" className="w-[1024px] h-[512px]" />
    </div>
  );
};
