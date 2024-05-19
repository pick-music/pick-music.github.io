import React from "react";
import {Tabs, TabsTrigger, TabsList, TabsContent} from "@/components/ui/tabs";

export const InstructorSection: React.FC = () => {
  return (
    <section
      id="instructor"
      className="flex h-screen flex-col items-center justify-center bg-[#FAFAFA] pt-5 dark:bg-[#1A1A1A]"
    >
      <div className="h-[85px]"/>
      <div className="text-[38px] font-semibold">
        Instructor
      </div>
      <Tabs>
        <TabsList>
          <TabsTrigger value="guitar">Guitar</TabsTrigger>
          <TabsTrigger value="piano">Piano</TabsTrigger>
          <TabsTrigger value="drum">Drum</TabsTrigger>
          <TabsTrigger value="vocal">Vocal</TabsTrigger>
        </TabsList>
        <TabsContent value="guitar">
          <div>
            <p>Guitar</p>
          </div>
        </TabsContent>
        <TabsContent value="piano">
          <div>
            <p>Piano</p>
          </div>
        </TabsContent>
        <TabsContent value="drum">
          <div>
            <p>Drum</p>
          </div>
        </TabsContent>
        <TabsContent value="vocal">
          <div>
            <p>Vocal</p>
          </div>
        </TabsContent>
      </Tabs>

    </section>
  )
}