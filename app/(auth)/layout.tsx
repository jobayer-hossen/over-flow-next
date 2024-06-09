"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState("");
  const router = useRouter();

  const getThemeColor = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setMode("dark");
      document.documentElement.classList.add("dark");
    } else {
      setMode("light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    getThemeColor();
  }, [mode]);

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div
      style={
        mode === "dark"
          ? { backgroundImage: "url('/assets/images/auth-dark.png')" }
          : { backgroundImage: "url('/assets/images/auth-light.png')" }
      }
      className="flex min-h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat"
    >
      <div>
        <button
          // @ts-ignore
          className=" light-border-2  gap-1.5 rounded-md  bg-green-500  px-4 py-2.5 text-white shadow-none "
          onClick={handleBackClick}
        >
          Back
        </button>
      </div>
      {children}
    </div>
  );
};

export default Layout;
