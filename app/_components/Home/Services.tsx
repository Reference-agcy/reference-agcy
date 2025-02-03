import React from "react";
import Image from "next/image";
import SingleServiceWithImage from "../Common/SingleServiceWithImage";
import { Button } from "../ui/button";
import SingleService from "./SingleService";
import hrImg from "@/public/images/home/hr-service.png";
import partTimeImg from "@/public/images/home/secondService.png";
import techConsaltantImg from "@/public/images/home/service1.jpeg";

interface Props {
  t: (key: string) => string;
}
const Services = ({ t }: Props) => {
  return (
    <div
      id="services"
      className="grid grid-cols-1 grid-rows-2 gap-6 md:grid-cols-2 lg:grid-cols-[380px_1fr_1fr] 2xl:grid-cols-[540px_1fr_1fr]"
    >
      <SingleServiceWithImage
        dataAos="fade-left"
        imageUrl={techConsaltantImg.src}
        className="col-span-2 row-span-2 lg:col-span-1 max-lg:[&_img]:object-[50%_30%]"
        title={t("home:sections.tech-consultation.title")}
        text={t("home:sections.tech-consultation.description")}
        btn={
          <Button className="w-fit bg-secondary-500">
            {t("home:actions.learn-more")}
          </Button>
        }
        hasGradient={false}
      />
      <div
        data-aos="fade-down"
        className="col-span-2 row-span-1 flex justify-between rounded-3xl bg-secondary-500 max-md:flex-col md:items-center"
      >
        <div className="w-full max-w-[20rem] space-y-4 py-8 ps-8 2xl:max-w-[30rem]">
          <h2 className="text-4xl font-extrabold text-black 2xl:text-6xl">
            {t("home:sections.part-time.title")}
          </h2>
          <p className="text-base text-gray-600 2xl:text-xl">
            {t("home:sections.part-time.description")}
          </p>
          <Button
            className="text-white dark:bg-[#313549] dark:hover:bg-white dark:hover:text-gray-0"
            variant={"secondary"}
          >
            {t("home:actions.learn-more")}
          </Button>
        </div>
        <div className="w-full max-w-[30rem] self-end max-md:hidden 2xl:pt-6">
          <Image
            className="w-full grayscale"
            src={partTimeImg}
            alt="part time"
          />
        </div>
      </div>
      <SingleService
        dataAos="zoom-in"
        className="bg-gray-700 text-white"
        title={t("home:sections.full-time.title")}
        text={t("home:sections.full-time.description")}
        actionBtn={
          <Button className="w-fit">{t("home:actions.learn-more")}</Button>
        }
      />
      <SingleService
        dataAos="zoom-out"
        className="bg-primary-500 text-gray-800 dark:text-gray-100"
        title={t("home:sections.hr-operations.title")}
        text={t("home:sections.hr-operations.description")}
        actionBtn={
          <Button
            variant={"secondary"}
            className="w-fit dark:bg-gray-100 dark:text-white"
          >
            {t("home:actions.learn-more")}
          </Button>
        }
      />
      <SingleServiceWithImage
        dataAos="fade-up"
        imageUrl={hrImg.src}
        className="col-span-2 gap-6 py-12 lg:col-span-3"
        title={t("home:sections.hr-consultation.title")}
        text={t("home:sections.hr-consultation.description")}
        btn={<Button className="w-fit">{t("home:actions.learn-more")}</Button>}
        hasGradient={true}
      />
    </div>
  );
};

export default Services;
