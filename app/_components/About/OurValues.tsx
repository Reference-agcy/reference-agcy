interface Props {
  t: (key: string) => string;
}
const OurValues = ({ t }: Props) => {
  return (
    <section className="py-8">
      <div className="container">
        <h2
          data-aos="fade-up"
          className="mb-6 border-t border-[#CED1DE] pt-8 text-3xl font-semibold text-gray-900 dark:border-[#3a3a3a]"
        >
          {t("about:values.title")}
        </h2>
        <p className="text-xl leading-relaxed tracking-wide text-gray-500">
          {t("about:values.description")}
        </p>
      </div>
    </section>
  );
};

export default OurValues;
