import Image, { StaticImageData } from "next/image";

type HeroSectionProps = {
  topParagraph: string;
  bottomParagraph: string;
  image: StaticImageData;
};

function HeroSection({
  topParagraph,
  image,
  bottomParagraph,
}: HeroSectionProps) {
  return (
    <section className="flex flex-col gap-[1.375rem]">
      <p
        className="text-lg text-gray-200"
        dangerouslySetInnerHTML={{ __html: topParagraph }}
      />
      <figure className="w-full overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt="header image"
            className="w-full h-auto object-contain"
        />
      </figure>
      <p className="text-lg text-gray-200">{bottomParagraph}</p>
    </section>
  );
}

export default HeroSection;
