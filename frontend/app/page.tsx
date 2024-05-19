import {MainLayout} from "@/app/_containers/MainLayout";
import {IntroduceSection} from "@/app/_containers/IntroduceSection";
import {InstructorSection} from "@/app/_containers/InstructorSection";
import {ClassesSection} from "@/app/_containers/ClassesSection";


export default function Home() {
  return (
    <MainLayout>
      <IntroduceSection/>
      <InstructorSection/>
      <ClassesSection/>

    </MainLayout>
  );
}
