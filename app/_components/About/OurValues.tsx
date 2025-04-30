const OurValues = ({ t }: Props) => {
  return (
    <section className="py-8">
      <div className="container space-y-10">
        <div>
          <h2
            data-aos="fade-up"
            className="mb-6 border-t border-[#EDEDED] pt-8 text-3xl font-semibold text-gray-900 dark:border-[#3a3a3a]"
          >
            {t("about:identity.title")}
          </h2>
          <p className="text-xl leading-relaxed text-gray-600">
            {t("about:hero-text")}
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">Mission</h3>
          <p className="text-gray-600">{t("about:identity.mission")}</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">Vision</h3>
          <p className="text-gray-600">{t("about:identity.vision")}</p>
        </div>

        <div>
          <h2
            className="mt-12 mb-6 border-t border-[#EDEDED] pt-8 text-3xl font-semibold text-gray-900 dark:border-[#3a3a3a]"
          >
            {t("about:values.title")}
          </h2>
          <p className="text-xl leading-relaxed tracking-wide text-gray-500 mb-6">
            {t("about:values.description")}
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["Partnership", "Agility", "Excellence", "Integrity"].map((key) => (
              <li key={key}>
                <h4 className="text-lg font-bold">{t(`about:values.items.${key.toLowerCase()}.title`)}</h4>
                <p className="text-gray-500">{t(`about:values.items.${key.toLowerCase()}.description`)}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
