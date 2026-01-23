import React from "react";
import { useNavigate } from "react-router";
import errorImg from "../assets/airfarescope_error.png";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      {/* IMAGE */}
      <div className="mb-6">
        <img
          src={errorImg}
          alt="404 Not Found"
          className="
            w-72 md:w-96
            rounded-2xl
            border border-white
            shadow-[0_0_25px_rgba(255,255,255,0.9)]
          "
        />
      </div>

      {/* TEXT */}
      <p className="text-gray-500 mb-6 text-center max-w-md">
        Oops! The page you’re looking for doesn’t exist or was removed.
      </p>

      {/* BUTTON */}
      <button
        onClick={() => navigate("/")}
        className="
          px-6 py-3
          rounded-xl
          bg-black text-white
          font-medium
          transition-all duration-300
          hover:bg-gray-800
          hover:scale-105
          active:scale-95
          shadow-md hover:shadow-xl
        "
      >
        Go Home
      </button>
    </div>
  );
};

export default Error;
