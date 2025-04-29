import React from "react";
import Image from "next/image";
import heroImg from "@/public/images/about/about2.jpeg";

interface Props {
  t: (key: string) => string;
}
const Hero = ({ t }: Props) => {
  return (
    <section className="py-8">
      <div className="container">
        <p
          className="mb-6 text-lg text-gray-300 2xl:text-xl"
          data-aos="fade-up"
        >
          {t("about:hero-text")}
        </p>
        <Image
          data-aos="zoom-in"
          data-aos-delay="200"
          className="h-[26.25rem] rounded-2xl object-cover object-[50%_15%] 2xl:h-[35rem]"
          src={heroImg}
          alt={t("about:hero-alt")}
        />
      </div>
    </section>
  );
};

export default Hero;
