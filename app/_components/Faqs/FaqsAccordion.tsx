import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@app/_components/ui/accordion";

interface Props {
  t: (key: string) => string;
}
const FaqsAccordion = ({ t }: Props) => {
  const faqKeys = ["job-steps", "job-requirements", "cv-availability"];

  return (
    <div className="container" data-aos="fade-right">
      <Accordion
        defaultValue="item-1"
        type="single"
        collapsible
        className="w-full"
      >
        {faqKeys.map((key, index) => (
          <AccordionItem
            key={index}
            className="border-none p-4"
            value={`item-${index + 1}`}
          >
            <AccordionTrigger className="text-2xl font-bold text-gray-900 hover:no-underline">
              {t(`faqs:faqs.${key}.question`)}
            </AccordionTrigger>
            <AccordionContent className="text-lg text-gray-200">
              {t(`faqs:faqs.${key}.answer`)}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqsAccordion;
