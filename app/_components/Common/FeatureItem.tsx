import React from "react";

interface FeatureItemProps {
  dataAosDelay?: string;
  dataAos?: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  endSectionComponent?: React.ReactNode;
}
const FeatureItem = ({
  dataAosDelay,
  dataAos,
  title,
  description,
  icon,
  endSectionComponent,
}: FeatureItemProps) => {
  return (
    <div
      className="flex h-full flex-col items-center py-6 text-center"
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
    >
      <span className="mb-8 text-4xl text-primary-500">{icon}</span>
      <div className="flex h-full flex-col items-center gap-4">
        <h3 className="text-[1.4rem] font-bold text-gray-800 dark:text-gray-900">
          {title}{" "}
        </h3>
        <p className="mb-5 text-lg text-gray-200">{description}</p>
        {endSectionComponent}
      </div>
    </div>
  );
};

export default FeatureItem;
