// src/components/Loader.js
import logo from "@assets/brandmark-design.svg";
import useLoaderAnimation from "../animation/useLoaderAnimation";

export const Loader = () => {
  const loaderRef = useLoaderAnimation();

  return (
    <div
      ref={loaderRef}
      className="w-full fixed z-50 h-full bg-white flex flex-col items-center justify-center"
      style={{ minWidth: "100%", minHeight: "100%" }}
    >
      <img
        src={logo.src}
        alt="Logo"
        loading="lazy"
        width={1024}
        height={512}
        // className="w-[1024px] h-[512px] object-contain" // CSS classes for additional styling
      />
    </div>
  );
};
