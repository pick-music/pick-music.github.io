'use client';
import React from "react";
import {Button, ButtonProps} from "@/components/ui/button";
import {useRouter} from "next/navigation";

export interface LinkButtonProps extends ButtonProps{
  to: string,
}

export const LinkButton: React.FC<LinkButtonProps> = ({ to, children, ...props }) => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push(to)}
      {...props}
    >
      {children}
    </Button>
  )
}