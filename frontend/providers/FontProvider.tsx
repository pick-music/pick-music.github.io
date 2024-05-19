import React from "react";
import localFont from "next/font/local";
import {cn} from "@/lib/utils";
import {className} from "postcss-selector-parser";

const pretendard = localFont({
  src: [
    {
      path: "../public/fonts/Pretendard-Regular.subset.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Pretendard-Medium.subset.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Pretendard-SemiBold.subset.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Pretendard-Bold.subset.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Pretendard-ExtraBold.subset.woff2",
      weight: "800",
      style: "normal",
    },
  ]
});

export interface FontProviderProps {
  className?: string;
  children: React.ReactNode;
  tag?: string | typeof React.Component;
}

export const FontProvider: React.FC<FontProviderProps> = ({className, children, tag}) => {
  const Tag = tag || 'body';
  return (
    <Tag
      className={cn(pretendard.className, className)}

    >
      {children}
    </Tag>
  )
}