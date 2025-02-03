import React from "react";
import Image from "next/image";
import heroImg from "@/public/images/home/hero.png";
import { cn } from "@app/_lib/utils";

interface Props {
  title: string;
  subtitle: string;
  description: string;
  actions: React.ReactNode;
  className?: string;
  titleClassName?: string;
}
const Hero = ({
  title,
  description,
  subtitle,
  actions,
  className,
  titleClassName,
}: Props) => {
  return (
    <section
      data-aos="fade-in"
      className={cn(
        "relative z-10 mt-14 flex h-[30rem] items-center justify-between gap-4 rounded-3xl bg-gray-0 px-6 text-gray-800 dark:text-gray-900 max-lg:justify-center max-lg:overflow-hidden max-lg:text-center 2xl:h-[38rem]",
        className,
      )}
    >
      <Image
        className="absolute left-0 top-0 z-[-1] w-[60%] max-w-[12rem] opacity-60 max-md:max-w-[8rem] lg:hidden"
        width={500}
        height={500}
        src={"/images/home/heroTopShape.svg"}
        alt="hero"
      />
      <Image
        className="absolute bottom-0 right-0 z-[-1] w-[60%] max-w-[12rem] opacity-60 max-md:max-w-[8rem] lg:hidden"
        width={500}
        height={500}
        src={"/images/home/heroBottomShape.svg"}
        alt="hero"
      />
      <div
        className="space-y-10 lg:max-w-[30rem] xl:max-w-[35rem] 2xl:max-w-[55rem]"
        data-aos="fade-up"
      >
        <div className="space-y-8 text-base font-medium lg:text-lg 2xl:text-xl">
          <p className="">{subtitle}</p>
          <h1
            className={cn(
              "text-4xl font-bold lang-en:tracking-tighter lg:text-5xl xl:text-6xl 2xl:text-8xl",
              titleClassName,
            )}
          >
            {title}
          </h1>
          <p className="max-w-[35rem] text-base font-medium lg:text-xl 2xl:max-w-[50rem]">
            {description}
          </p>
        </div>
        {actions}
      </div>
      <div
        className="relative h-full max-lg:hidden"
        data-aos="fade-in"
        data-aos-delay="300"
      >
        <Image
          className="absolute start-[-28%] top-0 w-[90%] lang-ar:rotate-y-180"
          width={500}
          height={500}
          src={"/images/home/heroTopShape.svg"}
          alt="hero"
        />
        <Image
          className="absolute bottom-0 end-0 z-10 w-[75%] lang-ar:rotate-y-180"
          width={500}
          height={500}
          src={"/images/home/heroBottomShape.svg"}
          alt="hero"
        />
        <div className="relative top-[-7%] h-[calc(107%)] lang-ar:rotate-y-180">
          <Image className="h-full w-full" src={heroImg} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
