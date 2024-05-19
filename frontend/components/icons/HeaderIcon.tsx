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
      <Image
        src="/svgs/pickpick.svg"
        alt="pickpick"
        width={35}
        height={35}
      />
      {theme === "dark" && (
        <Image
          src="/logo-dark.png"
          alt="Logo"
          width={60}
          height={30}
        />
      )}
      {theme === "light" && (
        <Image
          src="/logo-light.png"
          alt="Logo"
          width={60}
          height={30}
        />
      )}

    </div>
  )

}