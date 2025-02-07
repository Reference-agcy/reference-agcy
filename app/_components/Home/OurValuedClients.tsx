import { i18n } from "i18next";
import Image from "next/image";
import ClientOneImage from "@/public/images/home/ValuedClients/client-1.png";
import ClientTwoImage from "@/public/images/home/ValuedClients/client-2.png";
import ClientThreeImage from "@/public/images/home/ValuedClients/client-3.png";
import ClientFourImage from "@/public/images/home/ValuedClients/client-4.png";
import ClientFiveImage from "@/public/images/home/ValuedClients/client-5.png";

type OurValuedClientsProps = {
  t: i18n["t"];
};

function OurValuedClients({ t }: OurValuedClientsProps) {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-2xl font-bold text-gray-900 xs:text-3xl sm:text-[2rem]">
        {t("home:sections.our-valued-clients")}
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-[2.875rem] px-8 py-6 [&_img]:max-h-[4.725rem] [&_img]:max-w-[12.5rem]">
        <Image src={ClientOneImage} alt="company logo" />
        <Image src={ClientTwoImage} alt="company logo" />
        <Image src={ClientThreeImage} alt="company logo" />
        <Image src={ClientFourImage} alt="company logo" />
        <Image src={ClientFiveImage} alt="company logo" />
      </div>
    </section>
  );
}

export default OurValuedClients;
