import {IntroduceSectionLinkButtonGroup} from "@/app/_containers/IntroduceSectionLinkButtonGroup";

export const IntroduceSection = () => {
  return (
    <section id="introduce">
      <div className="container flex h-screen flex-col items-center justify-center">
        <div className="h-[160px]"/>
        <p
          className="bg-gradient-to-br from-[#3DA28A] to-[#FFF84F] bg-clip-text text-[50px] font-extrabold text-transparent"
        >
          PICK
        </p>
        <p
          className="-mt-6 text-center text-[50px] font-semibold"
        >
          What you want to most
        </p>
        <div className="h-[30px]"/>
        <p
          className="text-[20px] font-light text-[#989898]"
        >
          하고 싶은 것 마음대로 다 하숑
        </p>
        <div className="h-[30px]"/>
        <IntroduceSectionLinkButtonGroup/>

        <div className="h-[160px]"/>

      </div>
    </section>
  )
}