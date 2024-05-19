import React from "react";
import {HeaderIcon} from "@/components/icons/HeaderIcon";
import {cn} from "@/lib/utils";
import {SwitchThemeButton} from "@/components/buttons/SwitchThemeButton";
import {LinkButton} from "@/components/buttons/LinkButton";
import {PiInstagramLogoBold} from "react-icons/pi";

export interface BaseHeaderProps {
  className?: string,
}

export const BaseHeader: React.FC<BaseHeaderProps> = ({className}) => {
  return (
    <header
      className={cn("h-[var(--header-height)] fixed top-0 flex content-center items-center w-full bg-[hsl(var(--background))] px-8 py-4 border-b", className)}
    >
      <HeaderIcon/>
      <div className="ml-8"/>
      <div className="flex grow gap-2 px-2">
      </div>
      <div className="flex gap-2 px-2">
        <LinkButton
          className="rounded-full text-xl"
          to=""
          variant="ghost"
          size="icon"
        >
          <PiInstagramLogoBold/>
        </LinkButton>
        <SwitchThemeButton
          className="rounded-full text-xl"
          size="icon"
        />
      </div>
    </header>
  )
}