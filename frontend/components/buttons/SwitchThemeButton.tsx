'use client';
import * as React from "react"
import {useTheme} from "next-themes"
import {Button, ButtonProps} from "@/components/ui/button";
import {PiSunBold, PiMoonStarsBold} from "react-icons/pi";


export interface SwitchThemeButtonProps extends ButtonProps {
}

export const SwitchThemeButton: React.FC<SwitchThemeButtonProps> = (props) => {
  const {theme, setTheme} = useTheme();


  return (
    <Button
      size="icon"
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      {...props}
    >
      {theme === "dark" ? <PiSunBold/> : <PiMoonStarsBold/>}
    </Button>
  )
}