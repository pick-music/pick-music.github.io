'use client';

import React from "react";
import Image from "next/image";
import {useTheme} from "next-themes";

export const HeaderIcon: React.FC = () => {
  const {theme} = useTheme()
  return (
    <div
      className="flex w-auto items-center"
    >
      <img
        src="/svgs/pickpick.svg"
        alt="pickpick"
        className="size-[35px]"
      />
      {theme === "dark" && (
        <img
          src="/icons/logo-dark.png"
          alt="Logo"
          className="h-[30px] w-[60px]"
        />
      )}
      {theme === "light" && (
        <img
          src="/icons/logo-light.png"
          alt="Logo"
          className="h-[30px] w-[60px]"
        />
      )}

    </div>
  )

}