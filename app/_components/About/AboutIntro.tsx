interface Props {
  t: (key: string) => string;
}

const AboutIntro = ({ t }: Props) => {
  return (
    <section className="py-8">
      <div className="container">
        <h2
          className="mb-6 border-t border-[#EDEDED] pt-8 text-3xl font-semibold text-gray-900 dark:border-[#3a3a3a]"
          data-aos="fade-up"
        >
          {t("about:aboutIntro.title")}
        </h2>
        <p className="text-xl leading-relaxed tracking-wide text-gray-500">
          {t("about:aboutIntro.description")}
        </p>
      </div>
    </section>
  );
};

export default AboutIntro;
