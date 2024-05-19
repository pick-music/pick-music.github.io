'use client';
import React from "react";
import {MainScroll} from "@/providers/MainScrollProvider";
import {Button} from "@/components/ui/button";

export const IntroduceSectionLinkButtonGroup: React.FC = () => {
  return (
    <MainScroll.Consumer>
      {
        value => {
          return (
            <div className="flex space-x-4">
              <Button
                onClick={() => value.actions.setPresentSection("instructor")}
              >
                Instructor
              </Button>
              <Button
                onClick={() => value.actions.setPresentSection("classes")}
              >
                Classes
              </Button>
            </div>
          )
        }
      }

    </MainScroll.Consumer>
  )
}