import { i18n } from "i18next";
import Image from "next/image";
import SingleStage from "./SingleStage";


interface Props {
  t: i18n["t"];
}

export default function RecruitmentProcess({ t }: Props) {
  const recruitmentProcess = t("candidate:recruitment.recruitmentProcess", {
    returnObjects: true,
  });

  return (
    <div className="flex flex-col items-center">
      <h2
        data-aos="fade-down"
        className="text-center text-5xl font-bold tracking-tight text-gray-900"
      >
        {t("candidate:recruitment.title")}
      </h2>

      <div className="relative w-full">
        <Image
          data-aos="fade-in"
          src="/images/candidate/line.png"
          alt="line"
          width={556}
          height={1860}
          className="absolute inset-0 h-[1860px] w-full object-contain max-lg:hidden"
        />

        {recruitmentProcess.map((process, i) => (
          <SingleStage key={i} process={process} isReversed={i % 2 !== 0} />
        ))}
      </div>
    </div>
  );
}