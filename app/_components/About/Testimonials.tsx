"use client";

import "swiper/css";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import testimonials from "@/public/data/testimonials.json";

const Testimonials = () => {
  const { t } = useTranslation("about");

  return (
    <section className="pb-14">
      <div className="container">
        <h2
          data-aos="fade-up"
          className="mb-6 border-t border-[#CED1DE] pt-8 text-3xl font-semibold text-gray-900 dark:border-[#3a3a3a]"
        >
          {t("testimonials.title")}
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          speed={400}
          className="relative !grid w-full"
          autoplay={{
            delay: 3000,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            820: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1536: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div
                data-aos="fade-up"
                data-aos-delay={(index % 4) * 100}
                className="rounded-2xl bg-gray-0 p-6 xl:max-w-[24rem]"
              >
                <p className="text-gray-200">{testimonial.description}</p>
                <div className="mt-6 flex items-center gap-4">
                  <Image
                    className="size-10 rounded-full object-cover"
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 2xl:text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-200 2xl:text-base">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
